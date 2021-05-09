import React from 'react';
import styles from '../ContactList/contactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeteteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.contactListItem} key={id}>
        <span>
          {name}:{number}
        </span>

        <button
          className={styles.deleteButton}
          onClick={() => onDeteteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeteteContact: PropTypes.func,
};

export default ContactList;
