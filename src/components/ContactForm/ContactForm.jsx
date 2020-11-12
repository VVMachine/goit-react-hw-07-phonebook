import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import contactOperations from "../../redux/contactOperations/contactOperations";

import contactSelectors from "../../redux/contactSelectors/contactSelectors";

class ContactForm extends Component {
  static defaultProps = {
    onAddButton: () => {
      return;
    },
  };

  static propTypes = {
    onAddButton: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  clearInput = (e) => {
    e.target.value = "";
  };

  inputHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addButtonHandler = (e) => {
    const { name, number } = this.state;

    e.preventDefault();

    const isInContacts = this.props.contacts.some(
      (contact) => contact.name === name
    );

    if (isInContacts) {
      this.props.onOpenNotification();
      return;
    }

    this.props.onAddContact({ name, number });
  };

  render() {
    return (
      <form>
        <div className={styles.input}>
          <p>Name</p>
          <input
            type="text"
            placeholder="Input name"
            name="name"
            onChange={this.inputHandler}
            onClick={this.clearInput}
          />
          <p>Phone</p>
          <input
            type="tel"
            placeholder="Input number"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            onChange={this.inputHandler}
            onClick={this.clearInput}
          />
        </div>
        <button
          className="button"
          type="submit"
          onClick={this.addButtonHandler}
        >
          Add Contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: contactOperations.addContact,
};

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getFitredContactItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
