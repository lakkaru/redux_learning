function reducer(store=[], action) {
  switch (action.type) {
    case "create_todo":
      return; //updated store
    case "update_todo":
      return; //updated store
    case "remove_todo":
      return; //updated store
    case "change-status-todo":
      return; //updated store

    default:
      return; // store
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
