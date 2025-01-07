import "./App.css";
import Header from "./Header/Header";
import Foot from "./Footer/Foot";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Form/Login";
import Signup from "./Form/Signup";
import Main from "./MidPoint/Main";
import Base from "./Shop/Base";
import Account from "./Account/Account";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import { useLocation } from "react-router-dom";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Foot />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Header />
          <Login />
          <Foot />
        </>
      ),
    },
    {
      path: "/Register",
      element: (
        <>
          <Header />
          <Signup />
          <Foot />
        </>
      ),
    },
    {
      path: "/Shop",
      element: (
        <>
          <Header />
          <Base />
          <Foot />
        </>
      ),
    },
    {
      path: "/Wishlist",
      element: (
        <>
          <Header />
          <Main />
          <Foot />
        </>
      ),
    },
    {
      path: "/Account",
      element: (
        <>
          <Header />
          <Account />
          <Foot />
        </>
      ),
    },
    {
      path: "/Product",
      element: (
        <>
          
          <Header />
          <Product />
          <Foot />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Header />
          <Cart />
          <Foot />
        </>
      ),
    },
  ]);

  
  return (
    <>
    
        <RouterProvider router={router} />
    </>
  );
}

export default App;
