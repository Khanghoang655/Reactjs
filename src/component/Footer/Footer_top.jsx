export default function Footer_top() {
  return (
    <footer className="ps-footer">
    <div className="ps-container">
      <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
          <h4 className="widget-title">Contact us</h4>
          <div className="widget_content">
            <p>Call us 24/7</p>
            <h3>1800 97 97 69</h3>
            <p>
              502 New Design Str, Melbourne, Australia <br />
              <a href="mailto:contact@martfury.co">contact@martfury.co</a>
            </p>
            <ul className="ps-list--social">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="google-plus" href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      
      </div>
        
      <div className="ps-footer__copyright">
        <p>
          <span>We Using Safe Payment For:</span>
          <a href="#">
            <img src="/img/payment-method/1.jpg" alt="" />
          </a>
          <a href="#">
            <img src="/img/payment-method/2.jpg" alt="" />
          </a>
          <a href="#">
            <img src="/img/payment-method/3.jpg" alt="" />
          </a>
          <a href="#">
            <img src="/img/payment-method/4.jpg" alt="" />
          </a>
          <a href="#">
            <img src="/img/payment-method/5.jpg" alt="" />
          </a>
        </p>
      </div>
    </div>
  </footer>
  
  )
}
