import { useState } from "react";
import PropTypes from "prop-types";

// import useForm from "shared/hooks/useForm";
import Button from "shared/components/Button/Button";
import initialState from "./initialState";

import css from "./myPhoneForm.module.css";


const MyPhoneForm = ({ onSubmit }) => {
    // const [state, handleChange, handleSubmit] = useForm({initialState, onSubmit });
    const [state, setState] = useState({ ...initialState });

const handleChange = ({target}) => {
    const { name, value } = target;
    setState(prevState => {
        return { ...prevState, [name]: value };
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    
    const resultSubmit = onSubmit(({...state}));
        if(resultSubmit) {
            setState({ ...initialState });
        }
}

const { name, number } = state;
    
return (
         <form action="" onSubmit={handleSubmit}>
            <div className={css.formInput}>
                <label className={css.labelText}>Name:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </div>
            <div className={css.formInput}>
                <label className={css.labelText}>Number:</label>
                <input
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </div>
            <Button type="submit">Add contact</Button>
        </form>
        )
}

export default MyPhoneForm;

MyPhoneForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}