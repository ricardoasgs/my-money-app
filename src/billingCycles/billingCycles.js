import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from "../template/contentHeader";
import Content from "../template/content";
import Tabs from "../template/tabs";
import TabsHeader from "../template/tabsHeader";
import TabsContent from "../template/tabsContent";
import TabHeader from "../template/tabHeader";
import TabContent from "../template/tabContent";
import { selectTab, showTabs } from "../Actions/tabActions";
import BillingCyclesList from "../billingCyclesList/billingCyclesList";
import BillingCycleForm from "../billingCycleForm/billingCycleForm";
import { create, update } from "../Actions/billingCyclesActions";

class BillingCycles extends Component {
  componentWillMount() {
    this.props.selectTab("tabList");
    this.props.showTabs("tabList", "tabCreate");
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTab, showTabs, create, update }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BillingCycles);
