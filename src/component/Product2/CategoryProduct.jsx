import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchDataFromApi } from "../../utils/api";

export default function CategoryProduct() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  const getCategories = () => {
    fetchDataFromApi("/api/category2s?populate=*").then((res) => {
      setCategories(res.data);
    });
  };

  const getProducts = () => {
    if (id) {
      fetchDataFromApi(`/api/product2s?populate=*&[filters][category_2_][id]=${id}`).then((res) => {
        setProducts(res.data);
        
      }); 
    } else {
      fetchDataFromApi(`/api/product2s?populate=*`).then((res) => {
        setProducts(res.data);
  
      });
    }
    
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, [id]);

let count = 0;
  return (
    <>
      <div className="ps-top-categories" style={{ marginTop: "100px" }}>
        <div className="ps-container">
          <div className="row">
            {categories.map((category) => {
               count += category.attributes.product_2s.data.length;
              return(

                <div
                key={category.id}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
              >
                <div className="ps-block--category">
                  <a
                    className="ps-block__overlay"
                    href={`/category-product/${category.id}`}

                  />

                  <p>
                    {category.attributes.Name}
                  </p>
                  <img
                    src={
                      "http://localhost:1337" +
                      category.attributes.image.data[0].attributes.url
                    }
                    alt=""
                  />
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
      <div className="ps-shopping ps-tab-root">
        <div className="ps-shopping__header">
          {/* <p>
            <strong> {count}</strong> Products found
          </p> */}
         
        </div>
        <div className="ps-tabs">
          <div className="ps-tab active" id="tab-1">
            <div className="ps-shopping-product">
              <div className="row">
              {products.map((product) => {
                  return (
                    //onClick={() => {navigate(`/item/${product.id}`) }}
                    <div
                      key={product.id}
                      className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6" 
                    >
                      <div className="ps-product">
                        <div className="ps-product__thumbnail">
                          <a href={`/item/${product.id}`}>
                            <img
                              src={
                                "http://localhost:1337" +
                                product.attributes.Image.data[0].attributes.url
                              }
                              alt=""
                            />
                          </a>
                          
                              <div className="ps-product__container">
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href={`/item/${product.id}`}
                                >
                                  {product.attributes.Name}
                                </a>
                                <p className="ps-product__price">{product.attributes.Price}$</p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href={`/item/${product.id}`}
                                >
                                  {product.attributes.Name}
                                </a>
                                <p className="ps-product__price">{product.attributes.Price}$</p>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  );
                }

              )}

              </div>
            </div>
            {/* <div className="ps-pagination">
                    <ul className="pagination">
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          Next Page
                          <i className="icon-chevron-right" />
                        </a>
                      </li>
                    </ul>
            </div> */}
          </div>
          {/* <div className="ps-tab" id="tab-2">
            <div className="ps-shopping-product">
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/1.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Apple iPhone Retina 6s Plus 64GB
                    </a>
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">ROBERT’S STORE</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$1310.00</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/1.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Apple iPhone Retina 6s Plus 64GB
                    </a>
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Young Shop</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$1150.00</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/2.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Marshall Kilburn Portable Wireless Speaker
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Go Pro</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$42.99 - $60.00</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/3.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Herschel Leather Duffle Bag In Brown Color
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Go Pro</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$125.30</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/4.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Xbox One Wireless Controller Black Color
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Global Office</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$55.99</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/5.jpg" alt="" />
                  </a>
                  <div className="ps-product__badge">-37%</div>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Grand Slam Indoor Of Show Jumping Novel
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Robert's Store</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price sale">
                      $32.99 <del>$41.00 </del>
                    </p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/6.jpg" alt="" />
                  </a>
                  <div className="ps-product__badge">-5%</div>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Sound Intone I65 Earphone White Version
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Youngshop</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price sale">
                      $100.99 <del>$106.00 </del>
                    </p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/7.jpg" alt="" />
                  </a>
                  <div className="ps-product__badge">-16%</div>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Korea Long Sofa Fabric In Blue Navy Color
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Youngshop</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price sale">
                      $567.89 <del>$670.20 </del>
                    </p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/8.jpg" alt="" />
                  </a>
                  <div className="ps-product__badge">-16%</div>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Unero Military Classical Backpack
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Young shop</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price sale">
                      $35.89 <del>$42.20 </del>
                    </p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/9.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Rayban Rounded Sunglass Brown Color
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Young shop</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$35.89</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/10.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Sleeve Linen Blend Caro Pane Shirt
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Go Pro</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$29.39 - $39.99</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                  <a href="#">
                    <img src="/img/products/shop/11.jpg" alt="" />
                  </a>
                </div>
                <div className="ps-product__container">
                  <div className="ps-product__content">
                    <a
                      className="ps-product__title"
                      href="#"
                    >
                      Men’s Sports Runnning Swim Board Shorts
                    </a>
                    
                    <p className="ps-product__vendor">
                      Sold by:<a href="#">Robert's Store</a>
                    </p>
                    <ul className="ps-product__desc">
                      <li> Unrestrained and portable active stereo speaker</li>
                      <li> Free from the confines of wires and chords</li>
                      <li> 20 hours of portable capabilities</li>
                      <li>
                        {" "}
                        Double-ended Coil Cord with 3.5mm Stereo Plugs Included
                      </li>
                      <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                  </div>
                  <div className="ps-product__shopping">
                    <p className="ps-product__price">$13.43</p>
                    <a className="ps-btn" href="#">
                      Add to cart
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="ps-pagination">
              <ul className="pagination">
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    Next Page
                    <i className="icon-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
