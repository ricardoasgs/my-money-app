import React, { Component } from "react";

import Grid from "../Grid/grid";
import Row from "../../Components/common/row";
import ValueBox from "../../Components/common/valueBox";

class Summary extends Component {
  render() {
    const { credit, debt } = this.props;
    return (
      <Grid cols="12">
        <fieldset>
          <legend>Resumo</legend>
          <Row>
            <ValueBox
              cols="12 12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de Créditos"
            />
            <ValueBox
              cols="12 12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de Débitos"
            />
            <ValueBox
              cols="12 12 4"
              color="blue"
              icon="money"
              value={`R$ ${credit - debt}`}
              text="Valor Consolidado"
            />
          </Row>
        </fieldset>
      </Grid>
    );
  }
}

export default Summary;
