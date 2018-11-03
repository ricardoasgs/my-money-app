import React from "react";

import "../../Config/dependencies";

import Header from "../../Components/common/header";
import SideBar from "../../Components/common/sideBar";
import Footer from "../../Components/common/footer";
import Messages from "../../Components/common/messages";

const App = props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">{props.children}</div>
    <Footer />
    <Messages />
  </div>
);

export default App;
