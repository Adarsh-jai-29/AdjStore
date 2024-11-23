import React from 'react'
import Product from './Product';

function GridView({Wrapper,allProducts}) {
  return (
      <Wrapper className="section">
    <div className="container">
      <div className="grid grid-three-column ">
        {allProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  </Wrapper>
  )
}

export default GridView