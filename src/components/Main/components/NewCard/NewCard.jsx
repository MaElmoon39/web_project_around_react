import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function NewCard() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, onAddPlaceSubmit } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [link, setLink] = useState(currentUser.link);

  const handleNewName = (e) => {
    setName(e.target.value);
  };

  const handleNewLink = (e) => {
  setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  };

  return (
    <>
      <form
        className="popup__form form"
        name="popup__card-form"
        id="popup__new-card"
        noValidate
        onSubmit={handleSubmit}
      >
      
        <input
          className="form__edit-field form__edit-field_image_name"
          id="title-input"
          maxLength="30"
          minLength="2"
          name="title-input"
          placeholder="Título"
          required
          type="text"
          onChange={handleNewName}
        />
        <span className="form__input-error title-input-error"></span>

        <input
          className="form__edit-field form__edit-field_image_link"
          id="link-img-input"
          name="link-img-input"
          placeholder="Enlace a la imagen"
          required
          type="url"
          value={link}
          onChange={handleNewLink}
        />
        <span className="form__input-error link-img-input-error"></span>

        <button className="form__edit-subm-btn" type="submit">
          Guardar
        </button>
      </form>
    </>
  );
}
