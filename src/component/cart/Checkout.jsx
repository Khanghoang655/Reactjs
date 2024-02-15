    import React, { useContext, useEffect, useState } from "react";
    import { Context } from "../../utils/Appcontext";
    import { loadStripe } from "@stripe/stripe-js";
    import { fetchDataFromApi, insertDataFromApi } from "../../utils/api";

    export default function Checkout() {
        const { cartItem, clearCart } = useContext(Context);
        const [coupon, setCoupon] = useState([]);
        const [totalSub, setTotalSub] = useState(0);
        const [enteredCouponCode, setEnteredCouponCode] = useState("");
      
        const getCoupon = () => {
          fetchDataFromApi("/api/coupons?populate=*").then((res) => {
            setCoupon(res.data);
          });
        };
      
        useEffect(() => {
          getCoupon();
        }, []);
      
        useEffect(() => {
          const savedCoupon = JSON.parse(localStorage.getItem("selectedCoupon"));
          const savedTotalSub = localStorage.getItem("totalSub");
      
          if (savedTotalSub) {
            setTotalSub(parseFloat(savedTotalSub));
          }
      
          if (savedCoupon) {
            setEnteredCouponCode(savedCoupon.attributes.Name);
          }
        }, []);
      
        const [formData, setFormData] = useState({
          firstName: '',
          lastName: '',
          companyName: '',
          emailAddress: '',
          country: '',
          phone: '',
          address: '',
        });
      
        const [formErrors, setFormErrors] = useState({
          firstName: '',
          lastName: '',
          companyName: '',
          emailAddress: '',
          country: '',
          phone: '',
          address: '',
        });
      
        const isFieldValid = (fieldName) => {
          return formData[fieldName].trim() !== '';
        };
      
        const isEmailValid = (email) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          return emailRegex.test(email);
        };
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleCheckInfo = () => {
          const newFormErrors = {};
      
          for (const fieldName in formData) {
            if (!isFieldValid(fieldName)) {
              newFormErrors[fieldName] = `${fieldName} is required.`;
            } else {
              newFormErrors[fieldName] = '';
            }
          }
      
          if (!isEmailValid(formData.emailAddress)) {
            newFormErrors.emailAddress = 'Invalid email address.';
          }
      
          setFormErrors(newFormErrors);
      
          const hasErrors = Object.values(newFormErrors).some((error) => error !== '');
      
          if (!hasErrors) {
            localStorage.setItem('submittedData', JSON.stringify(formData));
            window.location.href = '/paysuccess';
          }
        };
      
        const isFormValid = () => {
          return (
            formData.firstName.trim() !== '' &&
            formData.lastName.trim() !== '' &&
            formData.companyName.trim() !== '' &&
            formData.emailAddress.trim() !== '' &&
            isEmailValid(formData.emailAddress) &&
            formData.country.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.address.trim() !== ''
          );
        };
      
      
    return (
        <div className="ps-checkout ps-section--shopping">
        <div className="container">
            <div className="ps-section__header">
            <h1>Compare Product</h1>
            </div>
            <div className="ps-section__content">
            <form className="ps-form--checkout" action="do_action" method="post">
                <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12  ">
                    <div className="ps-form__billing-info">
                    <h3 className="ps-form__heading">Billing Details</h3>
                    <div className="form-group">
                        <label>
                        First Name<sup>*</sup>
                        </label>
                        <div className="form-group__content">
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {formErrors.firstName && (
                            <div className="error-message">
                            {formErrors.firstName}
                            </div>
                        )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                        Last Name<sup>*</sup>
                        </label>
                        <div className="form-group__content">
                        <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        {formErrors.lastName && (
                            <div className="error-message">
                            {formErrors.lastName}
                            </div>
                        )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                        Company Name<sup>*</sup>
                        </label>
                        <div className="form-group__content">
                        <input
                            className="form-control"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                        />
                        {formErrors.companyName && (
                            <div className="error-message">
                            {formErrors.companyName}
                            </div>
                        )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                        Email Address<sup>*</sup>
                        </label>
                        <div className="form-group__content">
                        <input
                            className="form-control"
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                        />
                        {formErrors.emailAddress && (
                            <div className="error-message">
                            {formErrors.emailAddress}
                            </div>
                        )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                        Country<sup>*</sup>
                        </label>
                        <div className="form-group__content">
                        <input
                            className="form-control"
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                        {formErrors.country && (
                            <div className="error-message">
                            {formErrors.country}
                            </div>
                        )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                        Phone<sup>*</sup>
                        </label>
                        <div className="form-group__content">
                        <input
                            className="form-control"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        {formErrors.phone && (
                            <div className="error-message">{formErrors.phone}</div>
                        )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                        Address<sup>*</sup>
                        </label>
                        <div className="form-group__content">
                        <input
                            className="form-control"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        {formErrors.address && (
                            <div className="error-message">
                            {formErrors.address}
                            </div>
                        )}
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
                                {cartItem.map((value) => {
                                const itemPrice = value.attributes.Price;
                                const itemCount = value.attributes.quantity;
                                // Tính tổng giá tiền cho từng sản phẩm
                                let itemTotal = itemPrice * itemCount;
                                itemTotal = Math.round(itemTotal * 100) / 100;
                                return (
                                    <tr key={value.id}>
                                    <td>
                                        <a href={`/Item/${value.id}`}>
                                        {value.attributes.Name} x {itemCount}
                                        </a>
                                        <p>
                                        Coupon:
                                        <strong>{enteredCouponCode}</strong>
                                        </p>
                                    </td>
                                    <td>${itemTotal}</td>
                                    </tr>
                                );
                                })}
                            </tbody>
                            </table>
                            <h4 className="ps-block__title">
                            Subtotal <span>${totalSub}</span>
                            </h4>
                            <div className="ps-block__shippings">
                            {cartItem.map((value) => {
                                return (
                                <figure key={value.id}>
                                    <h4>YOUNG SHOP Shipping</h4>
                                    <p>Free shipping</p>
                                    <a href={`/Item/${value.id}`}>
                                    {value.attributes.Name}
                                    </a>
                                </figure>
                                );
                            })}
                            </div>

                            <h3>
                            Total <span>${totalSub}</span>
                            </h3>
                        </div>
                        </div>
                        <a
                        className="ps-btn ps-btn--fullwidth"
                        onClick={(e) => {
                            e.preventDefault(); // Ngăn chặn chuyển tiếp mặc định
                            if (isFormValid()) {
                                clearCart();
                                handleCheckInfo();
                            
                            } else {
                            alert("Vui lòng điền đầy đủ thông tin.");
                            }
                        }}
                        >
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
    );
    }
