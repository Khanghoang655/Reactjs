import PropTypes from "prop-types";
import {useNavigate } from "react-router-dom";

Product2.propTypes = {
  categories: PropTypes.array,
};
Product2.defaultProps = {
  categories: [],
};

export default function Product2({ categories }) {

  return (
    <div className="ps-top-categories" >
      <div className="ps-container">
        <div className="row">
          {categories &&
            categories.map((value) => (
              <div key={value.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" >
                <div className="ps-block--category">
                  <a className="ps-block__overlay" href="/Shop-default" />
                  <p>{value.attributes.Name}</p>
                    <img src={'http://localhost:1337' + value.attributes.image.data[0].attributes.url} alt="" />                  
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
