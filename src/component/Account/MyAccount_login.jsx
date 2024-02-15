import React, { useState } from 'react';
import { fetchDataFromApi, insertDataFromApi, insertUserFromApi } from '../../utils/api';

export default function MyAccount() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  }); 

  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Kiểm tra tài khoản và mật khẩu trong Strapi
      const response = await fetchUserFromApi('/api/auth/local', {
        method: 'POST',
        data: {
          identifier: loginData.email,
          password: loginData.password,
        },
      });

      if (response.jwt) {
        // Đăng nhập thành công, bạn có thể thực hiện các hành động sau đây
        console.log('Đăng nhập thành công:', response);
      } else {
        // Sai tài khoản hoặc mật khẩu, hiển thị thông báo lỗi
        setErrorMessage('Sai tài khoản hoặc mật khẩu. Vui lòng thử lại.');
      }
    } catch (error) {
      // Xử lý lỗi (nếu có)
      console.error('Lỗi đăng nhập:', error);
      setErrorMessage('Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.');
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await insertDataFromApi('/api/auth/local/register', {
        username: registerData.email,   
        email: registerData.email,
        password: registerData.password,
        
        });

      console.log('Phản hồi từ (đăng ký):', response);
      console.log('Mật Khẩu:',registerData.password);

    } catch (error) {
      console.error('Lỗi đăng ký:', error);
    }
  };

  return (
    <div className="ps-page--my-account">
      <div className="ps-breadcrumb">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>My account</li>
          </ul>
        </div>
      </div>
      <div className="ps-my-account">
        <div className="container">
          <form
            className="ps-form--account ps-tab-root"
            action="link.html"
            method="get"
          >
            <ul className="ps-tab-list">
              <li className="active">
                <a href="#sign-in">Login</a>
              </li>
              <li>
                <a href="#register">Register</a>
              </li>
            </ul>
            <div className="ps-tabs">
              <div className="ps-tab active" id="sign-in">
                <div className="ps-form__content">
                  <h5>Log In Your Account</h5>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email Address"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="form-group form-forgot">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="ps-checkbox">
                      <input
                        className="form-control"
                        type="checkbox"
                        id="remember-me"
                        name="remember-me"
                      />
                      <label htmlFor="remember-me">Remember me</label>
                    </div>
                  </div>
                  <div className="form-group submtit">
                    <button
                      className="ps-btn ps-btn--fullwidth"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  {errorMessage && <p>{errorMessage}</p>}
                </div>
                <div className="ps-form__footer">
                  <p>Connect with:</p>
                  <ul className="ps-list--social">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="google" href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ps-tab" id="register">
                <div className="ps-form__content">
                  <h5>Register An Account</h5>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email Address"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                    />
                  </div>
                  <div className="form-group submtit">
                    <button
                      className="ps-btn ps-btn--fullwidth"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                </div>
                <div className="ps-form__footer">
                  <p>Connect with:</p>
                  <ul className="ps-list--social">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="google" href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default function MyAccount_login() {
//   const [errorMessage, setErrorMessage] = useState('');

//       const [loginData, setLoginData] = useState({
//         email: '',
//         password: '',
//       }); 
    
//       const [registerData, setRegisterData] = useState({
//         email: '',
//         password: '',
//       });
  
//       const handleLoginChange = (e) => {
//             const { name, value } = e.target;
//             setLoginData({
//               ...loginData,
//               [name]: value,
//             });
//           };
        
//           const handleLogin = async (e) => {
//             e.preventDefault();
        
//             try {
//               // Kiểm tra tài khoản và mật khẩu trong Strapi
//               const response = await fetchDataFromApi('/api/customers?populate=*', {
//                 method: 'POST',
//                 data: {
//                   identifier: loginData.email,
//                   password: loginData.password,
//                 },
//               });
        
//               if (response.jwt) {
//                 // Đăng nhập thành công, bạn có thể thực hiện các hành động sau đây
//                 console.log('Đăng nhập thành công:', response);
//               } else {
//                 // Sai tài khoản hoặc mật khẩu, hiển thị thông báo lỗi
//                 setErrorMessage('Sai tài khoản hoặc mật khẩu. Vui lòng thử lại.');
//               }
//             } catch (error) {
//               // Xử lý lỗi (nếu có)
//               console.error('Lỗi đăng nhập:', error);
//               setErrorMessage('Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.');
//             }
//           };
        
//           const handleRegisterChange = (e) => {
//             const { name, value } = e.target;
//             setRegisterData({
//               ...registerData,
//               [name]: value,
//             });
//           };
        
//           const handleRegister = async (e) => {
//             e.preventDefault();
        
//             try {
//               const response = await insertUserFromApi('/api/customers?populate=*', {
//                 User: registerData.email,   
//                 Email: registerData.email,
//                 Password: registerData.password,
                
//                 });
        
//               console.log('Phản hồi từ (đăng ký):', response);
//               console.log('Mật Khẩu:',registerData.password);
        
//             } catch (error) {
//               console.error('Lỗi đăng ký:', error);
//             }
//           };
//   return (
//     <div className="ps-page--my-account">
//         <div className="ps-breadcrumb">
//           <div className="container">
//             <ul className="breadcrumb">
//               <li><a href="/">Home</a></li>
//               <li>My account</li>
//             </ul>
//           </div>
//         </div>
//         <div className="ps-my-account">
//           <div className="container">
//             <form className="ps-form--account ps-tab-root" action="link.html" method="get">
//               <ul className="ps-tab-list">
//                 <li className="active"><a href="#sign-in">Login</a></li>
//                 <li><a href="#register">Register</a></li>
//               </ul>
//               <div className="ps-tabs">
//                 <div className="ps-tab active" id="sign-in">
//                   <div className="ps-form__content">
//                     <h5>Log In Your Account</h5>
//                     <div className="form-group">
//                       <input
//                       className="form-control"
//                       type="text"
//                       placeholder="Email Address"
//                       name="email"
//                       value={loginData.email}
//                       onChange={handleLoginChange}
//                     />
//                   </div>
//                   <div className="form-group form-forgot">
//                     <input
//                       className="form-control"
//                       type="password"
//                       placeholder="Password"
//                       name="password"
//                       value={loginData.password}
//                       onChange={handleLoginChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <div className="ps-checkbox">
//                       <input
//                         className="form-control"
//                         type="checkbox"
//                         id="remember-me"
//                         name="remember-me"
//                       />
//                       <label htmlFor="remember-me">Remember me</label>
//                     </div>
//                   </div>
//                   <div className="form-group submtit">
//                     <button
//                       className="ps-btn ps-btn--fullwidth"
//                       onClick={handleLogin}
//                     >
//                       Login
//                     </button>
//                     </div>
//                   </div>
//                   <div className="ps-form__footer">
//                     <p>Connect with:</p>
//                     <ul className="ps-list--social">
//                       <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
//                       <li><a className="google" href="#"><i className="fa fa-google-plus" /></a></li>
//                       <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
//                       <li><a className="instagram" href="#"><i className="fa fa-instagram" /></a></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="ps-tab" id="register">
//                   <div className="ps-form__content">
//                     <h5>Register An Account</h5>
//                     <div className="form-group">
//                    <input
//                       className="form-control"
//                       type="text"
//                       placeholder="Email Address"
//                       name="email"
//                       value={registerData.email}
//                       onChange={handleRegisterChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       className="form-control"
//                       type="password"
//                       placeholder="Password"
//                       name="password"
//                       value={registerData.password}
//                       onChange={handleRegisterChange}
//                     />
//                   </div>
//                   <div className="form-group submtit">
//                     <button
//                       className="ps-btn ps-btn--fullwidth"
//                       onClick={handleRegister}
//                     >
//                       Register
//                     </button>
//                   </div>
//                   </div>
//                   <div className="ps-form__footer">
//                     <p>Connect with:</p>
//                     <ul className="ps-list--social">
//                       <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
//                       <li><a className="google" href="#"><i className="fa fa-google-plus" /></a></li>
//                       <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
//                       <li><a className="instagram" href="#"><i className="fa fa-instagram" /></a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//   )
// }
