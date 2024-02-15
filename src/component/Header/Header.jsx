import { useContext } from "react";
import Header_bottom from "./Header_bottom";
import Header_top from "./Header_top";
import { Link } from "react-router-dom"
import { Context } from "../../utils/Appcontext";

export default function Header() {
  const {cartCount} = useContext(Context)
  const {cartItem} = useContext(Context)
  let totalsub = 0;

  return (
    <>
      <header className="header header--1" data-sticky="true">
        <Header_top />
        <Header_bottom />
      </header>
      <header className="header header--mobile" data-sticky="true">
  <div className="header__top">
    <div className="header__left">
      <p>Welcome to Martfury Online Shopping Store !</p>
    </div>
    <div className="header__right">
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
    </div>
  </div>
  <div className="navigation--mobile">
    <div className="navigation__left">
      <a className="ps-logo" href="/">
        <img src="/img/logo_light.png" alt="" />
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
            {  cartItem &&
                  cartItem?.map((item) =>{
                    const itemPrice = item.attributes.Price;
                    const itemCount = item.attributes.quantity;
                     // Tính tổng giá tiền cho từng sản phẩm
                    const itemTotal = itemPrice * itemCount;
                  // Thêm giá trị itemCartSub vào tổng
                  totalsub += itemTotal;
                    return(
                      <div key={item.id}className="ps-product--cart-mobile">
                    <div className="ps-product__thumbnail">
                      <a href={`/item/${item.id}`}>
                        <img
                          src={
                            "http://localhost:1337" +
                            item.attributes.Image.data[0].attributes
                              .url
                          }
                        />
                      </a>
                    </div>
                    <div className="ps-product__content">
                      <a className="ps-product__remove" href="#" onClick={() => removeItemFromCart(item.id, item.attributes.Name)}>
                        <i className="icon-cross" />
                      </a>
                      <a href={`/item/${item.id}`}>
                        {item.attributes.Name}
                      </a>
                      <p>
                        <strong>Sold by:</strong> YOUNG SHOP
                      </p>
                      <small>{itemCount} x {itemPrice}$ ={' '} {itemCount * itemPrice}$</small>
                    </div>
                  </div>
                    )
                  })
                }
            </div>
            <div className="ps-cart__footer">
              <h3>
                Sub Total:<strong>${totalsub}</strong>
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
            <a href="my-account.html">
              <i className="icon-user" />
            </a>
          </div>
          <div className="ps-block__right">
            <a href="my-account.html">Login</a>
            <a href="my-account.html">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="ps-search--mobile">
    <form className="ps-form--search-mobile" action="/" method="get">
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
      </header>

    </>
  );
}
