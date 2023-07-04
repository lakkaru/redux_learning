import { produce } from "immer";
import * as Action from "../actions/userActions";

const initialState = { isLoading: false, userList: [], isError: false };

export default function userReducer(state = initialState, action) {
  // console.log(action);

  switch (action.type) {
    case Action.GET_USER_LIST_START:
      // return { ...state, isLoading: true };
      return produce(state, (draft) => {
        draft.isLoading = true;
      });
    case Action.GET_USER_LIST_SUCCESS:
      // return {
      //   ...state,
      //   userList: [...state.userList, ...action.payload],
      //   isLoading: false,
      // };
      return produce(state, (draft) => {
        draft.userList.push(...action.payload);
        draft.isLoading = false;
      });

    case Action.GET_USER_LIST_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
}
