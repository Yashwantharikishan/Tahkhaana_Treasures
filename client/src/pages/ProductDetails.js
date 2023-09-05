import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setproduct] = useState({});
  const navigate = useNavigate();
  const [relatedProducts, setRelatedProducts] = useState([]);
  //initial Product deatils
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params.slug]);
  //get Product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setproduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row  container product-details mt-3">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="525"
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">
            <i>
              <b>Product Details</b>
            </i>
          </h1>
          <hr />
          <h6>
            <b>Name:</b> {product.name}
          </h6>
          <h6>
            <b>Price:</b> ₹{product.price}.00
          </h6>
          <h6>
            <b>Description:</b> {product.description}
          </h6>
          <h6>
            <b>Shipping:</b> {product.shipping}
          </h6>
          <h6>
            <b>Category: </b>
            {product?.category?.name}
          </h6>

          <button class="btn btn-secondary ms-1">Add To Cart</button>
        </div>
      </div>
      <div className="row container similar-products ">
        <h1 className="text-center mt-2">
          <i>
            <b>Similar Products</b>
          </i>
        </h1>
        <hr />
        {relatedProducts.length < 1 && <p>No Similar Product Found</p>}
        <div className="d-flex flex-wrap px-5 mt-2 ">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <h5 className="card-title card-price">
                  {p.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "INR",
                  })}
                </h5>
                <p className="card-text">{p.description.substring(0, 40)}</p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
