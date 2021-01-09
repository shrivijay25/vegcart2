import React, { Fragment } from 'react';
import  NavBar  from './Components/NavBar';
import  ProductList  from './Components/ProductList';

export default function Home() {
  return (
    <React.Fragment>
		<NavBar />
		<ProductList />
    </React.Fragment>
  );
}

