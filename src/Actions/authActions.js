import { toastr } from "react-redux-toastr";
import axios from "axios";

import { USER_FETCHED, TOKEN_VALIDATED, OAPI_URL } from "../Config/constants";

const userKey = "user";

export function login(values) {
  return submit(values, `${OAPI_URL}/login`);
}

export function signup(values) {
  return submit(values, `${OAPI_URL}/signup`);
}

function submit(values, url) {
  return dispatch => {
    axios
      .post(url, values)
      .then(resp => {
        localStorage.setItem(userKey, JSON.stringify(resp.data));
        dispatch([{ type: USER_FETCHED, payload: resp.data }]);
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Erro", error));
      });
  };
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios
        .post(`${OAPI_URL}/validateToken`, { token })
        .then(resp => {
          if (!resp.data.valid) localStorage.removeItem(userKey);
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid });
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }));
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false });
    }
  };
}
