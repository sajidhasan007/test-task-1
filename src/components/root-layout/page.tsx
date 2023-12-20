import React from "react";
import HeaderTop from "../header/HeaderTop";
import Footer from "../footer/Footer";

const BaseRootLayout = ({ children }: any) => {
  return (
    <div>
      <HeaderTop />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseRootLayout;
