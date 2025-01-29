import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
    const userContext = useContext(CurrentUserContext);
    const { currentUser, handleUpdateUser } = userContext;
    
    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateUser({ name, about: description });
    };


    return (
        <>
            <form
                className='popup__form form'
                name='popup__edit-profile'
                id='popup__edit-profile'
                noValidate
                onSubmit={handleSubmit}
            >
             
                <input
                    className='form__edit-field form__edit-field_profile_name'
                    id='name-input'
                    maxLength='40'
                    minLength='2'
                    name='name-input'
                    placeholder='Nombre'
                    required
                    type='text'
                    value={name}
                    onChange={handleNameChange}
                />
                <span className='form__input-error name-input-error'></span>
                <input
                    className='form__edit-field form__edit-field_about'
                    type='text'
                    id='about-input'
                    name='about-input'
                    placeholder='Acerca de mí'
                    required
                    minLength='2'
                    maxLength='200'
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <span className='form__input-error about-input-error'></span>
                <button className='form__edit-subm-btn' type='submit'>Guardar</button>
            </form>
        </>
    );
}