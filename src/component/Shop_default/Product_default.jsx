import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Product_default() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchDataFromApi("/api/category2s?populate=*").then((res) => {
      setCategories(res.data);
    });
  }, []);
  const navigate = useNavigate()
  const handleCategoryClick = (categoryId) => {
    navigate(`/category-product/${categoryId}`);
  };
  return (
   <>
      {categories &&
        categories.map((value) => (
          <div key={value.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" onClick={() => handleCategoryClick(value.id)}>
            <div className="ps-block--category-2" data-mh="categories">
              <div className="ps-block__thumbnail">
              <img src={'http://localhost:1337' + value.attributes.image.data[0].attributes.url} alt="" />
              </div>
              <div className="ps-block__content">
                <h4>{value.attributes.Name} </h4>
                <ul>
                  {Array.isArray(value.attributes.product_2s.data) &&
                    value.attributes.product_2s.data.map((item) => (
                      <li key={item.id}>
                        <a href={`/category-product/${value.id}`}>{item.attributes.Name}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))
    }</>
  );
}
