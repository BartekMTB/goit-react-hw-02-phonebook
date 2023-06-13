import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className={css.main_div}>
        <h2>Phonebook</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button>Add contacts</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li>ddsda aasd</li>
          <li>asdasd sadasd</li>
        </ul>
        <h3>{nanoid()}</h3>
      </div>
    );
  }
}
