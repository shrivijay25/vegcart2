import React , { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'


export default function Counter(props) {
  
  const [itemCount,setItemCount] = useState(1)

  const addCount=()=>{
    setItemCount(Number(itemCount)+Number(1))
  }

  const minusCount=()=>{
    if(itemCount>1) {
      setItemCount( Number(itemCount)-Number(1))
    }
 }

 const cartValueChange=(e)=>{
      setItemCount(e);
 }

 useEffect(()=>{
    props.getCartValue(itemCount)
 },[itemCount])



    return(
      <div>
        <Button variant="sign_btn" onClick={minusCount}>
            <FontAwesomeIcon icon={faMinus} />
        </Button>
            <input type="number" className="cart_text" value={itemCount} onChange={(e)=>cartValueChange(e.target.value)} min="1" />
        <Button variant="sign_btn" onClick={addCount}> 
            <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      
    )
  
}