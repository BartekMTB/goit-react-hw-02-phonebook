import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { key: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { key: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { key: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { key: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };
  filterItems = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.setState({
      contacts: [
        ...this.state.contacts,
        { key: nanoid(), name: name, number: number },
      ],
    });
    form.reset();
  };

  render() {
    return (
      <div className={css.main_div}>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Phone</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contacts</button>
        </form>
        <h2>Contacts</h2>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // value={filter}
          onChange={this.handleChange}
        />
        <ul>
          {this.filterItems().map(el => (
            <li key={el.key}>
              {el.name} {el.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
