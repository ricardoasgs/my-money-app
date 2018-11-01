import React, { Component } from "react";
import { connect } from "react-redux";

import ContentHeader from "../../Components/contentHeader";
import Content from "../../Components/content";
import ValueBox from "../../Components/valueBox";
import Row from "../../Components/row";
import { getSummary } from "../../Actions/dashboardActions";
import { bindActionCreators } from "redux";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;
    return (
      <React.Fragment>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de créditos"
            />
            <ValueBox
              cols="12 12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de débitos"
            />
            <ValueBox
              cols="12 12 4"
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

const mapStateToProps = state => ({
  summary: state.dashboard.summary
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getSummary }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
