import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../../utils/Appcontext";
import { Await, useParams } from "react-router-dom";
import { fetchDataFromApi, insertDataFromApi } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";
export default function Shop_cart() {
  const { cartItem, inc, desc, removeItemFromCart } = useContext(Context);
  const [coupon, setCoupon] = useState([]);
  const [enteredCouponCode, setEnteredCouponCode] = useState("");
  const [totalSub, setTotalSub] = useState(0);
  const [originalTotalSub, setOriginalTotalSub] = useState(0);

  const getCoupon = () => {
    fetchDataFromApi("/api/coupons?populate=*").then((res) => {
      setCoupon(res.data);
    });
  };

  useEffect(() => {
    getCoupon();
  }, []);

  useEffect(() => {
    const savedTotalSub = localStorage.getItem("totalSub");
    if (savedTotalSub) {
      setTotalSub(parseFloat(savedTotalSub));
      setOriginalTotalSub(parseFloat(savedTotalSub));
    }

    let newTotalSub = 0;
    for (const item of cartItem) {
      const itemPrice = item.attributes.Price;
      const itemCount = item.attributes.quantity;
      let itemTotal = itemPrice * itemCount;
      itemTotal = Math.round(itemTotal * 100) / 100;
      newTotalSub += itemTotal;
    }
    setTotalSub(newTotalSub);
    setOriginalTotalSub(newTotalSub);
  }, [cartItem]);

  const applyCoupon = (validCoupon) => {
    if (validCoupon) {
      const discount = validCoupon.attributes.Number;
      const discountedTotalSub = Math.round(
        (originalTotalSub - Math.min(originalTotalSub * discount, originalTotalSub)) * 100
      ) / 100;

      setTotalSub(discountedTotalSub);
    }
  };

  const handleApplyCoupon = () => {
    if (enteredCouponCode) {
      const validCoupon = coupon.find(
        (item) => item.attributes.Name === enteredCouponCode
      );

      if (validCoupon) {
        applyCoupon(validCoupon);
      } else {
        alert("Mã giảm giá không hợp lệ.");
      }
    } else {
      alert("Vui lòng nhập mã giảm giá trước.");
    }
  };
  useEffect(() => {
    // Mỗi khi totalSub thay đổi, cập nhật nó vào Local Storage
    localStorage.setItem("totalSub", totalSub.toString());
  }, [totalSub]);

  const isCartEmpty = () => {
    return cartItem.length === 0;
  };

  const handleProceedToCheckout = () => {
    if (isCartEmpty()) {
      setTotalSub(0);
      alert("Giỏ hàng của bạn trống. Hãy thêm sản phẩm vào giỏ hàng trước.");
    } else {
      window.location.href = "/checkout";
    }
  };
  return (
    <>
      <div className="ps-page--simple">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Shopping">Shop</a>
              </li>
              <li>Whishlist</li>
            </ul>
          </div>
        </div>
        <div className="ps-section--shopping ps-shopping-cart">
          <div className="container">
            <div className="ps-section__header">
              <h1>Shopping Cart</h1>
            </div>
            <div className="ps-section__content">
              <div className="table-responsive">
                <table className="table ps-table--shopping-cart ps-table--responsive">
                  <thead>
                    <tr>
                      <th>Product name</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item) => {
                      const itemPrice = item.attributes.Price;
                      const itemCount = item.attributes.quantity;
                      // Tính tổng giá tiền cho từng sản phẩm
                      let itemTotal = itemPrice * itemCount;
                      itemTotal = Math.round(itemTotal * 100) / 100;
                      // Thêm giá trị itemCartSub vào tổng

                      return (
                        <tr key={item.id}>
                          <td data-label="Product">
                            <div className="ps-product--cart">
                              <div className="ps-product__thumbnail">
                                <a href={`/Item/${item.id}`}>
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
                                <a href={`/Item/${item.id}`}>
                                  {item.attributes.Name}
                                </a>
                                <p>
                                  Sold By:<strong> YOUNG SHOP</strong>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="price" data-label="Price">
                            {item.attributes.Price}
                          </td>
                          <td data-label="Quantity">
                            <div className="form-group--number">
                              <button
                                className="up"
                                onClick={() => inc(item.id, itemPrice)}
                              >
                                +
                              </button>
                              <button
                                className="down"
                                onClick={() => desc(item.id, itemPrice)}
                              >
                                -
                              </button>
                              <input
                                className="form-control"
                                type="text"
                                placeholder={itemCount}
                              />
                            </div>
                          </td>
                          <td data-label="Total">${itemTotal}</td>
                          <td data-label="Actions">
                            <a href="#">
                              <i
                                className="icon-cross"
                                onClick={() => removeItemFromCart(item.id,item.attributes.Name)}
                              />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="ps-section__cart-actions">
                <a className="ps-btn" href="/Shopping">
                  <i className="icon-arrow-left" /> Back to Shop
                </a>
                <a
                  className="ps-btn ps-btn--outline"
                  href="/cart"
                  // onClick={() => handleAddToCart(cartItem?.[0], quantity)}
                >
                  <i className="icon-sync" /> Update cart
                </a>
              </div>
            </div>
            <div className="ps-section__footer">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                  <figure>
                    <figcaption>Coupon Discount</figcaption>
                    <div className="form-group">
                      <select
                        className="form-control"
                        value={enteredCouponCode}
                        onChange={(e) => setEnteredCouponCode(e.target.value)}
                      >
                        <option value="">-- Chọn mã giảm giá --</option>
                          {coupon.map((couponItem) => (
                            <option
                              key={couponItem.id}
                              value={couponItem.attributes.Name}
                            >
                              {couponItem.attributes.Name} (
                              {couponItem.attributes.Number * 100}%)
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <button
                          className="ps-btn ps-btn--outline"
                          onClick={handleApplyCoupon}
                        >
                          Apply
                        </button>
                      </div>
                    </figure>
                  </div>

                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                  <div className="ps-block--shopping-total">
                    <div className="ps-block__header">
                      <p>
                        Subtotal <span>${totalSub}</span>
                      </p>
                    </div>
                    <div className="ps-block__content">
                      <ul className="ps-block__product">
                        {cartItem.map((item) => (
                          <li key={item.id}>
                            <span className="ps-block__shop">
                              ROBERTS STORE Shipping
                            </span>
                            <span className="ps-block__shipping">
                              Free Shipping
                            </span>
                            <span className="ps-block__estimate">
                              Estimate for <strong>Viet Nam</strong>
                              <a href="#">{item.attributes.Name}</a>
                            </span>
                          </li>
                        ))}
                      </ul>
                      <h3>
                        Total <span>${totalSub}</span>
                      </h3>
                    </div>
                  </div>
                  <a
                    className="ps-btn ps-btn--fullwidth"
                    onClick={(e) => {
                      handleProceedToCheckout()
                    }}
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-newsletter">
        <div className="container">
          <form
            className="ps-form--newsletter"
            action="do_action"
            method="post"
          >
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
    </>
  );
}
