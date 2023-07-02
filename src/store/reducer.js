export function reducer(state=[], action) {
    // console.log(action.payload);
    
  switch (action.type) {
    case "create_todo":
      return [...state, action.payload]; //updated state
    case "update_todo":
      return; //updated state
    case "remove_todo":
      return; //updated state
    case "change-status-todo":
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
