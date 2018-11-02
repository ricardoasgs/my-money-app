import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "./tabActions";
import { BILLING_CYCLES_FETCHED, API_URL } from "../Config/constants";

const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getBillingCycles() {
  const request = axios.get(`${API_URL}/billingCycles`);
  return dispatch =>
    dispatch([{ type: BILLING_CYCLES_FETCHED, payload: request }]);
}

export function create(values) {
  return submit(values, "post");
}

export function update(values) {
  return submit(values, "put");
}

export function remove(values) {
  return submit(values, "delete");
}

export function detail(billingCycle) {
  return dispatch =>
    dispatch([
      showTabs("tabDetails"),
      selectTab("tabDetails"),
      initialize("billingCycleForm", billingCycle)
    ]);
}

function submit(values, method) {
  return dispatch => {
    const id = values._id || "";
    axios[method](`${API_URL}/billingCycles/${id}`, values)
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
      initialize("billingCycleForm", INITIAL_VALUES)
    ]);
}
