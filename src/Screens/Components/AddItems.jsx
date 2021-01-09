import React, { Fragment, useState } from 'react';
import "./ProductStyle.scss"
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CheckIcon from '@material-ui/icons/Check';
import { useSelector, useDispatch} from "react-redux"

export default function AddItems(props) {
	
	const [itemVal, setItemVal]=useState(1);
	const [added, setAdded]=useState(true);
	
	const addCart=()=>{
		console.log("Added");
		setAdded(false);
		setTimeout(()=>{
			setAdded(true);
		},1000);
	}
	
	
  return (
	<Fragment >
	<div className="addItemStyle" >
		<IconButton onClick={()=>itemVal>1&&setItemVal(itemVal-1)} aria-label="delete"  >
			  <RemoveIcon />
		</IconButton>
		<p className="count"> {itemVal}   </p>
		<IconButton onClick={()=>itemVal>0&&setItemVal(itemVal+1)} aria-label="delete" >
			  <AddIcon />
		</IconButton>
	</div>
	{ added ?
		<div className="addToCart noselect" onClick={()=>addCart()} >
			Add to Cart
		</div>
		:
		<div className="addedToCart noselect" >
			Added to Cart
		</div>
	}
	
	</Fragment>
  );
}

