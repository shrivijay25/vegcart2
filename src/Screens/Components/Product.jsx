import React, { Fragment,  useState } from 'react';
import AddItems from "./AddItems"
import "./ProductStyle.scss"

export default function Product(props) {

	
  return (
	<div className="productCard">
		<img src={props.item.image} className="imageClip" />
		<p className="desc"> {props.item.name} </p>
		<p className="desc"> Rs. {props.item.price} </p>
		<AddItems />
	</div>
  );
}

