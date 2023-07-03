import * as Action from "../actions/userActions";

const initialState={isLoading: false, userList: [] , isError:false}

export default function userReducer(
  state=initialState,
  action,
) {
  // console.log(action);

  switch (action.type) {
    case Action.GET_USER_LIST_START:
      return { ...state, isLoading: true };

    case Action.GET_USER_LIST_SUCCESS:
      // console.log('reducer');
      return {
        ...state,
        userList: [...state.userList, ...action.payload],
        isLoading: false,
      };

    case Action.GET_USER_LIST_FAILURE:
      return { ...state, isLoading: false, isError:true };

    default:
      return state;
  }
}
