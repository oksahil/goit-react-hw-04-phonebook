import PropTypes from "prop-types";

import css from "./myPhoneFilter.module.css"

const MyPhoneFilter = ({ handleChange, filter }) => {
    return (
        <div className={css.formInput}>
            <label className={css.labelText}>Find contacts by name</label>
            <input
                onChange={handleChange}
                type="text"
                name="filter"
                value={filter}
            />
        </div>
    )
}

export default MyPhoneFilter;

MyPhoneFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}