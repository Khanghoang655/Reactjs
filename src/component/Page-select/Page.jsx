import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../utils/Appcontext";

export default function Page() {
  const{cartItem} = useContext(Context)
  const {cartSub} = useContext(Context)
  return (
    <div className="ps-page--simple">
      <div className="ps-breadcrumb">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/item">Shop</Link>
            </li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
      <div className="ps-checkout ps-section--shopping">
        <div className="container">
          <div className="ps-section__header">
            <h1>Compare Product</h1>
          </div>
          <div className="ps-section__content">
            <form
              className="ps-form--checkout"
              action="do_action"
              method="post"
            >
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12  ">
                  <div className="ps-form__billing-info">
                    <h3 className="ps-form__heading">Billing Details</h3>
                    <div className="form-group">
                      <label>
                        First Name<sup>*</sup>
                      </label>
                      <div className="form-group__content">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Last Name<sup>*</sup>
                      </label>
                      <div className="form-group__content">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Company Name<sup>*</sup>
                      </label>
                      <div className="form-group__content">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Email Address<sup>*</sup>
                      </label>
                      <div className="form-group__content">
                        <input className="form-control" type="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Country<sup>*</sup>
                      </label>
                      <div className="form-group__content">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Phone<sup>*</sup>
                      </label>
                      <div className="form-group__content">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Address<sup>*</sup>
                      </label>
                      <div className="form-group__content">
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="create-account"
                        />
                        <label htmlFor="create-account">
                          Create an account?
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="cb01"
                        />
                        <label htmlFor="cb01">
                          Ship to a different address?
                        </label>
                      </div>
                    </div>
                    <h3 className="mt-40"> Addition information</h3>
                    <div className="form-group">
                      <label>Order Notes</label>
                      <div className="form-group__content">
                        <textarea
                          className="form-control"
                          rows={7}
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12  ">
                  <div className="ps-form__total">
                    <h3 className="ps-form__heading">Your Order</h3>
                    <div className="content">
                      <div className="ps-block--checkout-total">
                        <div className="ps-block__header">
                          <p>Product</p>
                          <p>Total</p>
                        </div>
                        <div className="ps-block__content">
                          <table className="table ps-block__products">
                            <tbody>
                              {cartItem.map((value) => (
                                <tr>
                                  <td>
                                    <a href={`/item/${value.id}`}>
                                      {" "}
                                      {value.attributes.Name}
                                    </a>
                                    <p>
                                      Sold By:<strong>ROBERT STORE</strong>
                                    </p>
                                  </td>
                                  <td>${value.attributes.Price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <h4 className="ps-block__title">
                            Subtotal <span>${cartSub}</span>
                          </h4>
                          <div className="ps-block__shippings">
                            {/* <figure>
                              <h4>YOUNG SHOP Shipping</h4>
                              <p>Free shipping</p>
                              <a href="#">
                                {" "}
                                MVMTH Classical Leather Watch In Black ×1
                              </a>
                            </figure>
                            <figure>
                              <h4>ROBERT STORE Shipping</h4>
                              <p>Free shipping</p>
                              <a href="#">
                                Apple Macbook Retina Display 12” ×1
                              </a>
                            </figure> */}
                          </div>
                          <h3>
                            Total <span>${cartSub}</span>
                          </h3>
                        </div>
                      </div>
                      <a className="ps-btn ps-btn--fullwidth" href="/pay">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
