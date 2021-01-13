import React, { useEffect } from 'react'
import Header from './Header'
import Filters from "./Filters"
import ProductList from "./ProductList"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
// import { getAllProducts } from "../ServiceCall/api"

export default function HomePage() {

    const state = useSelector((state)=>state.samp1)
    const dispatch = useDispatch()

    useEffect(()=>{
        async function  getData() {
            await axios.get(`https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json`)
            .then(res => {
                dispatch({type:"SET_PRODUCTS", payload:res.data})
                dispatch({type:"UPDATE_PRODUCTS", payload:res.data})
            })
        }
        getData()
        
    },[])



        return (
            <div>
                
                <Header 
                    cartItems={state.inCart}   
                />
                <br /><br />
                <Filters 
                    data = {state.filteredProducts}
                />
                {state.filteredProducts.length > 0 &&
                        <ProductList 
                            productDetails={state.filteredProducts} 
                           
                 />
                }
            </div>
        )



}
