import React from "react";
import Helmet from "react-helmet";

import Nav from "../components/Navbar";
import "./all.sass";

import "../../node_modules/prismjs/themes/prism-tomorrow.css";

// import('https://unpkg.com/prism-themes@1.0.1/themes/prism-ghcolors.css');

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet 
      title="Home | Devtings"
      htmlAttributes={{
        lang: "en-GB"
      }}/>
    {children}
    <Nav />
  </div>
);

export default TemplateWrapper;
