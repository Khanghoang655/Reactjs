import React, { useState } from "react";
import PropTypes from "prop-types";

Category.propTypes = {
    categories: PropTypes.array,
  };
  Category.defaultProps = {
    categories: [],
  };
export default function Category({categories}) {
    var [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleCategoryClick = (id) => {
        setSelectedCategoryId(id);
        console.log(selectedCategoryId)
      };
      
  return (
    <div>
      <div className="ps-top-categories" style={{ marginTop: "100px" }}>
        <div className="ps-container">
          <div className="row">
            {categories.map((category) => (
              <div
                key={category.id}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
              >
                <div className="ps-block--category">
                  <a
                    className="ps-block__overlay"
                    href={`/category-product/${category.id}`}
                    onClick={() => handleCategoryClick(category.id)}
                  />
                  <p>{category.attributes.Name}</p>
                  <img
                    src={
                      "http://localhost:1337" +
                      category.attributes.image.data[0].attributes.url
                    }
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
