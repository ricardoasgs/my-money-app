import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { init } from "../Actions/billingCyclesActions";

import LabelAndInput from "../template/labelAndInput";

class BillingCyclesForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe o Nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={LabelAndInput}
            type="number"
            label="Mês"
            cols="12 4"
            placeholder="Informe o Mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={LabelAndInput}
            type="number"
            label="Ano"
            cols="12 4"
            placeholder="Informe o Ano"
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button
            type="submit"
            className={readOnly ? "hidden" : "btn btn-primary"}
          >
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
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

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BillingCyclesForm);
