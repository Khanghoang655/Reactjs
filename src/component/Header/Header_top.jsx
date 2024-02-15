import { Link, useParams } from "react-router-dom"
import { Context } from "../../utils/Appcontext"
import { useContext, useEffect, useState } from "react"
import useFetch from "../../hook/useFetch"
export default function Header_top() {
  const {cartCount} = useContext(Context)
  const {delivery} = useContext(Context)
  const {cartItem} = useContext(Context)
  const {newCartCount} = useContext(Context)
  const {removeItemFromCart} = useContext(Context)
  const [search, setSearch] = useState([])

  let totalsub = 0;

  const handleSearch = (e) =>{
    setSearch(e.target.value)
  } 
  let datas = useFetch(`/api/product2s?populate=*&filters[Name][$contains]=${search}`)
  
  return (
    <div className="header__top">
      <div className="ps-container">
        <div className="header__left">
          <div className="menu--product-categories">
            <div className="menu__toggle">
              <i className="icon-menu" />
              <span> Shop by Department</span>
            </div>
            <div className="menu__content">
              <ul className="menu--dropdown">
                <li>
                  <a href="#.html">Hot Promotions</a>
                </li>
                <li className="menu-item-has-children has-mega-menu">
                  <a href="#">Consumer Electronic</a>
                  <span className="sub-toggle" />
                  <div className="mega-menu">
                    <div className="mega-menu__column">
                      <h4>
                        Electronic
                        <span className="sub-toggle" />
                      </h4>
                      <ul className="mega-menu__list">
                        <li>
                          <a href="#.html">Home Audio &amp; Theathers</a>
                        </li>
                        <li>
                          <a href="#.html">TV &amp; Videos</a>
                        </li>
                        <li>
                          <a href="#.html">Camera, Photos &amp; Videos</a>
                        </li>
                        <li>
                          <a href="#.html">Cellphones &amp; Accessories</a>
                        </li>
                        <li>
                          <a href="#.html">Headphones</a>
                        </li>
                        <li>
                          <a href="#.html">Videosgames</a>
                        </li>
                        <li>
                          <a href="#.html">Wireless Speakers</a>
                        </li>
                        <li>
                          <a href="#.html">Office Electronic</a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-menu__column">
                      <h4>
                        Accessories &amp; Parts
                        <span className="sub-toggle" />
                      </h4>
                      <ul className="mega-menu__list">
                        <li>
                          <a href="#.html">Digital Cables</a>
                        </li>
                        <li>
                          <a href="#.html">Audio &amp; Video Cables</a>
                        </li>
                        <li>
                          <a href="#.html">Batteries</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#.html">Clothing &amp; Apparel</a>
                </li>
                <li>
                  <a href="#.html">Home, Garden &amp; Kitchen</a>
                </li>
                <li>
                  <a href="#.html">Health &amp; Beauty</a>
                </li>
                <li>
                  <a href="#.html">Yewelry &amp; Watches</a>
                </li>
                <li className="menu-item-has-children has-mega-menu">
                  <a href="#">Computer &amp; Technology</a>
                  <span className="sub-toggle" />
                  <div className="mega-menu">
                    <div className="mega-menu__column">
                      <h4>
                        Computer &amp; Technologies
                        <span className="sub-toggle" />
                      </h4>
                      <ul className="mega-menu__list">
                        <li>
                          <a href="#.html">Computer &amp; Tablets</a>
                        </li>
                        <li>
                          <a href="#.html">Laptop</a>
                        </li>
                        <li>
                          <a href="#.html">Monitors</a>
                        </li>
                        <li>
                          <a href="#.html">Networking</a>
                        </li>
                        <li>
                          <a href="#.html">Drive &amp; Storages</a>
                        </li>
                        <li>
                          <a href="#.html">Computer Components</a>
                        </li>
                        <li>
                          <a href="#.html">Security &amp; Protection</a>
                        </li>
                        <li>
                          <a href="#.html">Gaming Laptop</a>
                        </li>
                        <li>
                          <a href="#.html">Accessories</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#.html">Babies &amp; Moms</a>
                </li>
                <li>
                  <a href="#.html">Sport &amp; Outdoor</a>
                </li>
                <li>
                  <a href="#.html">Phones &amp; Accessories</a>
                </li>
                <li>
                  <a href="#.html">Books &amp; Office</a>
                </li>
                <li>
                  <a href="#.html">Cars &amp; Motocycles</a>
                </li>
                <li>
                  <a href="#.html">Home Improments</a>
                </li>
                <li>
                  <a href="#.html">Vouchers &amp; Services</a>
                </li>
              </ul>
            </div>
          </div>
          <a className="ps-logo" href="/">
            <img src="/img/redcoral.png" alt="" />
          </a>
        </div>
        <div className="header__center">
          <form className="ps-form--quick-search" action="/" method="get">
            <div className="form-group--icon">
              {/* <i className="icon-chevron-down" />
            <select className="form-control">
              <option value={0} defaultValue="selected">
                All
              </option>
              <option className="level-0" defaultValue="babies-moms">
                Babies &amp; Moms
              </option>
              <option className="level-0" defaultValue="books-office">
                Books &amp; Office
              </option>
              <option className="level-0" defaultValue="cars-motocycles">
                Cars &amp; Motocycles
              </option>
              <option className="level-0" defaultValue="clothing-apparel">
                Clothing &amp; Apparel
              </option>
              <option className="level-1" defaultValue="accessories-clothing-apparel">
                Accessories
              </option>
              <option className="level-1" defaultValue="bags">
                Bags
              </option>
              <option className="level-1" defaultValue="kids-fashion">
                Kid’s Fashion
              </option>
              <option className="level-1" defaultValue="mens">
                Mens
              </option>
              <option className="level-1" defaultValue="shoes">
                Shoes
              </option>
              <option className="level-1" defaultValue="sunglasses">
                Sunglasses
              </option>
              <option className="level-1" defaultValue="womens">
                Womens
              </option>
              <option className="level-0" defaultValue="computers-technologies">
                Computers &amp; Technologies
              </option>
              <option className="level-1" defaultValue="desktop-pc">
                Desktop PC
              </option>
              <option className="level-1" defaultValue="laptop">
                Laptop
              </option>
              <option className="level-1" defaultValue="smartphones">
                Smartphones
              </option>
              <option className="level-0" defaultValue="consumer-electrics">
                Consumer Electrics
              </option>
              <option className="level-1" defaultValue="air-conditioners">
                Air Conditioners
              </option>
              <option className="level-2" defaultValue="accessories">
                Accessories
              </option>
              <option className="level-2" defaultValue="type-hanging-cell">
                Type Hanging Cell
              </option>
              <option className="level-2" defaultValue="type-hanging-wall">
                Type Hanging Wall
              </option>
              <option className="level-1" defaultValue="audios-theaters">
                Audios &amp; Theaters
              </option>
              <option className="level-2" defaultValue="headphone">
                Headphone
              </option>
              <option className="level-2" defaultValue="home-theater-system">
                Home Theater System
              </option>
              <option className="level-2" defaultValue="speakers">
                Speakers
              </option>
              <option className="level-1" defaultValue="car-electronics">
                Car Electronics
              </option>
              <option className="level-2" defaultValue="audio-video">
                Audio &amp; Video
              </option>
              <option className="level-2" defaultValue="car-security">
                Car Security
              </option>
              <option className="level-2" defaultValue="radar-detector">
                Radar Detector
              </option>
              <option className="level-2" defaultValue="vehicle-gps">
                Vehicle GPS
              </option>
              <option className="level-1" defaultValue="office-electronics">
                Office Electronics
              </option>
              <option className="level-2" defaultValue="printers">
                Printers
              </option>
              <option className="level-2" defaultValue="projectors">
                Projectors
              </option>
              <option className="level-2" defaultValue="scanners">
                Scanners
              </option>
              <option className="level-2" defaultValue="store-business">
                Store &amp; Business
              </option>
              <option className="level-1" defaultValue="refrigerators">
                Refrigerators
              </option>
              <option className="level-1" defaultValue="tv-televisions">
                TV Televisions
              </option>
              <option className="level-2" defaultValue="4k-ultra-hd-tvs">
                4K Ultra HD TVs
              </option>
              <option className="level-2" defaultValue="led-tvs">
                LED TVs
              </option>
              <option className="level-2" defaultValue="oled-tvs">
                OLED TVs
              </option>
              <option className="level-1" defaultValue="washing-machines">
                Washing Machines
              </option>
              <option className="level-2" defaultValue="type-drying-clothes">
                Type Drying Clothes
              </option>
              <option className="level-2" defaultValue="type-horizontal">
                Type Horizontal
              </option>
              <option className="level-2" defaultValue="type-vertical">
                Type Vertical
              </option>
              <option className="level-0" defaultValue="garden-kitchen">
                Garden &amp; Kitchen
              </option>
              <option className="level-1" defaultValue="cookware">
                Cookware
              </option>
              <option className="level-1" defaultValue="decoration">
                Decoration
              </option>
              <option className="level-1" defaultValue="furniture">
                Furniture
              </option>
              <option className="level-1" defaultValue="garden-tools">
                Garden Tools
              </option>
              <option className="level-1" defaultValue="home-improvement">
                Home Improvement
              </option>
              <option className="level-1" defaultValue="powers-and-hand-tools">
                Powers And Hand Tools
              </option>
              <option className="level-1" defaultValue="utensil-gadget">
                Utensil &amp; Gadget
              </option>
              <option className="level-0" defaultValue="health-beauty">
                Health &amp; Beauty
              </option>
              <option className="level-1" defaultValue="equipments">
                Equipments
              </option>
              <option className="level-1" defaultValue="hair-care">
                Hair Care
              </option>
              <option className="level-1" defaultValue="perfumer">
                Perfumer
              </option>
              <option className="level-1" defaultValue="skin-care">
                Skin Care
              </option>
              <option className="level-0" defaultValue="jewelry-watches">
                Jewelry &amp; Watches
              </option>
              <option className="level-1" defaultValue="gemstone-jewelry">
                Gemstone Jewelry
              </option>
              <option className="level-1" defaultValue="mens-watches">
                Men’s Watches
              </option>
              <option className="level-1" defaultValue="womens-watches">
                Women’s Watches
              </option>
              <option className="level-0" defaultValue="phones-accessories">
                Phones &amp; Accessories
              </option>
              <option className="level-1" defaultValue="iphone-8">
                Iphone 8
              </option>
              <option className="level-1" defaultValue="iphone-x">
                Iphone X
              </option>
              <option className="level-1" defaultValue="sam-sung-note-8">
                Sam Sung Note 8
              </option>
              <option className="level-1" defaultValue="sam-sung-s8">
                Sam Sung S8
              </option>
              <option className="level-0" defaultValue="sport-outdoor">
                Sport &amp; Outdoor
              </option>
              <option className="level-1" defaultValue="freezer-burn">
                Freezer Burn
              </option>
              <option className="level-1" defaultValue="fridge-cooler">
                Fridge Cooler
              </option>
              <option className="level-1" defaultValue="wine-cabinets">
                Wine Cabinets
              </option>
            </select> */}
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="I'm shopping for..."
              id="input-search"
              onChange={handleSearch}
              value={search}
            />
            {/* <button>Search</button> */}
            <div className="ps-panel--search-result">
              <div className="ps-panel__content">
                {datas.map((value) => {
                  return (
                    <div
                      key={value.id}
                      className="ps-product ps-product--wide ps-product--search-result"
                    >
                      <div className="ps-product__thumbnail">
                        <a href="/item">
                          <img
                            src={
                              "http://localhost:1337" +
                              value.attributes.Image.data[0].attributes.url
                            }
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ps-product__content">
                        <a
                          className="ps-product__title"
                          href={`/item/${value.id}`}
                        >
                          {value.attributes.Name}
                        </a>

                        <p className="ps-product__price">
                          ${value.attributes.Price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
        <div className="header__right">
          <div className="header__actions">
            <a
              className="header__extra"
              href={`/Invoices`}
              onClick={() => delivery()}
            >
              <i className="icon-chart-bars" />
              <span>
                <i>{newCartCount}</i>
              </span>
            </a>

            <div className="ps-cart--mini">
              <a className="header__extra" href="/cart">
                <i className="icon-bag2" />
                <span>
                  <i>{cartCount}</i>
                </span>
              </a>
              <div className="ps-cart__content">
                <div className="ps-cart__items">
                  {cartItem &&
                    cartItem?.map((item) => {
                      const itemPrice = item.attributes.Price;
                      const itemCount = item.attributes.quantity;
                      // Tính tổng giá tiền cho từng sản phẩm
                      let itemTotal = itemPrice * itemCount;
                      itemTotal = Math.round(itemTotal * 100) / 100;
                      // Thêm giá trị itemCartSub vào tổng
                      totalsub += itemTotal;
                      return (
                        <div key={item.id} className="ps-product--cart-mobile">
                          <div className="ps-product__thumbnail">
                            <a href={`/item/${item.id}`}>
                              <img
                                src={
                                  "http://localhost:1337" +
                                  item.attributes.Image.data[0].attributes.url
                                }
                              />
                            </a>
                          </div>
                          <div className="ps-product__content">
                            <a
                              className="ps-product__remove"
                              href="#"
                              onClick={() =>
                                removeItemFromCart(
                                  item.id,
                                  item.attributes.Name
                                )
                              }
                            >
                              <i className="icon-cross" />
                            </a>
                            <a href={`/item/${item.id}`}>
                              {item.attributes.Name}
                            </a>
                            <p>
                              <strong>Sold by:</strong> YOUNG SHOP
                            </p>
                            <small>
                              {itemCount} x {itemPrice}$ ={" "}
                              {itemCount * itemPrice}$
                            </small>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="ps-cart__footer">
                  <h3>
                    Sub Total:<strong>{totalsub}</strong>
                  </h3>
                  <figure>
                    <a className="ps-btn" href="/cart">
                      View Cart
                    </a>
                    <a className="ps-btn" href="/cart">
                      Checkout
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="ps-block--user-header">
              <div className="ps-block__left">
                <i className="icon-user"></i>
              </div>
              <div className="ps-block__right">
                <a href="/myaccount">Login</a>
                <a href="/myaccount">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
