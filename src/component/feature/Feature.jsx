import { Link } from "react-router-dom"
export default function Feature() {
  return (
    <div className="ps-product-list ps-clothings">
  <div className="ps-container">
    <div className="ps-section__header">
      <h3>Consumer Electronics</h3>
      <ul className="ps-section__links">
        <li>
          <a href="/Shopping">New Arrivals</a>
        </li>
        <li>
          <a href="/Shopping">Best seller</a>
        </li>
        <li>
          <a href="/Shopping">Must Popular</a>
        </li>
        <li>
          <a href="/Shopping">View All</a>
        </li>
      </ul>
    </div>
    <div className="ps-section__content">
      <div
        className="ps-carousel--nav owl-slider"
        data-owl-auto="false"
        data-owl-loop="false"
        data-owl-speed={10000}
        data-owl-gap={0}
        data-owl-nav="true"
        data-owl-dots="true"
        data-owl-item={7}
        data-owl-item-xs={2}
        data-owl-item-sm={2}
        data-owl-item-md={3}
        data-owl-item-lg={4}
        data-owl-item-xl={6}
        data-owl-duration={1000}
        data-owl-mousedrag="on"
      >
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/1.jpg" alt="" />
            </Link>
            <div className="ps-product__badge">-16%</div>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Go Pro
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Marshall Kilburn Portable Wireless
              </a>
              
              <p className="ps-product__price sale">
                $567.99 <del>$670.00 </del>
              </p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Marshall Kilburn Portable Wireless
              </a>
              <p className="ps-product__price sale">
                $567.99 <del>$670.00 </del>
              </p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/2.jpg" alt="" />
            </Link>
            <div className="ps-product__badge hot">hot</div>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Global Office
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Xbox One Wireless Controller Black Color
              </a>
              
              <p className="ps-product__price">$101.99</p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Xbox One Wireless Controller Black Color
              </a>
              <p className="ps-product__price">$101.99</p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/3.jpg" alt="" />
            </Link>
            <div className="ps-product__badge">-25%</div>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Young Shop
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Sound Intone I65 Earphone White Version
              </a>
             
              <p className="ps-product__price sale">
                $42.00 <del>$60.00 </del>
              </p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Sound Intone I65 Earphone White Version
              </a>
              <p className="ps-product__price sale">
                $42.00 <del>$60.00 </del>
              </p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/4.jpg" alt="" />
            </Link>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Global Office
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Samsung Gear VR Virtual Reality Headset
              </a>
              
              <p className="ps-product__price">$320.00</p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Samsung Gear VR Virtual Reality Headset
              </a>
              <p className="ps-product__price">$320.00</p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/5.jpg" alt="" />
            </Link>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Global Office
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Samsung UHD TV 24inch
              </a>
              
              <p className="ps-product__price">$85.00</p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Samsung UHD TV 24inch
              </a>
              <p className="ps-product__price">$85.00</p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/6.jpg" alt="" />
            </Link>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Global Store
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                EPSION Plaster Printer
              </a>
              
              <p className="ps-product__price">$92.00</p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                EPSION Plaster Printer
              </a>
              <p className="ps-product__price">$92.00</p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/7.jpg" alt="" />
            </Link>
            <div className="ps-product__badge">-46%</div>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Young Shop
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                LG White Front Load Steam Washer
              </a>
             
              <p className="ps-product__price sale">
                $42.00 <del>$60.00 </del>
              </p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                LG White Front Load Steam Washer
              </a>
              <p className="ps-product__price sale">
                $42.00 <del>$60.00 </del>
              </p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/8.jpg" alt="" />
            </Link>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Go Pro
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Edifier Powered Bookshelf Speakers
              </a>
             
              <p className="ps-product__price">$42.00</p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Edifier Powered Bookshelf Speakers
              </a>
              <p className="ps-product__price">$42.00</p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/9.jpg" alt="" />
            </Link>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Go Pro
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Amcrest Security Camera in White Color
              </a>
             
              <p className="ps-product__price">$42.00</p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Amcrest Security Camera in White Color
              </a>
              <p className="ps-product__price">$42.00</p>
            </div>
          </div>
        </div>
        <div className="ps-product">
          <div className="ps-product__thumbnail">
            <Link to="/Shopping">
              <img src="/img/products/home/10.jpg" alt="" />
            </Link>
            
          </div>
          <div className="ps-product__container">
            <a className="ps-product__vendor" href="#">
              Go Pro
            </a>
            <div className="ps-product__content">
              <a className="ps-product__title" href="/Shopping">
                Amcrest Security Camera in White Color
              </a>
             
              <p className="ps-product__price">$42.00</p>
            </div>
            <div className="ps-product__content hover">
              <a className="ps-product__title" href="/Shopping">
                Amcrest Security Camera in White Color
              </a>
              <p className="ps-product__price">$42.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
