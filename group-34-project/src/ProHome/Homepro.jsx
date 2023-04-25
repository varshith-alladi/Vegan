import React from 'react'
import { Products } from "./products";
import contents from "../content";
import Body from "./body";
import Float from "./hoveritems";
import Header from "./Header";
import Footer from "./footer";
import "./App.modules.css";
import "./nav1.modules.css";
import "./Home.modules.css";
import "./index.css";
import Navbar1 from './nav1';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from 'react';


export default function Home() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <div>
      <Navbar1 logOut={logOut}/>
      <Body />
      <Float />
      <Header />

      <div className="classApp">
        {contents.map((contents) => (
          <Products
            key={contents.id}
            image={contents.image}
            name={contents.name}
            totalSales={contents.totalSales}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
