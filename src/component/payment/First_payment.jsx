
export default function First_payment() {
  return (
    <main className="ps-page--my-account">
  <div className="ps-breadcrumb">
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="user-information.html">Account</a>
        </li>
        <li>Payment</li>
      </ul>
    </div>
  </div>
  <section className="ps-section--account ps-checkout">
    <div className="container">
      <div className="ps-section__header">
        <h3>Payment</h3>
      </div>
      <div className="ps-section__content">
        <form className="ps-form--checkout" action="/" method="get">
          <div className="ps-form__content">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                <div className="ps-block--shipping">
                  <div className="ps-block__panel">
                    <figure>
                      <small>Contact</small>
                      <p>
                        <a href="#">user@gmail.com</a>
                      </p>
                      <a href="#">Change</a>
                    </figure>
                    <figure>
                      <small>Ship to</small>
                      <p>2015 South Street, Midland, Texas</p>
                      <a href="#">Change</a>
                    </figure>
                  </div>
                  {/* <h4>Shipping method</h4>
                  <div className="ps-block__panel">
                    <figure>
                      <small>International Shipping</small>
                      <strong> $20.00</strong>
                    </figure>
                  </div> */}
                  <h4>Payment Methods</h4>
                  <div className="ps-block--payment-method">
                    <ul className="ps-tab-list">
                      <li className="active">
                        <a className="ps-btn ps-btn--sm" href="#visa">
                          Visa / Master Card
                        </a>
                      </li>
                      <li>
                        <a className="ps-btn ps-btn--sm" href="#paypal">
                          Paypal
                        </a>
                      </li>
                    </ul>
                    <div className="ps-tabs">
                      <div className="ps-tab active" id="visa">
                        <div className="form-group">
                          <label>Card number</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Card Holders</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <div className="form-group">
                              <label>Experation Date</label>
                              <div className="row">
                                <div className="col-6">
                                  <div className="form-group">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Month"
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Year"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="form-group">
                              <label>CVV</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group submit">
                          <a className="ps-btn ps-btn--fullwidth" href="/paysuccess">
                            Submit
                          </a>
                        </div>
                      </div>
                      <div className="ps-tab" id="paypal">
                        <a className="ps-btn" href="#">
                          Proceed with Paypal
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                <div className="ps-block--checkout-order">
                  <div className="ps-block__content">
                    <figure>
                      <figcaption>
                        <strong>Product</strong>
                        <strong>Total</strong>
                      </figcaption>
                    </figure>
                    <figure className="ps-block__items">
                      <a href="#">
                        <strong>
                          Marshall Kilburn Portable Wireless Speaker
                        </strong>
                        <span>
                          x1<small>$ 42.99</small>
                        </span>
                      </a>
                      <a href="#">
                        <strong>
                          Herschel Leather Duffle Bag In Brown Color
                        </strong>
                        <span>
                          x1<small>$ 125.30</small>
                        </span>
                      </a>
                    </figure>
                    <figure>
                      <figcaption>
                        <strong>Subtotal</strong>
                        <strong>$1259.99</strong>
                      </figcaption>
                    </figure>
                    <figure>
                      <figcaption>
                        <strong>Shipping</strong>
                        <strong>$20.00</strong>
                      </figcaption>
                    </figure>
                    <figure className="ps-block__total">
                      <h3>
                        Total<strong>$1279.99</strong>
                      </h3>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <div className="ps-newsletter">
    <div className="ps-container">
      <form className="ps-form--newsletter" action="do_action" method="post">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="ps-form__left">
              <h3>Newsletter</h3>
              <p>Subcribe to get information about products and coupons</p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="ps-form__right">
              <div className="form-group--nest">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email address"
                />
                <button className="ps-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</main>

  )
}
