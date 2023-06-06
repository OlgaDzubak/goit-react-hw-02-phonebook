import { Component } from 'react';
import css from './contact.module.css';


export class Contact extends Component {

    render(){
        const tel = "tel:" + this.props.number;
        return (
            <li className={css.contact}> 
                <div className={css.contact_div}>
                    <p className={css.contact_p_name}>{this.props.name}</p>
                    <p className={css.contact_p}>:</p>
                    <a className={css.contact_a_number} href={tel}>{this.props.number}</a>
                    <button className={css.delete_btn} name={this.props.id} onClick={this.props.onClickDelBtn}>x</button>
                </div>
            </li>
        )
        
    }
}