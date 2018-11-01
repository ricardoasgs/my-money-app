import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Grid from "../Grid/grid";
import Input from "../../Components/input";
import IconButton from "../../Components/iconButton";

class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", this.props.type, index, item);
    }
  }
  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove("billingCycleForm", this.props.type, index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${this.props.type}[${index}].name`}
            component={Input}
            placeholder="Informe o Nome"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`${this.props.type}[${index}].value`}
            component={Input}
            placeholder="Informe o Valor"
            readOnly={this.props.readOnly}
          />
        </td>
        {this.props.showStatus ? (
          <td>
            <Field
              name={`${this.props.type}[${index}].status`}
              component={Input}
              placeholder="Informe o Status"
              readOnly={this.props.readOnly}
            />
          </td>
        ) : (
          ""
        )}
        <td>
          <IconButton
            type="button"
            className="btn btn-success"
            icon="fa fa-plus"
            function={() => this.add(index + 1)}
          />
          <IconButton
            type="button"
            className="btn btn-warning"
            icon="fa fa-clone"
            function={() => this.add(index + 1, item)}
          />
          <IconButton
            type="button"
            className="btn btn-danger"
            icon="fa fa-trash-o"
            function={() => this.remove(index)}
          />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.label}</legend>
          <table className="table">
            <thead>
              <tr>
                <td>Nome</td>
                <td>Valor</td>
                {this.props.showStatus ? <td>Status</td> : ""}
                <td className="table-actions">Ações</td>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ItemList);
