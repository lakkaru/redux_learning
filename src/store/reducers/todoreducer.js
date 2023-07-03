import * as Action from "../actions/todoActions";

const initialState=[];

export default function todoReducer(state = initialState, action) {
  // console.log(action.payload);

  switch (action.type) {
    case Action.CREATE_TODO:
      return [...state, action.payload]; 
    case "UPDATE_TODO":
      return; 
    case Action.DELETE_TODO:
      return state.filter((item) => item.id != action.payload);
    case "CHANGE_STATUS_TODO":
      return; 

    default:
      return state;
  }
  
}
