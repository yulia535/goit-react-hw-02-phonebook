import React from 'react';
import styles from '../Filter/filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, handleChenge }) => (
  <label>
    Find contacts by name
    <input
      className={styles.inputFilter}
      type="text"
      // name="name"
      value={filter}
      onChange={handleChenge}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
    />
  </label>
);
Filter.propTypes = {
  filter: PropTypes.string,
    handleChenge: PropTypes.func,
};
export default Filter;
