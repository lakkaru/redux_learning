export function createAction(id, task, dateTime, desc) {
    return {
      type: "CREATE_TODO",
      payload: {
        id,
        task,
        dateTime,
        desc,
        status: "notStarted",
      },
    };
  }