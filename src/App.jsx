import Footer from "./component/Footer/Footer";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Shopping from "./component/Shopping";
import Header from "./component/Header/Header";
import Shop_cart from "./component/cart/Shop_cart";
import Page from "./component/Page-select/Page";
import Item from "./component/Item/Item";
import First_payment from "./component/payment/first_payment";
import Payment_success from "./component/payment/Payment_success";
import Shop_default from "./component/Shop_default/Shop_default";
import CategoryProduct from "./component/Product2/CategoryProduct";
import  AppProvider from "./utils/Appcontext";
import AppContext from "./utils/Appcontext";
import Invoices from "./component/invoices/invoices";
import MyAccount from "./component/Account/MyAccount_login";
import Checkout from "./component/cart/Checkout";

function App() {
  
  return (
    <div>
      <AppContext>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Shop_cart/>} />
        <Route path="/Shopping" element={<Shopping/>} />
        <Route path="/page" element={<Page/>} />   {/*checkout*/}
        <Route path="/Shop-default" element={<Shop_default/>}/>
        <Route path="/pay" element={<First_payment/>}/>
        <Route path="/paysuccess" element={<Payment_success/>}/>
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/item/:id" element={<Item/>} />
        <Route path="/Shop-default" element={<Shop_default/>}/>
        <Route path="/category-product/:id" element={<CategoryProduct/>}/>
        <Route path="/category-product" element={<CategoryProduct/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/myaccount" element={<MyAccount/>}/>
      </Routes>
    <Footer/>
    </AppContext>
   </div>
  )
}

export default App
