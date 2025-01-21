import closeIcon from '../../../../images/CloseIcon.svg'

export default function EditAvatar() {
    return (
        <div className='popup popup__updt-avatar-img'>
            <form
                className='popup__form form'
                name='popup__edit-avatar'
                id='popup__edit-avatar'
                noValidate
            >
                <img
                    src={closeIcon}
                    alt='Close popup icon'
                    className='popup__close-button'
                />
                <input
                    className='form__edit-field form__edit-field_image_link'
                    id='avatar'
                    name='avatar'
                    placeholder='https://somewebsite.com/someimage.jpg'
                    required
                    type='url'
                />
                <span className='form__input-error link-img-input-error'></span>
                <button className='form__edit-subm-btn' type='submit'>Guardar</button>
            </form>
        </div>
    );
}