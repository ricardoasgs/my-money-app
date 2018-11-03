import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  getBillingCycles,
  showUpdate,
  remove,
  detail
} from "../../Actions/billingCyclesActions";
import IconButton from "../../Components/common/iconButton";

class BillingCyclesList extends Component {
  componentWillMount() {
    this.props.getBillingCycles(this.props.id);
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
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(billingCycle => (
              <tr key={billingCycle._id}>
                <td>{billingCycle.name}</td>
                <td>{billingCycle.month}</td>
                <td>{billingCycle.year}</td>
                <td>
                  <IconButton
                    className="btn btn-warning"
                    function={() => this.props.showUpdate(billingCycle)}
                    icon="fa fa-pencil"
                  />
                  <IconButton
                    className="btn btn-danger"
                    function={() => this.props.remove(billingCycle)}
                    icon="fa fa-trash-o"
                  />
                  <IconButton
                    className="btn btn-primary"
                    function={() => this.props.detail(billingCycle)}
                    icon="fa fa-info-circle"
                  />
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
  list: state.billingCycles.list,
  id: state.auth.user._id
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getBillingCycles, showUpdate, remove, detail },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCyclesList);
