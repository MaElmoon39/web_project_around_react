export default function NewCard() {
    return  (
        <div className='popup popup_add-image'>
            <form
                className='popup__form form'
                name='card-form'
                id='new-card-form'
                noValidate
            >
                <label className='popup__field'>
                    <input
                        className='popup__input popup__input_type_card-name'
                        id='card-name'
                        maxLength='30'
                        minLength='1'
                        name='card-name'
                        placeholder='Título'
                        required
                        type='text'
                    />
                    <span className='popup__error' id='card-name-error'></span>
                </label>

                <label className="popup__field">
                    <input
                        className='popup__input popup__input_type_url'
                        id='card-link'
                        name='link'
                        placeholder='Enlace a la imagen'
                        required
                        type='url'
                    />
                    <span className='popup-error' id='card-link-error'></span>
                </label>

                <button className='form__edit-subm-btn' type='submit'>Guardar</button>
            </form>
        </div>
    );
}