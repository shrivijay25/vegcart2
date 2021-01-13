import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Product from "./Product"
import { useSelector } from "react-redux"


export default function ProductList(props) {

  const products = useSelector((state)=>state.samp1.filteredProducts)

    return(
      <div>
         <Container>
         <Row className="">

          {
              products.map((p)=>(
                <Col sm={12} md={6} lg={3} key={p.id} className="align-middle">
                 <Product productDetails={p}  />
                </Col>
              ))
          }
        
        </Row>
        </Container>

      </div>

      
    )
  
}