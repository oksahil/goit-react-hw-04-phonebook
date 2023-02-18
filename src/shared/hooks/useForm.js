import { useState } from "react";


const useForm = ({onSubmit, initialState}) => {
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
    return {state, setState, handleChange, handleSubmit}
}

export default useForm;