import React from "react";
import "../../Config/dependencies";

import Header from "../../Components/header";
import SideBar from "../../Components/sideBar";
import Footer from "../../Components/footer";
import Messages from "../../Components/messages";

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
