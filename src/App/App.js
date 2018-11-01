import React from "react";
import "../Config/dependencies";

import Header from "../template/header";
import SideBar from "../template/sideBar";
import Footer from "../template/footer";
import Routes from "../Routes/routes";
import Messages from "../template/messages";

const App = props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
);

export default App;
