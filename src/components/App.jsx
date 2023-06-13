import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  /*  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }; */

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

    //console.log(this.state.contacts);
    form.reset();
  };

  render() {
    return (
      <div className={css.main_div}>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
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
        <ul>
          {this.state.contacts.map(el => (
            <li key={el.key}>
              {el.name} {el.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
