import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "./../../hooks/useFetch";


import "./product.scss";



const Products = () => {
 
  // react hook (get id)
  const catID = parseInt(useParams().id);
  //max price state
  const [maxPrice, setMaxPrice] = useState(1000);
  //sort / category state
  const [sort, setSort] = useState("asc");

  //categorys state
  const [selectedSubCategorys, setSelectedSubCategorys] = useState([]);

  //FETCH HOOK
  const { data, loading, error } = useFetch(
    `/sub-categories?=[filters][categories][id][$eq]=${catID}`
  );

  // seelected category function
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategorys(
      isChecked
        ? [...selectedSubCategorys, value]
        : selectedSubCategorys.filter((item) => item !== value)
    );
  };


  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h3>Product Categories</h3>
                                      {/*  onChange Categories */ }
          {data?.map((item) => (
            <div key={item.id} className="inputItem">
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor="1">{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h3>Filter by Price</h3>
          <div className="inputItem">
            <span>0</span>
                      {/*  onChange maxPrice */ }
            <input
              type="range"
              min={0}
              max={1000}                
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice} </span>
          </div>
        </div>

        <div className="filterItem">
          <h3>Sort by</h3>
                {/*  onChange sort  asc*/ }
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />

            <label htmlFor="asc">Price (Lowest)</label>
          </div>
                  {/*  onChange sort  desc*/ }
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />

            <label htmlFor="desc">Price (Highest)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="category-image"
          className="catImage"
        />
        {/*  LIST COMPONENT*/ }
        <List catID={catID} maxPrice={maxPrice} sort={sort}  subCat={selectedSubCategorys} />
      </div>
    </div>
  );
};

export default Products;
