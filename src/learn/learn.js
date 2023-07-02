// Todo list
const todos=[
    {
        id:'01',
        task: 'Learn React',
        dateTime: '2023-Jul-01 20:30',
        desc: 'Learn the concepts of react',
        status: 'notStarted',
    },
    {
        id:'02',
        task: 'Learn Redux',
        dateTime: '2023-Jul-01 20:30',
        desc: 'Learn the concepts of react',
        status: 'notStarted',
    }
];
//Define actions
/*
1. create

type: create_todo,
payLoad:{
        id:'01',
        task: 'Learn React',
        dateTime: '2023-Jul-01 20:30',
        desc: 'Learn the concepts of react',
        status: 'notStarted',
    }

2. edit/update

type: update_todo,
payLoad:{
        id:'01',
        <field>:<new value>
    }

3. remove

type: remove_todo,
payLoad:{
        id:'01',
    }

4. status change
type: change-status-todo,
payLoad:{
        id:'01',
        status: 'new status'
    }

## reducer design
if(action is create_todo){
    todos.push(action.payload)
}elseif(action is update_todo){
    find and update todo
}elseif(action is remove_todo){
    find and remove todo
}elseif(action is change-status-todo){
    find and update status
}
*/
