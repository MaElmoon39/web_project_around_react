
import { useRef } from "react";

export default function EditAvatar(props) {
    const avatarRefs = useRef();
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRefs,
        });
    }

    return (
        <>
            <form
                className='popup__form form'
                name='popup__edit-avatar'
                id='popup__edit-avatar'
                noValidate
                onSubmit={handleSubmit}
            >
                <input
                    className='form__edit-field form__edit-field_image_link'
                    id='avatar'
                    name='avatar'
                    placeholder='https://somewebsite.com/someimage.jpg'
                    required
                    type='url'
                    ref={avatarRefs}
                />
                <span className='form__input-error link-img-input-error'></span>
                <button className='form__edit-subm-btn' type='submit'>Guardar</button>
            </form>
        </>
    );
}