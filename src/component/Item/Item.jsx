import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import useFetch from "../../hook/useFetch";
import { Context } from "../../utils/Appcontext";

export default function Item() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);
  const { cartCount } = useContext(Context);
  const { cartSub } = useContext(Context);
  const inc = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const desc = () => {
    setQuantity((quantity) => {
      if (quantity == 1) {
        return (quantity = 1);
      } else if (quantity <= 10) {
        return (quantity - 1);
      }
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/category2s?populate=*").then((res) => {
      setCategories(res.data);
    });
  };
  const getProduct = () => {
    fetchDataFromApi(`/api/product2s?populate=*&filters[id]=${id}`).then(
      (res) => {
        setProduct(res.data);
      }
    );
  };
  useEffect(() => {
    getCategories();
    getProduct();
  }, [id]);
  const categoryId = product?.[0].attributes.category_2_.data.id;

  const getProducts = () => {
    // Kiểm tra xem categories đã được thiết lập hay chưa
    if (categories.length > 0) {
      fetchDataFromApi(
        `/api/product2s?filters[id][$ne]=${id}&filters[category_2_][id]=${categoryId}&pagination[start]=0&pagination[limit]=4&populate=*`
      ).then((res) => {
        setProducts(res.data);
      });
    }
  };

  // Gọi getProducts() sau khi categories đã được thiết lập
  useEffect(() => {
    if (categories.length > 0) {
      getProducts();
    }
  }, [categories]);
  const data = product?.[0]?.attributes;

  return (
    <>
      <>
        <header
          className="header header--mobile header--mobile-product"
          data-sticky="true"
        >
          <div className="navigation--mobile">
            <div className="navigation__left">
              <a className="header__back" href="/Shop-default">
                <i className="icon-chevron-left" />
                <strong>Back to Categories</strong>
              </a>
            </div>
            <div className="navigation__right">
              <div className="header__actions">
                <div className="ps-cart--mini">
                  <a className="header__extra" href="#">
                    <i className="icon-bag2" />
                    <span>
                      <i>0</i>
                    </span>
                  </a>
                  <div className="ps-cart__content">
                    <div className="ps-cart__items">
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src="/img/products/clothing/7.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <a className="ps-product__remove" href="#">
                            <i className="icon-cross" />
                          </a>
                          <a href="product-default.html">
                            MVMTH Classical Leather Watch In Black
                          </a>
                          <p>
                            <strong>Sold by:</strong> YOUNG SHOP
                          </p>
                          <small>1 x $59.99</small>
                        </div>
                      </div>
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail">
                          <a href="#">
                            <img src="/img/products/clothing/5.jpg" alt="" />
                          </a>
                        </div>
                        <div className="ps-product__content">
                          <a className="ps-product__remove" href="#">
                            <i className="icon-cross" />
                          </a>
                          <a href="product-default.html">
                            Sleeve Linen Blend Caro Pane Shirt
                          </a>
                          <p>
                            <strong>Sold by:</strong> YOUNG SHOP
                          </p>
                          <small>1 x $59.99</small>
                        </div>
                      </div>
                    </div>
                    <div className="ps-cart__footer">
                      <h3>
                        Sub Total:<strong>$59.99</strong>
                      </h3>
                      <figure>
                        <a className="ps-btn" href="shopping-cart.html">
                          View Cart
                        </a>
                        <a className="ps-btn" href="checkout.html">
                          Checkout
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="ps-block--user-header">
                  <div className="ps-block__left">
                    <i className="icon-user" />
                  </div>
                  <div className="ps-block__right">
                    <a href="my-account.html">Login</a>
                    <a href="my-account.html">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div>
          <div className="ps-breadcrumb">
            <div className="ps-container">
              <ul className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Shop-default">Consumer Electrics</a>
                </li>
                <li>
                  <a href="/Shop-default">Refrigerators</a>
                </li>
                <li>{data?.Name}</li>
              </ul>
            </div>
          </div>
          <div className="ps-page--product">
            <div className="ps-container">
              <div className="ps-page__container">
                <div className="ps-page__left">
                  <div className="ps-product--detail ps-product--fullwidth">
                    <div className="ps-product__header">
                      <div
                        className="ps-product__thumbnail"
                        data-vertical="true"
                      >
                        <figure>
                          <div className="ps-wrapper">
                            <div
                              className="ps-product__gallery"
                              data-arrow="true"
                            >
                              <div className="item">
                                <a href={"#"}>
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      data?.Image.data[0].attributes.url
                                    }
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="item">
                                <a href={"#"}>
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      data?.Image.data[0].attributes.url
                                    }
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="item">
                                <a href={"#"}>
                                  <img
                                    src={
                                      "http://localhost:1337" +
                                      data?.Image.data[0].attributes.url
                                    }
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </figure>
                        <div
                          className="ps-product__variants"
                          data-item={4}
                          data-md={4}
                          data-sm={4}
                          data-arrow="false"
                        >
                          <div className="item">
                            <img
                              src={
                                "http://localhost:1337" +
                                data?.Image.data[0].attributes.url
                              }
                              alt=""
                            />
                          </div>
                          <div className="item">
                            <img
                              src={
                                "http://localhost:1337" +
                                data?.Image.data[0].attributes.url
                              }
                              alt=""
                            />
                          </div>
                          <div className="item">
                            <img
                              src={
                                "http://localhost:1337" +
                                data?.Image.data[0].attributes.url
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ps-product__info">
                        <h1>{data?.Name}</h1>
                        <div className="ps-product__meta">
                          <p>
                            Brand:<a href="/Shop-default">Sony</a>
                          </p>
                        </div>
                        <h4 className="ps-product__price">{data?.Price}$</h4>
                        <div className="ps-product__desc">
                          <p>
                            Sold By:
                            <a href="/Shop-default">
                              <strong> Go Pro</strong>
                            </a>
                          </p>
                          <ul className="ps-list--dot">
                            <li>
                              {" "}
                              Unrestrained and portable active stereo speaker
                            </li>
                            <li> Free from the confines of wires and chords</li>
                            <li> 20 hours of portable capabilities</li>
                            <li>
                              {" "}
                              Double-ended Coil Cord with 3.5mm Stereo Plugs
                              Included
                            </li>
                            <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                          </ul>
                        </div>
                        <div className="ps-product__variations">
                         
                        </div>
                        <div className="ps-product__shopping">
                          <figure>
                            <figcaption>Quantity</figcaption>
                            <div className="form-group--number">
                              <button className="up" onClick={inc}>
                                <i className="fa fa-plus" />
                              </button>
                              <button className="down" onClick={desc}>
                                <i className="fa fa-minus" />
                              </button>
                              <input
                                className="form-control"
                                type="text" 
                                placeholder={quantity}
                                value={quantity}
                                onChange={(e) => {
                                  const value = parseInt(e.target.value, 10);
                                  if (
                                    !isNaN(value) &&
                                    value >= 1 &&
                                    value <= 10
                                  ) {
                                    setQuantity(value);
                                  }
                                }}
                              />
                            </div>
                          </figure>
                          <a
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={() =>
                              handleAddToCart(product?.[0], quantity)
                            }
                          >
                            Add to cart
                          </a>
                        </div>
                        <div className="ps-product__specification">
                          <a className="report" href="#">
                            Report Abuse
                          </a>
                          <p>
                            <strong>SKU:</strong> SF1133569600-1
                          </p>
                          <p className="categories">
                            <strong> Categories:</strong>
                            <a href="#">Consumer Electronics</a>,
                            <a href="#"> Refrigerator</a>,
                            <a href="#">Babies &amp; Moms</a>
                          </p>
                          <p className="tags">
                            <strong> Tags</strong>
                            <a href="#">sofa</a>,<a href="#">technologies</a>,
                            <a href="#">wireless</a>
                          </p>
                        </div>
                        <div className="ps-product__sharing">
                          <a className="facebook" href="#">
                            <i className="fa fa-facebook" />
                          </a>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter" />
                          </a>
                          <a className="google" href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                          <a className="linkedin" href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                          <a className="instagram" href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="ps-product__content ps-tab-root">
                      <ul className="ps-tab-list">
                        <li className="active">
                          <a href="#tab-1">Description</a>
                        </li>
                      </ul>
                      <div className="ps-tabs">
                        <div className="ps-tab active" id="">
                          <div className="ps-document">
                            <h5>
                              Embodying the Raw, Wayward Spirit of Rock 'N' Roll
                            </h5>
                            <p>
                              Embodying the raw, wayward spirit of rock ‘n’
                              roll, the Kilburn portable active stereo speaker
                              takes the unmistakable look and sound of Marshall,
                              unplugs the chords, and takes the show on the
                              road.
                            </p>
                            <p>
                              Weighing in under 7 pounds, the Kilburn is a
                              lightweight piece of vintage styled engineering.
                              Setting the bar as one of the loudest speakers in
                              its class, the Kilburn is a compact, stout-hearted
                              hero with a well-balanced audio which boasts a
                              clear midrange and extended highs for a sound that
                              is both articulate and pronounced. The analogue
                              knobs allow you to fine tune the controls to your
                              personal preferences while the guitar-influenced
                              leather strap enables easy and stylish travel.
                            </p>
                            <img
                              className="mb-30"
                              src="/img/products/detail/content/description.jpg"
                              alt=""
                            />
                            <h5>What do you get</h5>
                            <p>
                              Sound of Marshall, unplugs the chords, and takes
                              the show on the road.
                            </p>
                            <p>
                              Weighing in under 7 pounds, the Kilburn is a
                              lightweight piece of vintage styled engineering.
                              Setting the bar as one of the loudest speakers in
                              its class, the Kilburn is a compact, stout-hearted
                              hero with a well-balanced audio which boasts a
                              clear midrange and extended highs for a sound that
                              is both articulate and pronounced. The analogue
                              knobs allow you to fine tune the controls to your
                              personal preferences while the guitar-influenced
                              leather strap enables easy and stylish travel.
                            </p>
                            <p>
                              The FM radio is perhaps gone for good, the
                              assumption apparently being that the jury has
                              ruled in favor of streaming over the internet. The
                              IR blaster is another feature due for retirement –
                              the S6 had it, then the Note5 didn’t, and now with
                              the S7 the trend is clear.
                            </p>
                            <h5>Perfectly Done</h5>
                            <p>
                              Meanwhile, the IP68 water resistance has improved
                              from the S5, allowing submersion of up to five
                              feet for 30 minutes, plus there’s no annoying flap
                              covering the charging port
                            </p>
                            <ul className="pl-0">
                              <li>
                                No FM radio (except for T-Mobile units in the
                                US, so far)
                              </li>
                              <li>No IR blaster</li>
                              <li>No stereo speakers</li>
                            </ul>
                            <p>
                              If you’ve taken the phone for a plunge in the
                              bath, you’ll need to dry the charging port before
                              plugging in. Samsung hasn’t reinvented the wheel
                              with the design of the Galaxy S7, but it didn’t
                              need to. The Gala S6 was an excellently styled
                              device, and the S7 has managed to improve on that.
                            </p>
                          </div>
                        </div>
                        <div className="ps-tab" id="">
                          <div className="table-responsive">
                            <table className="table table-bordered ps-table ps-table--specification">
                              <tbody>
                                <tr>
                                  <td>Color</td>
                                  <td>Black, Gray</td>
                                </tr>
                                <tr>
                                  <td>Style</td>
                                  <td>Ear Hook</td>
                                </tr>
                                <tr>
                                  <td>Wireless</td>
                                  <td>Yes</td>
                                </tr>
                                <tr>
                                  <td>Dimensions</td>
                                  <td>5.5 x 5.5 x 9.5 inches</td>
                                </tr>
                                <tr>
                                  <td>Weight</td>
                                  <td>6.61 pounds</td>
                                </tr>
                                <tr>
                                  <td>Battery Life</td>
                                  <td>20 hours</td>
                                </tr>
                                <tr>
                                  <td>Bluetooth</td>
                                  <td>Yes</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="ps-tab" id="">
                          <h4>GoPro</h4>
                          <p>
                            Digiworld US, New York’s no.1 online retailer was
                            established in May 2012 with the aim and vision to
                            become the one-stop shop for retail in New York with
                            implementation of best practices both online
                          </p>
                          <a href="#">More Products from gopro</a>
                        </div>
                        <div className="ps-tab" id="">
                          <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
                              <div className="ps-block--average-rating">
                                <div className="ps-block__header">
                                  <h3>4.00</h3>
                                  <select
                                    className="ps-rating"
                                    data-read-only="true"
                                  >
                                    <option value={1}>1</option>
                                    <option value={1}>2</option>
                                    <option value={1}>3</option>
                                    <option value={1}>4</option>
                                    <option value={2}>5</option>
                                  </select>
                                  <span>1 Review</span>
                                </div>
                                <div className="ps-block__star">
                                  <span>5 Star</span>
                                  <div className="ps-progress" data-value={100}>
                                    <span />
                                  </div>
                                  <span>100%</span>
                                </div>
                                <div className="ps-block__star">
                                  <span>4 Star</span>
                                  <div className="ps-progress" data-value={0}>
                                    <span />
                                  </div>
                                  <span>0</span>
                                </div>
                                <div className="ps-block__star">
                                  <span>3 Star</span>
                                  <div className="ps-progress" data-value={0}>
                                    <span />
                                  </div>
                                  <span>0</span>
                                </div>
                                <div className="ps-block__star">
                                  <span>2 Star</span>
                                  <div className="ps-progress" data-value={0}>
                                    <span />
                                  </div>
                                  <span>0</span>
                                </div>
                                <div className="ps-block__star">
                                  <span>1 Star</span>
                                  <div className="ps-progress" data-value={0}>
                                    <span />
                                  </div>
                                  <span>0</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
                              <form
                                className="ps-form--review"
                                action="/"
                                method="get"
                              >
                                <h4>Submit Your Review</h4>
                                <p>
                                  Your email address will not be published.
                                  Required fields are marked<sup>*</sup>
                                </p>
                                <div className="form-group form-group__rating">
                                  <label>Your rating of this product</label>
                                  <select
                                    className="ps-rating"
                                    data-read-only="false"
                                  >
                                    <option value={0}>0</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    rows={6}
                                    placeholder="Write your review here"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="row">
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Your Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Your Email"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group submit">
                                  <button className="ps-btn">
                                    Submit Review
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="ps-tab" id="">
                          <div className="ps-block--questions-answers">
                            <h3>Questions and Answers</h3>
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Have a question? Search for answer?"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ps-tab active" id="">
                          <p>Sorry no more offers available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-page__right">
                  <aside className="widget widget_product widget_features">
                    <p>
                      <i className="icon-network" /> Shipping worldwide
                    </p>
                    <p>
                      <i className="icon-3d-rotate" /> Free 7-day return if
                      eligible, so easy
                    </p>
                    <p>
                      <i className="icon-receipt" /> Supplier give bills for
                      this product.
                    </p>
                    <p>
                      <i className="icon-credit-card" /> Pay online or when
                      receiving goods
                    </p>
                  </aside>

                  <aside className="widget widget_ads">
                    <a href="#">
                      <img src="/img/ads/product-ads.png" alt="" />
                    </a>
                  </aside>
                  <aside className="widget widget_same-brand">
                    <h3>Same Brand</h3>
                    <div className="widget__content">
                      {products &&
                        products.map((item) => (
                          <div key={item.id} className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href={`/item/${item.id}`}>
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    item.attributes.Image.data[0].attributes.url
                                  }
                                />
                              </a>
                              <div className="ps-product__badge">-37%</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </aside>
                </div>
              </div>
              <div className="ps-section--default ps-customer-bought">
                <div className="ps-section__header">
                  <h3>Customers who bought this item also bought</h3>
                </div>
                <div className="ps-section__content">
                  <div className="row">
                    {products &&
                      products.map((value) => (
                        <div
                          key={value.id}
                          className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
                        >
                          <div className="ps-product">
                            <div className="ps-product__thumbnail">
                              <a href={`/item/${value.id}`}>
                                <img
                                  src={
                                    "http://localhost:1337" +
                                    value.attributes.Image.data[0].attributes
                                      .url
                                  }
                                />
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
                                  href="product-default.html"
                                >
                                  {value.attributes.Name}
                                </a>

                                <p className="ps-product__price">
                                  ${value.attributes.Price}
                                </p>
                              </div>
                              <div className="ps-product__content hover">
                                <a
                                  className="ps-product__title"
                                  href="product-default.html"
                                >
                                  {value.attributes.Name}
                                </a>
                                <p className="ps-product__price">
                                  ${value.attributes.Price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* <div className="ps-section--default">
                <div className="ps-section__header">
                  <h3>Related products</h3>
                </div>
                <div className="ps-section__content">
                  <div
                    className="ps-carousel--nav owl-slider"
                    data-owl-auto="true"
                    data-owl-loop="true"
                    data-owl-speed={10000}
                    data-owl-gap={30}
                    data-owl-nav="true"
                    data-owl-dots="true"
                    data-owl-item={6}
                    data-owl-item-xs={2}
                    data-owl-item-sm={2}
                    data-owl-item-md={3}
                    data-owl-item-lg={4}
                    data-owl-item-xl={5}
                    data-owl-duration={1000}
                    data-owl-mousedrag="on"
                  >
                    
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
