import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

const Menu = props => (
  <ul className="sidebar-menu">
    <MenuItem path="#" label="Dashborad" icon="dashboard" />
    <MenuTree label="Cadastro" icon="edit">
      <MenuItem
        path="#billingCycles"
        label="  Ciclos de Pagamentos"
        icon="usd"
      />
    </MenuTree>
  </ul>
);

export default Menu;
