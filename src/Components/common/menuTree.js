import React from "react";

const MenuTree = props => (
  <li className="treeview">
    <a href="javascript:;">
      <i className={`fa fa-${props.icon}`} /> <span>{props.label}</span>
      <i className="fa fa-angle-left pull-right" />
    </a>
    <ul className="treeview-menu">{props.children}</ul>
  </li>
);

export default MenuTree;
