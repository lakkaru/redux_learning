export const CREATE_TODO="CREATE_TODO";
export const DELETE_TODO="DELETE_TODO";

export function createTodo(id, task, dateTime, desc) {
    return {
      type: CREATE_TODO,
      payload: {
        id,
        task,
        dateTime,
        desc,
        status: "notStarted",
      },
    };
  }

  export function deleteTodo(id){
    // console.log(id);
    return{
        type:DELETE_TODO,
        payload:id,
    }
  }