import { GET_USER_LIST } from "../actions/userActions";

export default function userReducer(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case GET_USER_LIST:
      // console.log('reducer');
      
      return [...state, ...action.payload];
    default:
      return state;
  }
}
