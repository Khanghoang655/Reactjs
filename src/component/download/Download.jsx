
import { useState } from "react";
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}   
export default function Download() {
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
    <div className="ps-download-app">
  <div className="ps-container">
    <div className="ps-block--download-app">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
            <div className="ps-block__thumbnail">
              <img src="/img/redcoral.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
            <div className="ps-block__content">
              <h3>Download Martfury App Now!</h3>
              <p>
                Shopping fastly and easily more with our app. Get a link to
                download the app on your phone
              </p>
              <form
                className="ps-form--download-app"
                action="do_action"
                method="post"
              >   
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
              </form>
              <p className="download-link">
                <a href="https://play.google.com/store/games?hl=vi&gl=US&pli=1" target="_blank">
                  <img src="/img/google-play.png" alt="" />
                </a>
                <a href="https://www.apple.com/vn/app-store/"target="_blank">
                  <img src="/img/app-store.png" alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
