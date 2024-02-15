import { useState } from "react";
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}   
export default function New() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Kiểm tra email hợp lệ ở đây
    if (isValidEmail(email)) {
      // Tạo mã xác minh 
      const verificationCode = "BUYNOW";

      
      alert("Please check your email to verify your subscription.");

      setSubscribed(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />  
                  <button type="submit" className="ps-btn" onClick={handleSubscribe}>
                    Subscribe
                  </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}
