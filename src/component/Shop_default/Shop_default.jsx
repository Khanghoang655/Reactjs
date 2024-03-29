import { useEffect, useState } from "react";
import Product_default from "./Product_default";
import PropTypes from "prop-types";
import { fetchDataFromApi } from "../../utils/api";
Shop_default.propTypes = {
  categories: PropTypes.array,
};
Shop_default.defaultProps = {
  categories: [],
};
export default function Shop_default() {
  const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        fetchDataFromApi("/api/category2s?populate=*").then((res) => {
          setCategories(res.data);
        });
      }, []);
      
  return (
    <div>
      <div className="ps-panel--sidebar" id="search-sidebar">
        <div className="ps-panel__header">
          <form
            className="ps-form--search-mobile"
            action="/"
            method="get"
          >
            <div className="form-group--nest">
              <input
                className="form-control"
                type="text"
                placeholder="Search something..."
              />
              <button>
                <i className="icon-magnifier" />
              </button>
            </div>
          </form>
        </div>
        <div className="navigation__content" />
      </div>
      <div className="ps-breadcrumb">
        <div className="ps-container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Shopping"></a>Shop
            </li>
          </ul>
        </div>
      </div>
      <div className="ps-page--shop">
        <div className="ps-container">
          <div className="ps-shop-banner">
            <div
              className="ps-carousel--nav-inside owl-slider"
              data-owl-auto="true"
              data-owl-loop="true"
              data-owl-speed={5000}
              data-owl-gap={0}
              data-owl-nav="true"
              data-owl-dots="true"
              data-owl-item={1}
              data-owl-item-xs={1}
              data-owl-item-sm={1}
              data-owl-item-md={1}
              data-owl-item-lg={1}
              data-owl-duration={1000}
              data-owl-mousedrag="on"
            >
              <a href="#">
                <img src="/img/slider/shop-default/1.jpg" alt="" />
              </a>
              <a href="#">
                <img src="/img/slider/shop-default/2.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="ps-shop-brand">
            <a href="#">
              <img src="/img/brand/1.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/img/brand/2.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/img/brand/3.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/img/brand/4.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/img/brand/5.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/img/brand/6.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/img/brand/7.jpg" alt="" />
            </a>
            <a href="#">
              <img src="/img/brand/8.jpg" alt="" />
            </a>
          </div>
          <div className="ps-shop-categories">
            <div className="row align-content-lg-stretch">
              <Product_default />
            </div>
          </div>
          <div className="ps-layout--shop">
            <div className="ps-layout__left">
              <aside className="widget widget_shop">
                <h4 className="widget-title">Categories</h4>
                <ul className="ps-list--categories">
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Clothing &amp; Apparel</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Shop-default">Womens</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Mens</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Bags</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Sunglasses</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Accessories</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Kid's Fashion</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Garden &amp; Kitchen</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Shop-default">Cookware</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Decoration</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Furniture</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Garden Tools</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Home Improvement</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Powers And Hand Tools</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Utensil &amp; Gadget</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Consumer Electrics</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="/Shop-default">Air Conditioners</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Shop-default">Accessories</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Type Hanging Cell</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Type Hanging Wall</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/Shop-default">Audios &amp; Theaters</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Shop-default">Headphone</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Home Theater System</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Speakers</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/Shop-default">Car Electronics</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Shop-default">Audio &amp; Video</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Car Security</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Radar Detector</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Vehicle GPS</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/Shop-default">Office Electronics</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Shop-default">Printers</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Projectors</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Scanners</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Store &amp; Business</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/Shop-default">TV Televisions</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Shop-default">4K Ultra HD TVs</a>
                          </li>
                          <li>
                            <a href="/Shop-default">LED TVs</a>
                          </li>
                          <li>
                            <a href="/Shop-default">OLED TVs</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/Shop-default">Washing Machines</a>
                        <span className="sub-toggle">
                          <i className="fa fa-angle-down" />
                        </span>
                        <ul className="sub-menu">
                          <li>
                            <a href="/Shop-default">Type Drying Clothes</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Type Horizontal</a>
                          </li>
                          <li>
                            <a href="/Shop-default">Type Vertical</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/Shop-default">Refrigerators</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Health &amp; Beauty</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Shop-default">Equipments</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Hair Care</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Perfumer</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Skin Care</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Computers &amp; Technologies</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Shop-default">Desktop PC</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Laptop</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Jewelry &amp; Watches</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Shop-default">Gemstone Jewelry</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Men's Watches</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Women's Watches</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Phones &amp; Accessories</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Shop-default">Iphone 8</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Iphone X</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Sam Sung Note 8</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Sam Sung S8</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/Shop-default">Sport &amp; Outdoor</a>
                    <span className="sub-toggle">
                      <i className="fa fa-angle-down" />
                    </span>
                    <ul className="sub-menu">
                      <li>
                        <a href="/Shop-default">Freezer Burn</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Fridge Cooler</a>
                      </li>
                      <li>
                        <a href="/Shop-default">Wine Cabinets</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/Shop-default">Babies &amp; Moms</a>
                  </li>
                  <li>
                    <a href="/Shop-default">Books &amp; Office</a>
                  </li>
                  <li>
                    <a href="/Shop-default">Cars &amp; Motocycles</a>
                  </li>
                </ul>
              </aside>
              {/* <aside className="widget widget_shop">
                <h4 className="widget-title">BY BRANDS</h4>
                <form
                  className="ps-form--widget-search"
                  action="do_action"
                  method="get"
                >
                  <input className="form-control" type="text" />
                  <button>
                    <i className="icon-magnifier" />
                  </button>
                </form>
                <figure className="ps-custom-scrollbar" data-height={250}>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-1"
                      name="brand"
                    />
                    <label htmlFor="brand-1">Adidas (3)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-2"
                      name="brand"
                    />
                    <label htmlFor="brand-2">Amcrest (1)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-3"
                      name="brand"
                    />
                    <label htmlFor="brand-3">Apple (2)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-4"
                      name="brand"
                    />
                    <label htmlFor="brand-4">Asus (19)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-5"
                      name="brand"
                    />
                    <label htmlFor="brand-5">Baxtex (20)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-6"
                      name="brand"
                    />
                    <label htmlFor="brand-6">Adidas (11)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-7"
                      name="brand"
                    />
                    <label htmlFor="brand-7">Casio (9)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-8"
                      name="brand"
                    />
                    <label htmlFor="brand-8">Electrolux (0)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-9"
                      name="brand"
                    />
                    <label htmlFor="brand-9">Gallaxy (0)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-10"
                      name="brand"
                    />
                    <label htmlFor="brand-10">Samsung (0)</label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="brand-11"
                      name="brand"
                    />
                    <label htmlFor="brand-11">Sony (0)</label>
                  </div>
                </figure>
                <figure>
                  <h4 className="widget-title">By Price</h4>
                  <div id="nonlinear" />
                  <p className="ps-slider__meta">
                    Price:
                    <span className="ps-slider__value">
                      $<span className="ps-slider__min" />
                    </span>
                    -
                    <span className="ps-slider__value">
                      $<span className="ps-slider__max" />
                    </span>
                  </p>
                </figure>
                <figure>
                  <h4 className="widget-title">By Price</h4>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="review-1"
                      name="review"
                    />
                    <label htmlFor="review-1">
                      <span>
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                      </span>
                      <small>(13)</small>
                    </label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="review-2"
                      name="review"
                    />
                    <label htmlFor="review-2">
                      <span>
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star" />
                      </span>
                      <small>(13)</small>
                    </label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="review-3"
                      name="review"
                    />
                    <label htmlFor="review-3">
                      <span>
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <small>(5)</small>
                    </label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="review-4"
                      name="review"
                    />
                    <label htmlFor="review-4">
                      <span>
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <small>(5)</small>
                    </label>
                  </div>
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="review-5"
                      name="review"
                    />
                    <label htmlFor="review-5">
                      <span>
                        <i className="fa fa-star rate" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <small>(1)</small>
                    </label>
                  </div>
                </figure>
                <figure>
                  <h4 className="widget-title">By Color</h4>
                  <div className="ps-checkbox ps-checkbox--color color-1 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-1"
                      name="size"
                    />
                    <label htmlFor="color-1" />
                  </div>
                  <div className="ps-checkbox ps-checkbox--color color-2 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-2"
                      name="size"
                    />
                    <label htmlFor="color-2" />
                  </div>
                  <div className="ps-checkbox ps-checkbox--color color-3 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-3"
                      name="size"
                    />
                    <label htmlFor="color-3" />
                  </div>
                  <div className="ps-checkbox ps-checkbox--color color-4 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-4"
                      name="size"
                    />
                    <label htmlFor="color-4" />
                  </div>
                  <div className="ps-checkbox ps-checkbox--color color-5 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-5"
                      name="size"
                    />
                    <label htmlFor="color-5" />
                  </div>
                  <div className="ps-checkbox ps-checkbox--color color-6 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-6"
                      name="size"
                    />
                    <label htmlFor="color-6" />
                  </div>
                  <div className="ps-checkbox ps-checkbox--color color-7 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-7"
                      name="size"
                    />
                    <label htmlFor="color-7" />
                  </div>
                  <div className="ps-checkbox ps-checkbox--color color-8 ps-checkbox--inline">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="color-8"
                      name="size"
                    />
                    <label htmlFor="color-8" />
                  </div>
                </figure>
                <figure className="sizes">
                  <h4 className="widget-title">BY SIZE</h4>
                  <a href="#">L</a>
                  <a href="#">M</a>
                  <a href="#">S</a>
                  <a href="#">XL</a>
                </figure>
              </aside> */}
            </div>
            <div className="ps-layout__right">
              <div className="ps-block--shop-features">
                <div className="ps-block__header">
                  <h3>Best Sale Items</h3>
                  <div className="ps-block__navigation">
                    <a className="ps-carousel__prev" href="#recommended1">
                      <i className="icon-chevron-left" />
                    </a>
                    <a className="ps-carousel__next" href="#recommended1">
                      <i className="icon-chevron-right" />
                    </a>
                  </div>
                </div>
                <div className="ps-block__content">
                  <div
                    className="owl-slider"
                    id="recommended1"
                    data-owl-auto="true"
                    data-owl-loop="true"
                    data-owl-speed={10000}
                    data-owl-gap={30}
                    data-owl-nav="false"
                    data-owl-dots="false"
                    data-owl-item={6}
                    data-owl-item-xs={2}
                    data-owl-item-sm={2}
                    data-owl-item-md={3}
                    data-owl-item-lg={4}
                    data-owl-item-xl={5}
                    data-owl-duration={1000}
                    data-owl-mousedrag="on"
                  >
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img src="/img/products/shop/best/1.jpg" alt="" />
                        </a>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Young Shop
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Sleeve Linen Blend Caro Pane Shirt
                          </a>
                          
                          <p className="ps-product__price">$22.99 - $32.99</p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Sleeve Linen Blend Caro Pane Shirt
                          </a>
                          <p className="ps-product__price">$22.99 - $32.99</p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img src="/img/products/shop/best/2.jpg" alt="" />
                        </a>
                        <div className="ps-product__badge">-7%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Young Shop
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            MVMTH Classical Leather Watch In Black
                          </a>
                          
                          <p className="ps-product__price sale">
                            $57.99 <del>$62.99 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            MVMTH Classical Leather Watch In Black
                          </a>
                          <p className="ps-product__price sale">
                            $57.99 <del>$62.99 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img src="/img/products/shop/best/3.jpg" alt="" />
                        </a>
                        <div className="ps-product__badge">-16%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Young Shop
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Unero Military Classical Backpack
                          </a>
                          
                          <p className="ps-product__price sale">
                            $35.00 <del>$60.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Unero Military Classical Backpack
                          </a>
                          <p className="ps-product__price sale">
                            $35.00 <del>$60.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img src="/img/products/shop/best/4.jpg" alt="" />
                        </a>
                        <div className="ps-product__badge">-5%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Go Pro
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Sound Intone I65 Earphone White Version
                          </a>
                          
                          <p className="ps-product__price sale">
                            $100.00 <del>$105.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Sound Intone I65 Earphone White Version
                          </a>
                          <p className="ps-product__price sale">
                            $100.00 <del>$105.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img src="/img/products/shop/best/5.jpg" alt="" />
                        </a>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Global Office
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Herschel Leather Duffle Bag In Brown Color
                          </a>
                          
                          <p className="ps-product__price">$125.30</p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Herschel Leather Duffle Bag In Brown Color
                          </a>
                          <p className="ps-product__price">$125.30</p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img src="/img/products/shop/best/6.jpg" alt="" />
                        </a>
                        <div className="ps-product__badge hot">Hot</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Global Office
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Xbox One Wireless Controller Black Color
                          </a>
                          
                          <p className="ps-product__price sale">
                            $1025.00 <del>$1422.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Xbox One Wireless Controller Black Color
                          </a>
                          <p className="ps-product__price sale">
                            $1025.00 <del>$1422.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img src="/img/products/shop/best/7.jpg" alt="" />
                        </a>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Robert's Store
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Samsung UHD TV 24inch
                          </a>
                          
                          <p className="ps-product__price">$599.00</p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Samsung UHD TV 24inch
                          </a>
                          <p className="ps-product__price">$599.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-block--shop-features">
                <div className="ps-block__header">
                  <h3>Recommended Items</h3>
                  <div className="ps-block__navigation">
                    <a className="ps-carousel__prev" href="#recommended">
                      <i className="icon-chevron-left" />
                    </a>
                    <a className="ps-carousel__next" href="#recommended">
                      <i className="icon-chevron-right" />
                    </a>
                  </div>
                </div>
                <div className="ps-block__content">
                  <div
                    className="owl-slider"
                    id="recommended"
                    data-owl-auto="true"
                    data-owl-loop="true"
                    data-owl-speed={10000}
                    data-owl-gap={30}
                    data-owl-nav="false"
                    data-owl-dots="false"
                    data-owl-item={6}
                    data-owl-item-xs={2}
                    data-owl-item-sm={2}
                    data-owl-item-md={3}
                    data-owl-item-lg={4}
                    data-owl-item-xl={5}
                    data-owl-duration={1000}
                    data-owl-mousedrag="on"
                  >
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img
                            src="/img/products/shop/recommended/1.jpg"
                            alt=""
                          />
                        </a>
                        <div className="ps-product__badge">-37%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Young Shop
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Ciate Palemore Lipstick Bold Red Color
                          </a>
                          
                          <p className="ps-product__price sale">
                            $42.99 <del>$60.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Ciate Palemore Lipstick Bold Red Color
                          </a>
                          <p className="ps-product__price sale">
                            $42.99 <del>$60.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img
                            src="/img/products/shop/recommended/2.jpg"
                            alt=""
                          />
                        </a>
                        <div className="ps-product__badge">-37%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Robert's Store
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Set 30 Piece Korea StartSkin Natural Mask
                          </a>
                          
                          <p className="ps-product__price sale">
                            $32.99 <del>$60.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Set 30 Piece Korea StartSkin Natural Mask
                          </a>
                          <p className="ps-product__price sale">
                            $32.99 <del>$60.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img
                            src="/img/products/shop/recommended/3.jpg"
                            alt=""
                          />
                        </a>
                        <div className="ps-product__badge">-25%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Go Pro
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Baxter Care Hair Kit For Bearded Mens
                          </a>
                          
                          <p className="ps-product__price sale">
                            $93.00 <del>$60.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Baxter Care Hair Kit For Bearded Mens
                          </a>
                          <p className="ps-product__price sale">
                            $93.00 <del>$60.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img
                            src="/img/products/shop/recommended/4.jpg"
                            alt=""
                          />
                        </a>
                        <div className="ps-product__badge">-46%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Go Pro
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Letter Printed Cushion Cover Cotton
                          </a>
                          
                          <p className="ps-product__price sale">
                            $13.00 <del>$20.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Letter Printed Cushion Cover Cotton
                          </a>
                          <p className="ps-product__price sale">
                            $13.00 <del>$20.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img
                            src="/img/products/shop/recommended/5.jpg"
                            alt=""
                          />
                        </a>
                        <div className="ps-product__badge">-46%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Young Shop
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Amcrest Security Camera in White Color
                          </a>
                          
                          <p className="ps-product__price sale">
                            $13.00 <del>$20.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Amcrest Security Camera in White Color
                          </a>
                          <p className="ps-product__price sale">
                            $13.00 <del>$20.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img
                            src="/img/products/shop/recommended/6.jpg"
                            alt=""
                          />
                        </a>
                        <div className="ps-product__badge">-28%</div>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Young Shop
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            LG White Front Load Steam Washer
                          </a>
                          
                          <p className="ps-product__price sale">
                            $1025.00 <del>$1422.00 </del>
                          </p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            LG White Front Load Steam Washer
                          </a>
                          <p className="ps-product__price sale">
                            $1025.00 <del>$1422.00 </del>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product">
                      <div className="ps-product__thumbnail">
                        <a href="/category-product">
                          <img
                            src="/img/products/shop/recommended/7.jpg"
                            alt=""
                          />
                        </a>
                        
                      </div>
                      <div className="ps-product__container">
                        <a className="ps-product__vendor" href="#">
                          Robert's Store
                        </a>
                        <div className="ps-product__content">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Samsung UHD TV 24inch
                          </a>
                          
                          <p className="ps-product__price">$599.00</p>
                        </div>
                        <div className="ps-product__content hover">
                          <a
                            className="ps-product__title"
                            href="/category-product"
                          >
                            Samsung UHD TV 24inch
                          </a>
                          <p className="ps-product__price">$599.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-shopping ps-tab-root">
                {/* <div className="ps-shopping__header">
                  <p>
                    <strong> 36</strong> Products found
                  </p>
                  <div className="ps-shopping__actions">
                    <select className="ps-select" data-placeholder="Sort Items">
                      <option>Sort by latest</option>
                      <option>Sort by popularity</option>
                      <option>Sort by average rating</option>
                      <option>Sort by price: low to high</option>
                      <option>Sort by price: high to low</option>
                    </select>
                    <div className="ps-shopping__view">
                      <p>View</p>
                      <ul className="ps-tab-list">
                        <li className="active">
                          <a href="#tab-1">
                            <i className="icon-grid" />
                          </a>
                        </li>
                        <li>
                          <a href="#tab-2">
                            <i className="icon-list4" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="ps-tabs">
                  <div className="ps-tab active" id="tab-1">
                    <div className="ps-shopping-product">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/1.jpg" alt="" />
                              </a>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                ROBERT’S STORE
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Apple iPhone Retina 6s Plus 64GB
                                </a>
                                <p className="ps-product__price">$1310.00</p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Apple iPhone Retina 6s Plus 64GB
                                </a>
                                <p className="ps-product__price">$1310.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/1.jpg" alt="" />
                              </a>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Young Shop
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Apple iPhone Retina 6s Plus 64GB
                                </a>
                                <p className="ps-product__price">$1150.00</p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Apple iPhone Retina 6s Plus 64GB
                                </a>
                                <p className="ps-product__price">$1150.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/2.jpg" alt="" />
                              </a>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Go Pro
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Marshall Kilburn Portable Wireless Speaker
                                </a>
                               
                                <p className="ps-product__price">
                                  $42.99 - $60.00
                                </p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Marshall Kilburn Portable Wireless Speaker
                                </a>
                                <p className="ps-product__price">
                                  $42.99 - $60.00
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/3.jpg" alt="" />
                              </a>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Go Pro
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Herschel Leather Duffle Bag In Brown Color
                                </a>
                               
                                <p className="ps-product__price">$125.30</p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Herschel Leather Duffle Bag In Brown Color
                                </a>
                                <p className="ps-product__price">$125.30</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/4.jpg" alt="" />
                              </a>
                              <div className="ps-product__badge hot">hot</div>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Global Office
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Xbox One Wireless Controller Black Color
                                </a>
                             
                                <p className="ps-product__price">$55.99</p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Xbox One Wireless Controller Black Color
                                </a>
                                <p className="ps-product__price">$55.99</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/5.jpg" alt="" />
                              </a>
                              <div className="ps-product__badge">-37%</div>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Robert's Store
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Grand Slam Indoor Of Show Jumping Novel
                                </a>
                               
                                <p className="ps-product__price sale">
                                  $32.99 <del>$41.00 </del>
                                </p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Grand Slam Indoor Of Show Jumping Novel
                                </a>
                                <p className="ps-product__price sale">
                                  $32.99 <del>$41.00 </del>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/6.jpg" alt="" />
                              </a>
                              <div className="ps-product__badge">-5%</div>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Youngshop
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Sound Intone I65 Earphone White Version
                                </a>
                                
                                <p className="ps-product__price sale">
                                  $100.99 <del>$106.00 </del>
                                </p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Sound Intone I65 Earphone White Version
                                </a>
                                <p className="ps-product__price sale">
                                  $100.99 <del>$106.00 </del>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/7.jpg" alt="" />
                              </a>
                              <div className="ps-product__badge">-16%</div>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Youngshop
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Korea Long Sofa Fabric In Blue Navy Color
                                </a>
                               
                                <p className="ps-product__price sale">
                                  $567.89 <del>$670.20 </del>
                                </p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Korea Long Sofa Fabric In Blue Navy Color
                                </a>
                                <p className="ps-product__price sale">
                                  $567.89 <del>$670.20 </del>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/8.jpg" alt="" />
                              </a>
                              <div className="ps-product__badge">-16%</div>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Young shop
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Unero Military Classical Backpack
                                </a>
                                
                                <p className="ps-product__price sale">
                                  $35.89 <del>$42.20 </del>
                                </p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Unero Military Classical Backpack
                                </a>
                                <p className="ps-product__price sale">
                                  $35.89 <del>$42.20 </del>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/9.jpg" alt="" />
                              </a>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Young shop
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Rayban Rounded Sunglass Brown Color
                                </a>
                                
                                <p className="ps-product__price">$35.89</p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Rayban Rounded Sunglass Brown Color
                                </a>
                                <p className="ps-product__price">$35.89</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/10.jpg" alt="" />
                              </a>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Go Pro
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Sleeve Linen Blend Caro Pane Shirt
                                </a>
                                
                                <p className="ps-product__price">
                                  $29.39 - $39.99
                                </p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Sleeve Linen Blend Caro Pane Shirt
                                </a>
                                <p className="ps-product__price">
                                  $29.39 - $39.99
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 ">
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href="/category-product">
                                <img src="/img/products/shop/11.jpg" alt="" />
                              </a>
                              
                            </div>
                            <div className="ps-product__container">
                              <a className="ps-product__vendor" href="#">
                                Robert's Store
                              </a>
                              <div className="ps-product__content">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Men’s Sports Runnning Swim Board Shorts
                                </a>
                                
                                <p className="ps-product__price">$13.43</p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="/category-product"
                                >
                                  Men’s Sports Runnning Swim Board Shorts
                                </a>
                                <p className="ps-product__price">$13.43</p>
                              </div>
                            </div>
                          </div>
                        </div>
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
                  <div className="ps-tab" id="tab-2">
                    <div className="ps-shopping-product">
                      <div className="ps-product ps-product--wide">
                        <div className="ps-product__thumbnail">
                          <a href="/category-product">
                            <img src="/img/products/shop/1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Apple iPhone Retina 6s Plus 64GB
                            </a>
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">ROBERT’S STORE</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Apple iPhone Retina 6s Plus 64GB
                            </a>
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Young Shop</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Marshall Kilburn Portable Wireless Speaker
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Go Pro</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Herschel Leather Duffle Bag In Brown Color
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Go Pro</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/4.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Xbox One Wireless Controller Black Color
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Global Office</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/5.jpg" alt="" />
                          </a>
                          <div className="ps-product__badge">-37%</div>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Grand Slam Indoor Of Show Jumping Novel
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Robert's Store</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/6.jpg" alt="" />
                          </a>
                          <div className="ps-product__badge">-5%</div>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Sound Intone I65 Earphone White Version
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Youngshop</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/7.jpg" alt="" />
                          </a>
                          <div className="ps-product__badge">-16%</div>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Korea Long Sofa Fabric In Blue Navy Color
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Youngshop</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/8.jpg" alt="" />
                          </a>
                          <div className="ps-product__badge">-16%</div>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Unero Military Classical Backpack
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Young shop</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/9.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Rayban Rounded Sunglass Brown Color
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Young shop</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/10.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Sleeve Linen Blend Caro Pane Shirt
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Go Pro</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                          <a href="/category-product">
                            <img src="/img/products/shop/11.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a
                              className="ps-product__title"
                              href="/category-product"
                            >
                              Men’s Sports Runnning Swim Board Shorts
                            </a>
                            
                            <p className="ps-product__vendor">
                              Sold by:<a href="#">Robert's Store</a>
                            </p>
                            <ul className="ps-product__desc">
                              <li>
                                {" "}
                                Unrestrained and portable active stereo speaker
                              </li>
                              <li>
                                {" "}
                                Free from the confines of wires and chords
                              </li>
                              <li> 20 hours of portable capabilities</li>
                              <li>
                                {" "}
                                Double-ended Coil Cord with 3.5mm Stereo Plugs
                                Included
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="shop-filter-lastest"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="list-group">
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      Sort by
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      Sort by average rating
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      Sort by latest
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      Sort by price: low to high
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="#"
                    >
                      Sort by price: high to low
                    </a>
                    <a
                      className="list-group-item list-group-item-action text-center"
                      href="#"
                      data-dismiss="modal"
                    >
                      <strong>Close</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
