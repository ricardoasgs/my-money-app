import React, { Component } from "react";
import ContentHeader from "../template/contentHeader";
import Content from "../template/content";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>Dashboard</Content>
      </React.Fragment>
    );
  }
}

export default Dashboard;
