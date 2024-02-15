
export default function Payment_success() {
  return (
    <main className="ps-page--my-account">
  <div className="ps-breadcrumb">
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>Payment Success</li>
      </ul>
    </div>
  </div>
  <section className="ps-section--account">
    <div className="container">
      <div className="ps-block--payment-success">
        <h3>Payment Success !</h3>
        <p>
          Thanks for your payment. Please visit
          <a href='/invoices'> here</a> to check your order status.
        </p>
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
