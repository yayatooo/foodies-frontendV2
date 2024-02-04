import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginStore from "../store/loginStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import useCartStore from "../store/cartStore";

const Navbar = () => {
  const { user, initialize } = loginStore();
  const totalQuantity = useCartStore((state) => state.totalQuantity);

  useEffect(() => {
    // Initialize auth store based on stored user data
    initialize();
  }, [initialize]);

  // console.log(user);

  return (
    <nav className="w-full font-poppins bg-primary">
      <section className="container max-w-6xl flex justify-between items-center mx-auto py-5">
        <Link to="/" className="font-bold text-3xl text-black">
          Foodies
        </Link>
        <div className="lg:flex gap-x-4 font-normal items-center xs:hidden">
          <Link to="/menu">Our Menu</Link>
          <a href="#">Serivice</a>
          <a href="#">About Us</a>
          <div className="flex gap-3 items-center ml-6">
            {user ? (
              <>
                <Link
                  to={"/profile"}
                  className="bg-black py-2 px-4 text-primary rounded-full hover:bg-gray-900"
                >
                  profile
                </Link>
              </>
            ) : (
              <Link
                to="/register"
                className="bg-black py-2 px-4 text-primary rounded-full hover:bg-gray-900"
              >
                Sign Up
              </Link>
            )}
            {/* <button onClick={handleLogout}>Logout</button> */}
            <Link to="/cart" className="flex">
              <FaCartShopping size={"1.5em"} />
              <p className="w-6 h-6 bg-red-500 text-white rounded-full text-center">
                {totalQuantity}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
