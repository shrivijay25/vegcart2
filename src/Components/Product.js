import React , { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import PopupBox from "./PopupBox"
import Counter from "./Counter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"


export default function Product(props) {

  const product = props.productDetails
  const [ modalShow, setModalShow ] = useState(false)
  const [ pName, setPname] = useState("")
  const [ pImage, setPimage] = useState("")
  const [ productCount, setProductCount ] = useState(1)
  const [ isAdded, setIsAdded ] = useState(false)
  const dispatch = useDispatch()
  const inCartProduct = useSelector((state)=>state.samp1.inCart)


  const updateCartValue=(val)=>{
    setProductCount(val)
  }

  const addToCart=()=>{
      let cartProduct = {
        name: product.name,
        price: product.price,
        qty: productCount
      }

    let itemAvaliable=false;

    inCartProduct.map(pro=>{
        if(pro.name=== product.name)
        {
          itemAvaliable=true;
          let total=Number(pro.qty) +Number(productCount);
          pro.qty=total;
        }
    })
    
    if(itemAvaliable===false){
      inCartProduct.push(cartProduct);
      //else we are updating the cart qty itself.
    }

    dispatch({type: "UPDATE_CART", payload:inCartProduct })
    setIsAdded(true)
    
    setTimeout(() => {
      setIsAdded(false)
    }, 2000);
  }

  const openImage = () => {
      setModalShow(true)
      setPname(product.name)
      setPimage(product.image)
  }
       
  const modalClose = () => setModalShow(false);
    
    return(
      <div>
            <Card style={{ width: '18rem' }} className="custom_card">
            <Card.Img variant="top" onClick={ openImage }
            src={product.image} className="image_zoom" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <b> ₹{product.price} </b>
                </Card.Text>
                    <Counter  getCartValue={(val)=>updateCartValue(val)}/>
                    {
                        isAdded ?
                        <Button className="added_cart_btn" onClick={addToCart} block> 
                          <FontAwesomeIcon icon={faCheck} />  Added to Cart
                        </Button> :
                        <Button className="add_cart_btn" onClick={addToCart} block>Add to Cart</Button>
                    }
            </Card.Body>
            </Card>

           <PopupBox
                show={modalShow}
                onHide={modalClose}
                p_name={pName}
                p_image={pImage}
            />

        

      </div>

    )
  
}