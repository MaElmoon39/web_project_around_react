
import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar(props) {
    const userContext = useContext(CurrentUserContext);
    const { currentUser } = userContext;
    const avatarRefs = useRef(currentUser.avatar);
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRefs,
        });
    }

    console.log(currentUser);

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