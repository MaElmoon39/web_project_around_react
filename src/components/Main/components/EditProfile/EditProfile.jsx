import closeIcon from '../../../../images/CloseIcon.svg'

export default function EditProfile() {
    return (
        <div className='popup popup_profile'>
            <form
                className='popup__form form'
                name='popup__edit-profile'
                id='popup__edit-profile'
                noValidate
            >
                <img
                    src={closeIcon}
                    alt='Close popup icon'
                    className='popup__close-button'
                />
                <input
                    className='form__edit-field form__edit-field_profile_name'
                    id='name-input'
                    maxLength='40'
                    minLength='2'
                    name='name-input'
                    value='Jacques Cousteau'
                    placeholder='Nombre'
                    required
                    type='text'
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
                    value='Explorer'
                />
                <span className='form__input-error about-input-error'></span>
                <button className='form__edit-subm-btn' type='submit'>Guardar</button>
            </form>
        </div>
    );
}