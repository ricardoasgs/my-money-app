import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from "../../Components/common/contentHeader";
import Content from "../../Components/common/content";
import Tabs from "../../Components/common/tabs";
import TabsHeader from "../../Components/common/tabsHeader";
import TabsContent from "../../Components/common/tabsContent";
import TabHeader from "../tabHeader/tabHeader";
import TabContent from "../tabContent/tabContent";
import BillingCyclesList from "../billingCyclesList/billingCyclesList";
import BillingCycleForm from "../billingCycleForm/billingCycleForm";
import { create, update, init } from "../../Actions/billingCyclesActions";

class BillingCycles extends Component {
  componentWillMount() {
    this.props.init(this.props.userId);
  }

  render() {
    return (
      <React.Fragment>
        <ContentHeader title="Ciclos de Pagamentos" small="cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader
                label="Detalhes"
                icon="info-circle"
                target="tabDetails"
              />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <BillingCyclesList />
              </TabContent>
              <TabContent id="tabCreate">
                <BillingCycleForm
                  onSubmit={this.props.create}
                  submitLabel="Criar"
                  cancelLabel="Cancelar"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCycleForm
                  onSubmit={this.props.update}
                  submitLabel="Alterar"
                  cancelLabel="Cancelar"
                />
              </TabContent>
              <TabContent id="tabDetails">
                <BillingCycleForm readOnly={true} cancelLabel="Voltar" />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user._id
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ create, update, init }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BillingCycles);
