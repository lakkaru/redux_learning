import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch({
//   type: "create_todo",
//   payload: {
//     id: "01",
//     task: "Learn React",
//     dateTime: "2023-Jul-01 20:30",
//     desc: "Learn the concepts of react",
//     status: "notStarted",
//   },
// });

store.dispatch(createAction('01', "Learn React", "2023-Jul-01 20:30","Learn the concepts of react"));
// store.dispatch({
//   type: "create_todo",
//   payload: {
//     id: "02",
//     task: "Learn ReactJs",
//     dateTime: "2023-Jul-01 20:30",
//     desc: "Learn the concepts of react",
//     status: "notStarted",
//   },
// });
store.dispatch(createAction('02', "Learn ReactJs", "2023-Jul-01 20:30","Learn the concepts of react"));

// console.log(store.getState());
function createAction(id, task, dateTime, desc) {
  return {
    type: "create_todo",
    payload: {
      id,
      task,
      dateTime,
      desc,
      status: "notStarted",
    },
  };
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
