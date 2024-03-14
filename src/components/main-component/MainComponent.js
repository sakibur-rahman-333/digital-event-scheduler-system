import React, { Component } from "react";
import Header from "../header/Header";
import Body from "../body/Body";
import Footer from "../footer/Footer";

export class MainComponent extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default MainComponent;
