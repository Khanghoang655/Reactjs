import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { fetchDataFromApi } from "../../utils/api";
export default function Header_bottom() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    fetchDataFromApi("/api/category2s?populate=*").then((res) => {
      setCategories(res.data);
    });
  };
  const getProducts = () => {
    fetchDataFromApi(`/api/product2s?populate=* `).then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  return (
    <nav className="navigation">
      <div className="ps-container">
        <div className="navigation__left">
          <div className="menu--product-categories">
            <div className="menu__toggle">
              <i className="icon-menu" />
              <span> Shop by Department</span>
            </div>
            <div className="menu__content">
              <ul className="menu--dropdown">
                {categories.map((value) => (
                  <li
                    key={value.id}
                    className="menu-item-has-children has-mega-menu"
                  >
                    <a href={`/category-product/${value.id}`}>
                      {value.attributes.Name}
                    </a>
                    <span className="sub-toggle" />
                    <div className="mega-menu">
                      {products
                        .filter((product) => {
                          const categoryId =
                            product.attributes.category_2_?.data?.id; // Kiểm tra nếu các thuộc tính không bị null hoặc undefined
                          return categoryId === value.id;
                        })
                        .map((product) => (
                          <div key={product.id} className="mega-menu__column">

                            <ul className="mega-menu__list">
                              <li >
                                <a href={`/item/${product.id}`}>
                                  {product.attributes.Name}
                                </a>
                              </li>
                            </ul>
                          </div>
                        ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="navigation__right">
          <ul className="menu">
            <li className="menu-item-has-children">
              <a href="/">Home</a>
              <span className="sub-toggle" />
              <ul className="sub-menu">
                <li>
                  <a href="/">Marketplace Full Width</a>
                </li>
                <li>
                  <a href="home-autopart.html">Home Auto Parts</a>
                </li>
                <li>
                  <a href="home-technology.html">Home Technology</a>
                </li>
                <li>
                  <a href="home-organic.html">Home Organic</a>
                </li>
                <li>
                  <a href="home-marketplace.html">Home Marketplace V1</a>
                </li>
                <li>
                  <a href="home-marketplace-2.html">Home Marketplace V2</a>
                </li>
                <li>
                  <a href="home-marketplace-3.html">Home Marketplace V3</a>
                </li>
                <li>
                  <a href="home-marketplace-4.html">Home Marketplace V4</a>
                </li>
                <li>
                  <a href="home-electronic.html">Home Electronic</a>
                </li>
                <li>
                  <a href="home-furniture.html">Home Furniture</a>
                </li>
                <li>
                  <a href="home-kid.html">Home Kids</a>
                </li>
                <li>
                  <a href="homepage-photo-and-video.html">
                    Home photo and picture
                  </a>
                </li>
                <li>
                  <a href="home-medical.html">Home Medical</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children has-mega-menu">
              <a href="/Shopping">Shop</a>
              <span className="sub-toggle" />
              <div className="mega-menu">
                <div className="mega-menu__column">
                  <h4>
                    Catalog Pages
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <Link to="/Shopping">Shop Default</Link>
                    </li>
                    <li>
                      <Link to="/Shopping">Shop Fullwidth</Link>
                    </li>
                    <li>
                      <a href="shop-categories.html">Shop Categories</a>
                    </li>
                    <li>
                      <a href="shop-sidebar.html">Shop Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-sidebar-without-banner.html">
                        Shop Without Banner
                      </a>
                    </li>
                    <li>
                      <a href="shop-carousel.html">Shop Carousel</a>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>
                    Product Layout
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <Link to="/Shopping">Default</Link>
                    </li>
                    <li>
                      <a href="product-extend.html">Extended</a>
                    </li>
                    <li>
                      <a href="product-full-content.html">Full Content</a>
                    </li>
                    <li>
                      <a href="product-box.html">Boxed</a>
                    </li>
                    <li>
                      <a href="product-sidebar.html">Sidebar</a>
                    </li>
                    <li>
                      <Link to="/Shopping">Fullwidth</Link>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>
                    Product Types
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <Link to="/Shopping">Simple</Link>
                    </li>
                    <li>
                      <Link to="/Shopping">Color Swatches</Link>
                    </li>
                    <li>
                      <a href="product-image-swatches.html">Images Swatches</a>
                    </li>
                    <li>
                      <a href="product-countdown.html">Countdown</a>
                    </li>
                    <li>
                      <a href="product-multi-vendor.html">Multi-Vendor</a>
                    </li>
                    <li>
                      <a href="product-instagram.html">Instagram</a>
                    </li>
                    <li>
                      <a href="product-affiliate.html">Affiliate</a>
                    </li>
                    <li>
                      <a href="product-on-sale.html">On sale</a>
                    </li>
                    <li>
                      <a href="product-video.html">Video Featured</a>
                    </li>
                    <li>
                      <a href="product-groupped.html">Grouped</a>
                    </li>
                    <li>
                      <a href="product-out-stock.html">Out Of Stock</a>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>
                    Woo Pages
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="/cart">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="/cart">Checkout</a>
                    </li>
                    <li>
                      <a href="whishlist.html">Whishlist</a>
                    </li>
                    <li>
                      <a href="compare.html">Compare</a>
                    </li>
                    <li>
                      <a href="order-tracking.html">Order Tracking</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children has-mega-menu">
              <a href="">Pages</a>
              <span className="sub-toggle" />
              <div className="mega-menu">
                <div className="mega-menu__column">
                  <h4>
                    Basic Page
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                    <li>
                      <a href="faqs.html">Faqs</a>
                    </li>
                    <li>
                      <a href="comming-soon.html">Comming Soon</a>
                    </li>
                    <li>
                      <a href="404-page.html">404 Page</a>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>
                    Vendor Pages
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="become-a-vendor.html">Become a Vendor</a>
                    </li>
                    <li>
                      <a href="vendor-store.html">Vendor Store</a>
                    </li>
                    <li>
                      <a href="vendor-dashboard-free.html">
                        Vendor Dashboard Free
                      </a>
                    </li>
                    <li>
                      <a href="vendor-dashboard-pro.html">
                        Vendor Dashboard Pro
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children has-mega-menu">
              <a href="">Blogs</a>
              <span className="sub-toggle" />
              <div className="mega-menu">
                <div className="mega-menu__column">
                  <h4>
                    Blog Layout
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="blog-grid.html">Grid</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Listing</a>
                    </li>
                    <li>
                      <a href="blog-small-thumb.html">Small Thumb</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">Left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">Right Sidebar</a>
                    </li>
                  </ul>
                </div>
                <div className="mega-menu__column">
                  <h4>
                    Single Blog
                    <span className="sub-toggle" />
                  </h4>
                  <ul className="mega-menu__list">
                    <li>
                      <a href="blog-detail.html">Single 1</a>
                    </li>
                    <li>
                      <a href="blog-detail-2.html">Single 2</a>
                    </li>
                    <li>
                      <a href="blog-detail-3.html">Single 3</a>
                    </li>
                    <li>
                      <a href="blog-detail-4.html">Single 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navigation__extra">
            <li>
              <a href="#">Sell on Martfury</a>
            </li>
            <li>
              <a href="#">Tract your order</a>
            </li>
            <li>
              <div className="ps-dropdown">
                <a href="#">US Dollar</a>
                <ul className="ps-dropdown-menu">
                  <li>
                    <a href="#">Us Dollar</a>
                  </li>
                  <li>
                    <a href="#">Euro</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="ps-dropdown language">
                <a href="#">
                  <img src="/img/flag/en.png" alt="" />
                  English
                </a>
                <ul className="ps-dropdown-menu">
                  <li>
                    <a href="#">
                      <img src="/img/flag/germany.png" alt="" /> Germany
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/flag/fr.png" alt="" /> France
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
