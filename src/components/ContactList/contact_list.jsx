import { Component } from 'react';
import {Contact} from '../Contact/contact'
import {nanoid} from 'nanoid';
import css from './contact_list.module.css';

export class ContactList extends Component {
   
    render(){
        const {contacts} = this.props;
        return  <div className={css.contact_list_div}>
                    <ul className={css.contact_list}> 
                        {contacts.map(contact => <Contact 
                                                    name={contact.name} 
                                                    number={contact.number} 
                                                    id={contact.id} 
                                                    onClickDelBtn={this.props.onClickDelBtn} 
                                                    key={nanoid()}
                                                />
                        )} 
                    </ul>
                </div>
    }
}