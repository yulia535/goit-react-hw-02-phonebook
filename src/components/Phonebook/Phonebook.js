import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = data => {
    const normalizedData = data.name.toLowerCase();
    const iterateName = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(normalizedData),
    );
    if (iterateName === undefined) {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
    } else {
      return alert(`${iterateName.name} is already in contacts`);
    }
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChenge={this.chengeFilter} />
        <ContactList
          contacts={filteredList}
          onDeteteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
