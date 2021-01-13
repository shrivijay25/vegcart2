import React , { useState } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import CartPage from "./CartPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
 
  const [modalShow,setModalShow] = useState()

  const modalClose = () =>{
    setModalShow(false);
  } 

    return(
      <div>
          <Navbar bg="primary" variant="dark" fixed="top" >
            <Navbar.Brand>
              Veg-Cart
            </Navbar.Brand>
            <Navbar.Toggle />
              <Container  className="justify-content-end">
                <Navbar.Brand onClick={()=>{setModalShow(true)}}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <b> {props.cartItems.length} </b>
                </Navbar.Brand>
                                    
              </Container>
          </Navbar>

          <CartPage 
               onHide={modalClose}  
               show={modalShow}
               cartItems={props.cartItems}
          />

      </div>
    )
  }

