import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {AppContext} from "./context/ProductContext";
import PageNavigation from "./PageNavigation";
import {Container} from "./Container";
import MyImage from "./MyImage";

import {TbTruckDelivery,TbReplace} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import StarRating from "./StarRating";
import { AddToCart } from "./AddToCart";

 const SingleProduct = ()=>
  {
    
 const {id} =  useParams()
//  console.log(param)  

 const {getSingleProduct,API,singleProduct} = useContext(AppContext)
 const {isSingleProductLoading} = useContext(AppContext)
  useEffect(() => {
    getSingleProduct(`${API}/${id}`);  //let it see
  }, []);

  if (isSingleProductLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

return <Wrapper>
 <PageNavigation title = {singleProduct.name} />
 <Container className="container">
    <div className="grid grid-two-column">
      {/* product Images  */}
      <div className="product_images">
      {singleProduct.image && <MyImage images={singleProduct.image} />}
      </div>

      {/* product data  */}
      <div className="product-data">
        <h2>{singleProduct.name}</h2>
        <StarRating reviews={singleProduct.reviews}   stars={singleProduct.stars} />
        <p>{singleProduct.reviews} reviews</p>
        <p className="product-data-price">
          MRP:
          <del>
            {/* <FormatPrice price={price + 250000} /> */}
            ₹{singleProduct.price+500}
          </del>
        </p>
        <p className="product-data-price product-data-real-price">
          Deal of the Day: {singleProduct.price} 
        </p>
        <p>{singleProduct.description}</p>
        <div className="product-data-warranty">
          <div className="product-warranty-data">
            <TbTruckDelivery className="warranty-icon" />
            <p>Free Delivery</p>
          </div>

          <div className="product-warranty-data">
            <TbReplace className="warranty-icon" />
            <p>7 Days Replacement</p>
          </div>

          <div className="product-warranty-data">
            <TbTruckDelivery className="warranty-icon" />
            <p>Adj Deliveres </p>
          </div>

          <div className="product-warranty-data">
            <MdSecurity className="warranty-icon" />
            <p>1 Year Warranty </p>
          </div>
        </div>

        <div className="product-data-info">
          <p>
            Available:
            <span> {singleProduct.stock > 0 ? "In Stock" : "Not Available"}</span>
          </p>
          <p>
            ID : <span> {id} </span>
          </p>
          <p>
            Brand :<span> {singleProduct.company} </span>
          </p>
          <AddToCart stock={singleProduct.stock} />
        </div>
      </div>
    </div>
  </Container>
</Wrapper>;
 }

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
