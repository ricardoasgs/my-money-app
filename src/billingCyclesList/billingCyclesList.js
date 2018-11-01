import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getBillingCycles, showUpdate } from "../Actions/billingCyclesActions";

class BillingCyclesList extends Component {
  componentWillMount() {
    this.props.getBillingCycles();
  }

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(billingCycle => (
              <tr key={billingCycle._id}>
                <td>{billingCycle.name}</td>
                <td>{billingCycle.month}</td>
                <td>{billingCycle.year}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => this.props.showUpdate(billingCycle)}
                  >
                    <i className="fa fa-pencil" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  list: state.billingCycles.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getBillingCycles, showUpdate }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCyclesList);
