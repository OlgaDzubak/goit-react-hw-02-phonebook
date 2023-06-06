import { Component } from 'react';
import css from './contact_form.module.css';

const INITIAL_STATE = {
    name: '',
    number: '',
}

export class ContactForm extends Component {
    
    state = {...INITIAL_STATE}
    
    onFormInputChange = (evt) => this.setState({[evt.target.name]: evt.target.value});

    reset = () => this.setState({...INITIAL_STATE});

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onClickToAddBtn(this.state);
        this.reset();
    }
        
    render(){
        return <form className={css.contact_form} onSubmit={this.onFormSubmit}>
                    <label className={css.label_name}>Name
                        <input className={css.input_name}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            maxLength="25"
                            required
                            onChange={this.onFormInputChange}
                            value={this.state.name}
                            placeholder='Name Surname'
                            
                        />
                    </label>

                    <label className={css.label_number}>Number
                        <input className={css.input_number}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.onFormInputChange}
                            value={this.state.number}
                            placeholder='000-000-00-00'
                        />
                    </label>
                    
                    <button type="submit" className={css.submit_btn}>Add contact</button>
               </form>
    }
}