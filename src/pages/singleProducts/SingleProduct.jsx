import { useState } from "react";
import { addToCart } from "../../redux/slices/cartSlice";

import useFetch from "./../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";

import toast from 'react-hot-toast';


import "./singleProduct.scss";


const SingleProduct = () => {
  const id = useParams().id

  const [selectImg, setSelectImg] = useState("image");
  const [quantity, setQuantity] = useState(1);

  //FETCH HOOK  / STRAPI FILTERS
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);


  const dispatch = useDispatch()



  return (
    <div className="singleProduct">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                 import.meta.env.VITE_REACT_APP_UPLOAD_URL+data?.attributes?.image?.data?.attributes?.url
                }
                alt="img"
                onClick={(e) => setSelectImg("image")}
              />
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL+data?.attributes?.image2?.data?.attributes?.url
                }
                alt="img"
                onClick={(e) => setSelectImg("image2")}
              />
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL+data?.attributes?.image3?.data?.attributes?.url
                }
                alt="img"
                onClick={(e) => setSelectImg("image3")}
              />
            </div>

            <div className="mainImage">            {/*main image */}
              <img
                src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+data?.attributes[selectImg]?.data?.attributes?.url}
                alt="img"
                onClick={(e) => setSelectImg(0)}
              />
            </div>
          </div>

          <div className="right">
            <h1>{data?.attributes?.title} </h1>

            <span className="price">${data?.attributes?.price}  </span>
            <p>
            {data?.attributes?.description}
            </p>

            <div className="quantity">

                       {/* decrease qty */}
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>

               {/* increase qty */}
              <button onClick={() => 
              
                setQuantity((prev) => prev + 1)}>+</button>
            </div>

                        {/*add to cart button*/}
            <button
            onClick={() => 
              dispatch(addToCart({
              id: data.id,
              title:data.attributes.title,
              description:data.attributes.description,
              price:data.attributes.price,
              image: data.attributes.image.data.attributes.url,
              quantity
            }),
            toast.success( ` ${quantity} - ${data.attributes.title} Added to Cart`)
            
            )}
             className="add">
              <MdAddShoppingCart size={19} /> ADD TO CART
            </button>

            <div className="links">
              <div className="item">
                <AiOutlineHeart size={19} /> WISH LIST
              </div>

              <div className="item">
                <FaBalanceScaleLeft /> ADD TO COMPARE
              </div>
            </div>

            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type : T-Shirt</span>
              <span>Category: T-Shirt</span>
              <hr />

              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDTIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
