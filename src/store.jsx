import { createStore } from "redux";
import rootReducer from './services/reducer/index'
const store = createStore(rootReducer);

export default store;