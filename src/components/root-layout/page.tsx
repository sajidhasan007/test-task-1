import React from "react";
import HeaderTop from "../header/HeaderTop";
import HeaderBottom from "../header/HeaderBottom";
import Footer from "../footer/Footer";

const BaseRootLayout = ({ children }: any) => {
  return (
    <div>
      <HeaderTop />
      {/* <HeaderBottom /> */}
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseRootLayout;
