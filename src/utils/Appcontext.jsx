import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext(); 

export default function AppContext({ children }) { 
let [cartCount, setCartCount] = useState(0);
let [cartSub, setCartSub] = useState(0);
let [cartItem, setCartItem] = useState([]);

  const inc = (itemId, itemPrice) => {
    // Tìm sản phẩm trong danh sách cartItem dựa trên itemId
    const updatedCartItems = cartItem.map((item) => {
      if (item.id === itemId) {
        // Tăng số lượng sản phẩm đúng với id tương ứng
        const newCount = item.attributes.quantity + 1;
        return {
          ...item,
          attributes: {
            ...item.attributes,
            quantity: newCount,
          },
        };
      }
      return item;
    });
  
    // Cập nhật danh sách cartItem mới sau khi tăng số lượng
    setCartItem(updatedCartItems);
  
    // Tính lại tổng số tiền
    const updatedTotalSub = cartSub + itemPrice;
    setCartSub(updatedTotalSub);
    const totalItemCount = updatedCartItems.reduce((total, item) => total + item.attributes.quantity, 0);
  setCartCount(totalItemCount);
  };
  
  const desc = (itemId, itemPrice) => {
    // Tìm sản phẩm trong danh sách cartItem dựa trên itemId
    const updatedCartItems = cartItem.map((item) => {
      if (item.id === itemId) {
        // Giảm số lượng sản phẩm đúng với id tương ứng
        const newCount = item.attributes.quantity > 1 ? item.attributes.quantity - 1 : 1;
        return {
          ...item,
          attributes: {
            ...item.attributes,
            quantity: newCount,
          },
        };
      }
      return item;
    });
  
    // Cập nhật danh sách cartItem mới sau khi giảm số lượng
    setCartItem(updatedCartItems);
  
    // Tính lại tổng số tiền
    const updatedTotalSub = cartSub - itemPrice;
    setCartSub(updatedTotalSub);
    const totalItemCount = updatedCartItems.reduce((total, item) => total + item.attributes.quantity, 0);
  setCartCount(totalItemCount);
  };
// Hàm để lưu tất cả thông tin của giỏ hàng vào localStorage
const saveCartToLocalStorage = (cartCount, cartSub, cartItem) => {
  const cartData = {
    cartCount,
    cartSub,
    cartItem,
  };
  localStorage.setItem('cartData', JSON.stringify(cartData));
};
// hàm thêm vào giỏ hàng
const handleAddToCart = (product, quantity) => {
  let items = [...cartItem];
  let index = items.findIndex((item) => item.id === product.id);

  if (index > -1) {
    items[index].attributes.quantity += quantity;
  } else {
    product.attributes.quantity = quantity;
    items = [...items, product];
  }
  let newCartSub = 0;
  items.forEach((item) => {
    newCartSub += item.attributes.Price * item.attributes.quantity;
  });
  
  setCartSub(newCartSub); 
  setCartItem(items);
  setCartCount((prev) => prev + quantity);
  alert(`Bạn đã thêm ${product.attributes.Name} vào giỏ hàng thành công`);
  
  // Lưu giỏ hàng vào localStorage
  saveCartToLocalStorage(cartCount + quantity, newCartSub, items);
};


useEffect(() => {
  // Khôi phục thông tin giỏ hàng từ localStorage sau khi tải lại trang
  const storedCartData = localStorage.getItem('cartData');

  if (storedCartData) {
    const parsedCartData = JSON.parse(storedCartData);
    setCartCount(parsedCartData.cartCount);
    setCartSub(parsedCartData.cartSub);
    setCartItem(parsedCartData.cartItem);
    
  }
}, []);


//hàm cập nhật giỏ hàng
const handleUpdateCart = () => {
  // Tạo một bản sao của mảng cartItem để thực hiện cập nhật
  const updatedCart = [...cartItem];
  let updatedCartCount = cartCount;
  let updatedCartSub = cartSub;
  // Lặp qua mảng updatedCart và cập nhật số lượng cho từng sản phẩm
  updatedCart.forEach(item => {
    const inputElement = document.getElementById(`quantity-${item.id}`);
    const newQuantity = parseInt(inputElement.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      item.attributes.quantity = newQuantity;
      updatedCartCount += item.attributes.quantity;
      updatedCartSub += item.attributes.Price * item.attributes.quantity;
    }
  });

  // Cập nhật cartItem bằng updatedCart
  setCartItem(updatedCart);
  setCartCount(updatedCartCount);
  setCartSub(updatedCartSub);
};

const removeItemFromCart = (productId,productName) => {
  // Tìm sản phẩm có ID cần xóa
  const updatedCartItems = cartItem.filter((item) => item.id !== productId);

  // Tính lại tổng số lượng và tổng tiền
  let updatedCartCount = 0;
  let updatedCartSub = 0;

  updatedCartItems.forEach((item) => {
    updatedCartCount += item.attributes.quantity;
    updatedCartSub += item.attributes.Price * item.attributes.quantity;
  });

  // Cập nhật giỏ hàng
  setCartItem(updatedCartItems);
  setCartCount(updatedCartCount);
  setCartSub(updatedCartSub);

  // Lưu giỏ hàng mới vào localStorage
  const updatedCartData = {
    cartCount: updatedCartCount,
    cartSub: updatedCartSub,
    cartItem: updatedCartItems,
  };
  alert(`Bạn đã xóa ${productName} khỏi giỏ hàng thành công`);

  localStorage.setItem('cartData', JSON.stringify(updatedCartData));
};
let [newCartItem, setNewCartItem] = useState([]);
let [newCartCount, setNewCartCount] = useState(0);
let [newCartSub, setNewCartSub] = useState(0);
const clearCart = () => {
  // Lưu giá trị hiện tại của cartCount, cartSub, và cartItem vào biến tạm thời
  const tempCartCount = cartCount;
  const tempCartSub = cartSub;
  const tempCartItem = cartItem;

  // Tạo đối tượng updatedCartData để lưu vào localStorage
  const newCartData = {
    newCartCount: tempCartCount,
    newCartSub: tempCartSub,
    newCartItem: tempCartItem,
  };
  localStorage.setItem('newCartData', JSON.stringify(newCartData));


  // Xóa dữ liệu giỏ hàng
  setCartItem([]);
  setCartCount(0);
  setCartSub(0);
  localStorage.removeItem('cartData');
 
}
useEffect(() => {

  // Khôi phục thông tin đơn hàng mới từ localStorage sau khi tải lại trang
  const storedNewCartData = localStorage.getItem('newCartData');

  if (storedNewCartData) {
    const parsedNewCartData = JSON.parse(storedNewCartData);
    setNewCartCount(parsedNewCartData.newCartCount);
    setNewCartSub(parsedNewCartData.newCartSub);
    setNewCartItem(parsedNewCartData.newCartItem);
  }
}, []);
const clear =() =>{
  setNewCartItem([])
  setNewCartSub(0)
  setNewCartCount(0)
  localStorage.removeItem('newCartData');
}

  return (
    <Context.Provider value={{
      cartCount ,
      cartItem,
      setCartItem,
      setCartCount,
      cartSub,
      newCartItem,
      newCartCount,
      newCartSub,
      setCartSub,
      desc,
      inc,
      handleAddToCart,
      removeItemFromCart,
      handleUpdateCart,
      clear,
      clearCart,
    }}>
      {children}
    </Context.Provider>
  );
}

AppContext.propTypes = {
  children: PropTypes.node.isRequired
};
