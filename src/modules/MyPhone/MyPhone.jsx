import { Component } from "react";
import { nanoid } from 'nanoid';

import MyPhoneForm from "./MyPhoneForm/MyPhoneForm";
import ContactsList from "./ContactsList/ContactsList";
import MyPhoneFilter from "./MyPhoneFilter/MyPhoneFilter";

import Message from "shared/components/Message/Message";

import css from "./myPhone.module.css";

class MyPhone extends Component {
    state = {
        contacts:[],
        filter: "",
    }

componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("my-phonebook"));
    if (contacts?.length) //contacts && contacts.length
    {
        this.setState({ contacts });
    }
}

componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
        localStorage.setItem("my-phonebook", JSON.stringify(contacts));
    }
}

addContact = ({name, number}) => {
        if (this.isDublicate(name, number)) {
            alert(`${name} is already ixist`);
            return false;
        }
    this.setState(prevState => {
        const { contacts } = prevState;

        const newContact = {
            id: nanoid(),
            name,
            number,
        }
        return {contacts: [newContact, ...contacts]}
    })
    return true;
}

removeContact = (id) => {
    this.setState(({contacts}) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        return {contacts: newContacts}
    })
}

handleFilter = ({target})=> {
        this.setState({filter: target.value})
}
    
isDublicate(name, number) {
    const normName = name.toLowerCase();
    const normNumber = number.toLowerCase();
    const { contacts } = this.state;
    const person = contacts.find(({ name, number }) => {
        return (name.toLowerCase() === normName || number.toLowerCase() === normNumber)
    })
    return Boolean(person)
}   

filterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
        return contacts;
    }
    const normFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
        return (name.toLowerCase().includes(normFilter) || number.toLowerCase().includes(normFilter))
    })
    return result;
}    
    
render() {
    const { addContact, removeContact, handleFilter } = this;
   
    const contacts = this.filterContacts();
    const isPerson = Boolean(contacts.length);
        return (
            <div>
                <h2 className={css.titlePage}>Contacts of worcers of caffe Expresso</h2>
                <div className={css.wrapper}>
                    <div className={css.block}>
                        <h3 className={css.title}>PhoneBook</h3>
                        <MyPhoneForm onSubmit={ addContact } />
                    </div>
                    <div className={css.block}>
                        <h3 className={css.title}>Contacts</h3>
                        <MyPhoneFilter handleChange={handleFilter} /> 
                        {isPerson && <ContactsList removeContact={removeContact} contacts={contacts}/>}
                        {!isPerson && <Message message="No person in contacts list" />}
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPhone; 