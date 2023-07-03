import axios from "axios";

export const GET_USER_LIST = "GET_USER_LIST";

export function getUserList() {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      dispatch({
        type: GET_USER_LIST,
        payload: [response.data],
      });
    });
  };
}
