import Swal from "sweetalert2";
import {
  GetAllSaving,
  GetOneSaving,
  GetSavingCategories,
} from "../constants/saving";

let BaseUrl = "http://localhost:3000";

export function fetchSavingCategories() {
  return (dispatch) => {
    fetch(`${BaseUrl}/savingCategory`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GetSavingCategories,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function fetchSaving() {
  return (dispatch) => {
    fetch(`${BaseUrl}/saving`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GetAllSaving,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function createSaving(data) {
  return (dispatch) => {
    fetch(`${BaseUrl}/saving`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("authorization"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSaving());
      })
      .catch((err) => console.log(err));
  };
}
