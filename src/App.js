import React, { useState, useEffect } from "react";
import "./App.css";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import Navbar from "./components/includes/Navbar";
import Header from "./components/pages/Header";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {

  const [loading, setLoading] = useState(false);

  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">

      {
        loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40} />
        :
        <div>
          <Navbar />
          <Header />
          <Products />
          <About />
          <Contact />
        </div>
      }

    </div>
  );
}

export default App;
