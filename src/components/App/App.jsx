import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import Logo from "../Logo/Logo";
import Notification from "../Notification/Notification";

import LogoSlideTransition from "../../CSSTransitions/slideLogo.module.css";
import PopTransition from "../../CSSTransitions/pop.module.css";

import { connect } from "react-redux";

import contactActions from "../../redux/contactActions/contactActions";
import contactOperations from "../../redux/contactOperations/contactOperations";

class App extends Component {
  state = {
    didMount: false,
    contactExists: false,
  };

  componentDidMount() {
    this.setState({ didMount: true });

    this.props.getSavedContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleOpenNotification = () => {
    this.setState(
      (prevState) => ({
        contactExists: !prevState.contactExists,
      }),
      () =>
        setTimeout(() => {
          this.setState((prevState) => ({
            contactExists: !prevState.contactExists,
          }));
        }, 1000)
    );
  };

  filterHandler = (e) => {
    this.props.onChangeFilter(e.target.value);
  };

  render() {
    const { didMount, contactExists } = this.state;

    return (
      <>
        <div className="App">
          <CSSTransition
            in={didMount}
            timeout={500}
            classNames={LogoSlideTransition}
            appear
          >
            <Logo />
          </CSSTransition>

          <ContactForm onOpenNotification={this.handleOpenNotification} />

          <h2 className="contactsTitle">Contacts</h2>

          <Filter filterHandler={this.filterHandler} />
          <ContactList />
        </div>

        <CSSTransition
          in={contactExists}
          timeout={250}
          unmountOnExit
          classNames={PopTransition}
        >
          <Notification />
        </CSSTransition>
      </>
    );
  }
}

const mapDispatchToProps = {
  onChangeFilter: contactActions.filter,
  getSavedContacts: contactOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
