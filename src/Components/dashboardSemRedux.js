import React, { Component } from "react";
import axios from "axios";

import ContentHeader from "./common/contentHeader";
import Content from "./common/content";
import ValueBox from "./valueBox";
import Row from "./common/row";

const BASE_URL = "http://localhost:3003/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: 0,
      debt: 0
    };
  }

  componentWillMount() {
    axios
      .get(`${BASE_URL}/billingCycles/summary`)
      .then(res => this.setState(res.data));
  }

  render() {
    const { credit, debt } = this.props.summary;
    return (
      <React.Fragment>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${credit - debt}`}
              text="Valor Consolidado"
            />
          </Row>
        </Content>
      </React.Fragment>
    );
  }
}

export default Dashboard;
