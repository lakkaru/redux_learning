import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo } from "./store/actions/todoActions";
import { getUserList } from "./store/actions/userActions";


function App() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.todoReducer);
  const userState = useSelector((store) => store.userReducer);

  console.log(userState);

  const handleClick = () => {
    dispatch(
      createTodo(
        `${state.length + 1}`,
        `${state.length + 1} Learn React Native`,
        "2023-Jul-01 20:30",
        "Learn the concepts of react"
      )
    );
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUser=()=>{
    // console.log('test');
    
    dispatch(getUserList())
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={handleClick}
          style={{ marginTop: "10px", padding: "5px" }}
        >
          Add ToDo
        </button>
        <button
          onClick={handleUser}
          style={{ marginTop: "10px", padding: "5px" }}
        >
          Add user
        </button>
        {state?.map((val, key) => {
          return (
            <button
              key={key}
              style={{ marginTop: "5px" }}
              onClick={() => handleDelete(val.id)}
            >
              {val.task}
            </button>
          );
        })}
      </header>
    </div>
  );
}

export default App;
