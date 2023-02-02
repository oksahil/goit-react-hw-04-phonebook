import PropTypes from "prop-types";

import Button from "shared/components/Button/Button";

import css from "./contactsList.module.css"

const ContactsList = ({contacts, removeContact}) => {
    const phone = contacts.map(({ id, name, number }) =>
        <li key={id} className={css.textItem}>
            {name}       {number}
            <Button onClick={() => removeContact(id)} type="button">delete</Button>
        </li>);
    return (
        <ul>
            {phone}
        </ul>        
    )
}

export default ContactsList;

ContactsList.defaultPrors = {
    contacts: []
}

ContactsList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number:  PropTypes.string.isRequired,
    }))
}