import { GetAllUser, GetOneUser } from "../constants/user";

let BaseUrl = "http://localhost:3000";

export function FetchUser() {
  return (dispatch) => {
    fetch(`${BaseUrl}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("authorization"),
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GetAllUser,
          payload: data,
        })
      )
      .catch((err) => console.log(err));
  };
}

export function FetchUserById(id) {
  return (dispatch) => {
    fetch(`${BaseUrl}/user/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GetOneUser,
          payload: data,
        })
      );
  };
}
