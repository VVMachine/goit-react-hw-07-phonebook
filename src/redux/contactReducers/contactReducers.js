import { combineReducers } from "redux";




import { createReducer } from "@reduxjs/toolkit";
import contactActions from "../contactActions/contactActions";

const addContact = (state, action) => {

  return [action.payload, ...state];
};

const fetchContacts = (state, action) => action.payload;

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};




const itemReducer = createReducer([], {
  [contactActions.addContactSuccess]: addContact,
  [contactActions.removeContactSuccess]: removeContact,
  [contactActions.fetchContactSuccess]: fetchContacts,
});

const filterContacts = (state, action) => action.payload;

const filterReducer = createReducer("", {
  [contactActions.filter]: filterContacts,
});



export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});