// import { createStore, combineReducers } from "redux";
import contactReducers from "../redux/contactReducers/contactReducers";
import { configureStore } from '@reduxjs/toolkit';


// const store = createStore(
//   combineReducers({
//     contacts: contactReducers,
//   }),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: {
    contacts: contactReducers,
  }
})


export default store;
