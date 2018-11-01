import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "./tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {};

export function getBillingCycles() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return dispatch =>
    dispatch([{ type: "BILLING_CYCLES_FETCHED", payload: request }]);
}

export function create(values) {
  return dispatch => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then(res => {
        toastr.success("Sucesso, Operação Realizada com Sucesso!");
        dispatch([init()]);
      })
      .catch(err => {
        err.response.data.errors.map(error => {
          toastr.error("Erro", error);
        });
      });
  };
}

export function showUpdate(billingCycle) {
  return dispatch =>
    dispatch([
      showTabs("tabUpdate"),
      selectTab("tabUpdate"),
      initialize("billingCycleForm", billingCycle)
    ]);
}

export function init() {
  return dispatch =>
    dispatch([
      showTabs("tabList", "tabCreate"),
      selectTab("tabList"),
      getBillingCycles(),
      initialize("billingCyclesForm", INITIAL_VALUES)
    ]);
}