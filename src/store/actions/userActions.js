import axios from "axios";

export const GET_USER_LIST_START = "GET_USER_LIST_START";
export const GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS";
export const GET_USER_LIST_FAILURE = "GET_USER_LIST_FAILURE";

export function getUserList() {
  return dispatch => {
    dispatch({
      type: GET_USER_LIST_START,
    });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: GET_USER_LIST_SUCCESS,
          payload: response.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: GET_USER_LIST_FAILURE,
        });
      });
  };
}
