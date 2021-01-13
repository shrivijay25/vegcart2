import React , { useState } from 'react'
import { Card, Accordion,Button, Form,Container,Row,Col} from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"

export default function Filters(props) {

  const [searchterm,setSearchterm] = useState("")
  const [category,setCategory] = useState("none")
  const [sortBy,setSortBy] = useState("none")
  // const [isFilter,setIsFilter] = useState(false)
  const [catFilter,setCatFilter] = useState([])

  const state = useSelector((state)=>state.samp1)
  const dispatch = useDispatch()

  const changeHandle=(e)=>{
    
    console.log(e.target.name);

    if(e.target.name==="searchterm"){
          setSearchterm(e.target.value)
          let fData
          if(category==="none")
            fData= state.rawProducts.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()))
          else
            fData= catFilter.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()))

          dispatch({type:"UPDATE_PRODUCTS",payload:fData})
    }
    else if(e.target.name==='category'){
          setCategory(e.target.value)
          setSearchterm("")
          let fData = state.rawProducts.filter(p =>  p.category===e.target.value)
          dispatch({type:"UPDATE_PRODUCTS",payload:fData})
          setCatFilter(fData)
    }

    else  if(e.target.name==='sortBy'){
          
      setSortBy(e.target.value)
      let fData

      let products = searchterm==="" || category ==="none" ? state.rawProducts : state.filteredProducts

          if(sortBy==="nameAsc"){
              fData = products.sort(
                (a, b) => a.name.localeCompare(b.name)
              );
          }
          else if(sortBy==="nameDsc"){
              fData = products.sort(
                (a, b) => b.name.localeCompare(a.name)
              );
          }
          else if(sortBy==="priceAsc"){
              fData = products.sort(
                (a, b) => a.price - b.price)
              ;
          }
          else if(sortBy==="priceDsc"){
              fData = products.sort(
                  (a, b) => b.price - a.price)
          }
          else{
              fData=state.rawProducts;
          }

          dispatch({type:"UPDATE_PRODUCTS",payload:fData})
    }
    // setIsFilter(true)
  }

  const clearFilters=()=>{
    setCatFilter([])
    setSearchterm("")
    setSortBy("none")
    setCategory("none")
    dispatch({type:"UPDATE_PRODUCTS",payload:state.rawProducts})
  }


    return(
      <div>
            <Accordion >
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className="c_accordion"  aria-labelledby="navbarDropdown">
                   Filters
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body className="text-left">
                <Container>
                  <Row >
                  <Col sm={3}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Search Items</Form.Label>
                        <Form.Control type="text" placeholder="Type a product" name="searchterm" value={searchterm}   onChange={changeHandle} />
                    </Form.Group>
                   </Col>

                    <Col sm={3}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Filter Items</Form.Label>
                        <Form.Control as="select" name="category" value={category} onChange={changeHandle}>
                          <option value="none">Choose...</option>
                          <option value="vegetables">Vegetables</option>
                          <option value="fruits">Fruits</option>
                          <option value="nuts">Nuts</option>
                        </Form.Control>
                    </Form.Group>
                   </Col>

                    <Col sm={3}>
                    {/* <Form.Group controlId="formGroupEmail">
                        <Form.Label>Sort By</Form.Label>
                        <Form.Control as="select" name ="sortBy" value={sortBy} onChange={changeHandle}>
                          <option value="none">Choose...</option>
                          <option value="nameAsc">Name Asc</option>
                          <option value="nameDsc">Name Dsc</option>
                          <option value="priceAsc">Price Asc</option>
                          <option value="priceDsc">Price Dsc</option>
                        </Form.Control>
                    </Form.Group> */}
                   </Col>

                   <Col sm={3}>
                      <Button variant="outline-primary"   className="filter_btn"
                      onClick={clearFilters}
                      >Clear All Filters </Button>                      
                   </Col>

                   </Row>
                   </Container>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
      </div>
    )
  
}