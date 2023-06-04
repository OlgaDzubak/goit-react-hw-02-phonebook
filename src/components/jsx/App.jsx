import { Component } from 'react';
import {ContactForm} from './contact_form';
import {ContactList} from './contact_list';
import {Filter} from './filter';
import { Notify } from 'notiflix';
 import '../css/App.css';

export class App extends Component {
   
  state = {
    contacts: [ 
              {id: 'id-1', name: 'Rosie Simpson', number: '066-459-12-56'},
              {id: 'id-2', name: 'Hermione Kline', number: '097-443-89-12'},
              {id: 'id-3', name: 'Eden Clements', number: '097-351-17-79'},
              {id: 'id-4', name: 'Annie Copeland', number: '067-227-91-26'},
              {id: 'id-5', name: 'Hanna Backer', number: '067-349-32-40'},
              {id: 'id-6', name: 'Olga Dzubak', number: '067-523-51-43'},
              {id: 'id-7', name: 'Victoria Sobko', number: '067-645-17-79'},
              {id: 'id-8', name: 'Dmitriy Taranenko', number: '095-458-11-22'},
              {id: 'id-9', name: 'Bella Amatova', number: '067-622-22-66'},
              {id: 'id-10', name: 'Nalallya Latash', number: '097-788-88-16'},
            ],
    filter: '',
  }

  onFilterInputChange = (evt) => this.setState({filter: evt.target.value});

  onClickToAddBtn = (form_data) => {
        const addedName = form_data.name;
        const addedNumber = form_data.number;
        const addedId = "id-" + (this.state.contacts.length+1).toString();
        
        if (this.state.contacts.some(contact => contact.name === addedName)) {
          Notify.failure(`${addedName} is already in contacts.`);
        }else { 
          this.setState(prevState => {return {contacts: [...prevState.contacts, {id:addedId, name:addedName, number:addedNumber}]}});
          Notify.success(`${addedName} was added to the contact list.`);
        }
  };

  onClickDelBtn = (evt) => { 
    this.setState(prevState => { return {contacts: prevState.contacts.filter(contact => contact.id !== evt.target.name)}});
  };

  filterContacts = () => {return this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(this.state.filter.toLowerCase().trim()))};

  render(){ 
    return (
      <section className='section'>
        <div className='app_div'>

          <h1>Phonebook</h1>
          <ContactForm onClickToAddBtn={this.onClickToAddBtn} />

          <h2>Contacts</h2>
          <Filter onInputChange={this.onFilterInputChange} />
          <ContactList contacts={this.filterContacts()} onClickDelBtn={this.onClickDelBtn} />

        </div>
      </section>
    )
  }
};
