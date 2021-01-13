import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function CartPage(props) {
    

  const [show,setShow] = useState(props.show)
  const [cartItems,setCartItems] = useState([])
  let counter=1;

  useEffect(()=>{
    setCartItems(props.cartItems)
    setShow(props.show)
  }, [props])


  const sumPrice =()=> {
      let sum=0;
      for(let i=0;i<cartItems.length;i++){
          sum=Number(sum)+ Number(cartItems[i].price * cartItems[i].qty)
      }

      return sum;
  }

  const removeItem=(val)=>{
      let fitem = cartItems.filter(item => item.name !== val ); 
      setCartItems(fitem)
  }

        
			return(
				  <Modal
                    show={show}
					size="lg"
					dialogClassName="modal-90w"
					aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
					>
					<Modal.Header >
						<h4 className="font-italic"> Items in your Cart </h4>
                        <span onClick={props.onHide}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
					</Modal.Header>
					<Modal.Body className=" d-flex align-items-center justify-content-center">
                    { 
                        cartItems.length>0 ?
                        <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cartItems.map((p)=>(
                                <tr key={p.name}>
                                    <td>{counter++}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>{p.qty}</td>
                                    <td>{Number(p.price) * Number(p.qty)}</td>
                                    <td>
                                        <Button variant="sign_btn" onClick={()=>{removeItem(p.name)}}> 
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                        </Table> 
                        :
                        <p> Your Cart Is Empty ! </p>
                    }
                   
					</Modal.Body>
                   
                    <Modal.Footer>
                    {
                        cartItems.length >0 &&
                        <div>
                             <h5>  Net Amount : {sumPrice()} </h5>
                        </div>
                    }
                        
                    </Modal.Footer>
				</Modal>

			)
		}
    

