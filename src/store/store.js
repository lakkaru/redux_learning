import { legacy_createStore } from "redux";
import todoreducer from './reducers/todoreducer'

const store=legacy_createStore(todoreducer);

export default store;