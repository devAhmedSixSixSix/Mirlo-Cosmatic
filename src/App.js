import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import WishList from "./Pages/WishList";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = () => {
      fetch("https://dummyjson.com/products?limit=100")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    getData();
  }, []);

  const filterdData =
    data &&
    data.products.filter(
      (item) => item.category === "fragrances" || item.category === "skincare"
    );

  const [cart, setCart] = useState([]);
  function addToCart(data) {
    const productExsist = cart.find((item) => item.id === data.id);
    if (productExsist) {
      setCart(
        cart.map((item) =>
          item.id === data.id
            ? { ...productExsist, quan: productExsist.quan + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...data, quan: 1 }]);
    }
  }

  function removeItemFromCart(data) {
    const productExsist = cart.find((item) => item.id === data.id);
    if (productExsist) {
      setCart(cart.filter((item) => item.id !== data.id));
    }
  }

  const [wishlist, setWishlist] = useState([]);
  function addToWishlist(data) {
    const productExsist = wishlist.find((item) => item.id === data.id);
    if (productExsist) {
      setWishlist(
        wishlist.map((item) =>
          item.id === data.id ? { ...productExsist } : item
        )
      );
    } else {
      setWishlist([...wishlist, { ...data, quan: 1 }]);
    }
  }

  function removeItemFromWishlist(data) {
    const productExsist = wishlist.find((item) => item.id === data.id);
    if (productExsist) {
      setWishlist(wishlist.filter((item) => item.id !== data.id));
    }
  }

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home filterdData={filterdData} />} />
        <Route path="shop" element={<Shop filterdData={filterdData} />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route
          path="shop/product/:id"
          element={
            <Product
              filterdData={filterdData}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />
        <Route path="contactus" element={<ContactUs />} />
        <Route
          path="cart"
          element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} />}
        />
        <Route path="cart/checkout" element={<CheckOut cart={cart} />} />
        <Route
          path="wishlist"
          element={
            <WishList
              wishlist={wishlist}
              removeItemFromWishlist={removeItemFromWishlist}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
