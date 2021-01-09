import React, { Fragment, useState, useEffect } from 'react';
import Product from "./Product"
import axios from "axios"
import "./ProductStyle.scss"

export default function ProductList() {
	
	const [products,setProducts]=useState([]);
	
	useEffect(()=>{
		axios.get("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")
		.then(res=>{
			setProducts(res.data);
		})
	},[])
	

	
  return (
    <div className="productList">
	{
		products.length>0 ?
              products.map((p,index)=>(
					<Product item={p} key={index} />
              ))
			 : <p> no data </p>
	}
	
    </div>
  );
}
