import { useState } from "react";
import { nanoid } from 'nanoid';

import MyPhoneForm from "./MyPhoneForm/MyPhoneForm";
import ContactsList from "./ContactsList/ContactsList";
import MyPhoneFilter from "./MyPhoneFilter/MyPhoneFilter";

import Message from "shared/components/Message/Message";
// import contacts from "./contacts";

import css from "./myPhone.module.css";

const MyPhone = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");

const isDublicate = (name, number)=> {
    const normName = name.toLowerCase();
    const normNumber = number.toLowerCase();
    const person = contacts.find(({ name, number }) => {
        return (name.toLowerCase() === normName || number.toLowerCase() === normNumber)
    })
    return Boolean(person)
    }  

const addContact = ({name, number}) => {
        if (isDublicate(name, number)) {
            alert(`${name} is already ixist`);
            return false;
        }
        setItems(prevContacts => {
            const newContact = {
                id: nanoid(),
                name,
                number,
            }
            return [newContact, ...contacts];
        })
        return true;
    }

    const removeContact = (id) => { setItems((prevContacts) => prevContacts.filter(contact => contact.id !== id)) };

    const handleFilter = ({ target }) => setFilter(target.value);

const filterContacts=() => {
    if (!filter) {
        return items;
    }
    const normFilter = filter.toLowerCase();
    const result = items.filter(({ name, number }) => {
        return (name.toLowerCase().includes(normFilter) || number.toLowerCase().includes(normFilter))
    })
    return result;
    }     

// const componentDidMount=() =>{
//     const contacts = JSON.parse(localStorage.getItem("my-phonebook"));
//     if (contacts?.length) //contacts && contacts.length
//     {
//         setItems({ contacts });
//     }
// }

// const componentDidUpdate=(prevProps, prevState) =>{
//     const { contacts } = this.state;
//     if (prevState.contacts.length !== contacts.length) {
//         localStorage.setItems("my-phonebook", JSON.stringify(contacts));
//     }
// }    

    const contacts = filterContacts();
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

export default MyPhone; 