import { CREATE_TODO, DELETE_TODO } from "../actions/todoactions";

export default function todoreducer(state = [], action) {
  // console.log(action.payload);

  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload]; //updated state
    case "UPDATE_TODO":
      return; //updated state
    case DELETE_TODO:
      return state.filter((item) => item.id != action.payload);
    // return console.log( state.filter(item=>item.id != action.payload));
    case "CHANGE_STATUS_TODO":
      return; //updated state

    default:
      return state;
  }
  /*
    if(action is create_todo){
    todos.push(action.payload)
}elseif(action is update_todo){
    find and update todo
}elseif(action is remove_todo){
    find and remove todo
}elseif(action is change-status-todo){
    find and update status
}*/
}
