import { createAction } from "@reduxjs/toolkit";


const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const removeContactRequest = createAction("contact/removeRequest");
const removeContactSuccess = createAction("contact/removeSuccess");
const removeContactError = createAction("contact/removeError");

const fetchContactRequest = createAction("contact/fetchRequest");
const fetchContactSuccess = createAction("contact/fetchSuccess");
const fetchContactError = createAction("contact/fetchError");


const filter = createAction("contact/filter");


export default {

  filter,


  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  
};
