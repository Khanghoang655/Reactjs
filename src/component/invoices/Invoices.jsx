import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/Appcontext";

export default function Invoices() {
  const { newCartItem } = useContext(Context);
  const { newCartCount } = useContext(Context);
  const { clear } = useContext(Context);
  const { newCartSub } = useContext(Context);
  const [totalSub, setTotalSub] = useState(0);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const savedCoupon = JSON.parse(localStorage.getItem("selectedCoupon"));
    const savedTotalSub = localStorage.getItem("totalSub");
    // Kiểm tra xem đã có mã giảm giá đã lưu hay chưa
    if (savedTotalSub) {
      setTotalSub(parseFloat(savedTotalSub));
    }
  }, []);
  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const storedUserData = localStorage.getItem("submittedData");
  
    // Kiểm tra xem có thông tin người dùng đã lưu hay không
    if (storedUserData) {
      console.log("storedUserData:", storedUserData); // Kiểm tra giá trị lấy từ localStorage
      // Chuyển đổi chuỗi JSON thành đối tượng JavaScript và lưu vào state
      const userDataObject = JSON.parse(storedUserData);
      setUserData(userDataObject);
    }
  }, []);
    
  
  return (
    <main className="ps-page--my-account">
      <div className="ps-breadcrumb">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
           
            <li>Invoice Detail</li>
          </ul>
        </div>
      </div>
      <section className="ps-section--account">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ps-section__left">
               
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ps-section__right">
                <div className="ps-section--account-setting">
                  <div className="ps-section__header">
                    <h3>
                      Invoice #500884010 -<strong>Successful delivery</strong>
                    </h3>
                  </div>
                  <div className="ps-section__content">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        {userData && (
                          <figure className="ps-block--invoice">
                            <figcaption>Address</figcaption>
                            <div className="ps-block__content">
                              <strong>
                                {userData.firstName} {userData.lastName}
                              </strong>
                              <p>Address: {userData.address}</p>
                              <p>Phone: {userData.phone}</p>
                            </div>
                          </figure>
                        )}
                      </div>
                      <div className="col-md-4 col-12">
                        <figure className="ps-block--invoice">
                          <figcaption>Shipping Fee</figcaption>
                          <div className="ps-block__content">
                            <p>Shipping Fee: Free</p>
                          </div>
                        </figure>
                      </div>
                      <div className="col-md-4 col-12">
                        <figure className="ps-block--invoice">
                          <figcaption>Payment</figcaption>
                          <div className="ps-block__content">
                            <p>Payment Method: Visa</p>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table ps-table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {newCartItem.map((item) => {
                            const itemPrice = item.attributes.Price;
                            const itemCount = item.attributes.quantity;
                            // Tính tổng giá tiền cho từng sản phẩm
                            const itemTotal = itemPrice * itemCount;
                            // Thêm giá trị itemCartSub vào tổng
                            return (
                              <tr key={item.id}>
                                <td>
                                  <div className="ps-product--cart">
                                    <div className="ps-product__thumbnail">
                                      <a href={`/item/${item.id}`}>
                                        <img
                                          src={
                                            "http://localhost:1337" +
                                            item.attributes.Image.data[0]
                                              .attributes.url
                                          }
                                        />
                                      </a>
                                    </div>
                                    <div className="ps-product__content">
                                      <a href="product-default.html">
                                        {item.attributes.Name}
                                      </a>
                                      <p>
                                        Sold By:<strong> YOUNG SHOP</strong>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <span>
                                    <i>$</i> {itemPrice}
                                  </span>
                                </td>
                                <td>{itemCount}</td>
                                <td>
                                  <span>
                                    <i>$</i> {totalSub}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="ps-section__footer">
                    <a
                      className="ps-btn ps-btn--sm"
                      href="#"
                      onClick={() => clear()}
                    >
                      Back to invoices
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
