import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import MyPhoneForm from "./MyPhoneForm/MyPhoneForm";
import ContactsList from "./ContactsList/ContactsList";
import MyPhoneFilter from "./MyPhoneFilter/MyPhoneFilter";

import Message from "shared/components/Message/Message";

import css from "./myPhone.module.css";

const MyPhone = () => {
    const [phones, setPhones] = useState(() => {
        const phones = JSON.parse(localStorage.getItem("my-phonebook"));
        return phones ? phones : [];
    });
    const [filter, setFilter] = useState("");

    useEffect(() => {
        localStorage.setItem("my-phonebook", JSON.stringify(phones));
    }, [phones]);   

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
        setPhones(prevPhones => {
            const newPhones = {
                id: nanoid(),
                name,
                number,
            }
            return [newPhones, ...phones];
        })
        return true;
    }

    const removeContact = (id) => { setPhones((prevPhones) => prevPhones.filter(phone => phone.id !== id)) };

    const handleFilter = ({ target }) => setFilter(target.value);

const filterContacts=() => {
    if (!filter) {
        return phones;
    }
    const normFilter = filter.toLowerCase();
    const result = phones.filter(({ name, number }) => {
        return (name.toLowerCase().includes(normFilter) || number.toLowerCase().includes(normFilter))
    })
    return result;
    }     

   

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