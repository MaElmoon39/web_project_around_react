export default function NewCard() {
  return (
    <>
      <form
        className="popup__form form"
        name="popup__card-form"
        id="popup__new-card"
        noValidate
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
        />
        <span className="form__input-error title-input-error"></span>

        <input
          className="form__edit-field form__edit-field_image_link"
          id="link-img-input"
          name="link-img-input"
          placeholder="Enlace a la imagen"
          required
          type="url"
        />
        <span className="form__input-error link-img-input-error"></span>

        <button className="form__edit-subm-btn" type="submit">
          Guardar
        </button>
      </form>
    </>
  );
}
