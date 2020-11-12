import axios from "axios";

import contactActions from "../contactActions/contactActions";

axios.defaults.baseURL = "http://localhost:9999";

const addContact = (contact) => (dispatch) => {
  dispatch(contactActions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then((resp) => dispatch(contactActions.addContactSuccess(resp.data)))
    .catch((error) => dispatch(contactActions.addContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactActions.removeContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactActions.fetchContactRequest());

  axios
    .get(`/contacts`)
    .then((resp) => dispatch(contactActions.fetchContactSuccess(resp.data)))
    .catch((error) => dispatch(contactActions.fetchContactError(error)));
};

export default {
  addContact,
  removeContact,
  fetchContacts,
};
