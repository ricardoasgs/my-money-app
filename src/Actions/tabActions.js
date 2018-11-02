import { TAB_SELECTED, TAB_SHOWED } from "../Config/constants";

export function selectTab(tabId) {
  return { type: TAB_SELECTED, payload: tabId };
}

export function showTabs(...tabIds) {
  const tabsToShow = {};
  tabIds.map(e => (tabsToShow[e] = true));
  return dispatch => dispatch({ type: TAB_SHOWED, payload: tabsToShow });
}
