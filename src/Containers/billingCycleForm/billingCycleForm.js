import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { init } from "../../Actions/billingCyclesActions";

import LabelAndInput from "../../Components/common/labelAndInput";
import ItemList from "../itemList/itemList";
import Summary from "../summary/summary";

class BillingCyclesForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts, init, userId } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form role="form" onSubmit={userId => handleSubmit(userId)}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 12 4"
            placeholder="Informe o Nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={LabelAndInput}
            type="number"
            label="Mês"
            cols="12 12 4"
            placeholder="Informe o Mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={LabelAndInput}
            type="number"
            label="Ano"
            cols="12 12 4"
            placeholder="Informe o Ano"
            readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList
            cols="12 12 6"
            label="Créditos"
            type="credits"
            readOnly={readOnly}
            list={credits}
          />
          <ItemList
            cols="12 12 6"
            label="Débitos"
            type="debts"
            readOnly={readOnly}
            list={debts}
            showStatus={true}
          />
        </div>
        <div className="box-footer">
          <button
            type="submit"
            className={readOnly ? "hidden" : "btn btn-primary"}
          >
            {this.props.submitLabel}
          </button>
          <button type="button" className="btn btn-default" onClick={init}>
            {this.props.cancelLabel}
          </button>
        </div>
      </form>
    );
  }
}

BillingCyclesForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCyclesForm);

const selector = formValueSelector("billingCycleForm");

const mapStateToProps = state => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
  id: state.auth.user._id
});

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCyclesForm);
