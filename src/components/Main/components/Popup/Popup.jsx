import closeIcon from "../../../../images/CloseIcon.svg";

export default function Popup(props) {
  const { title, children, onClose } = props;

  return (
    <div className="popup popup_opened">
         <img
          src={closeIcon}
          alt="Close popup icon"
          className="popup__close-button"
          onClick={onClose}
        />
      <div
        className={`${
          !title ? "popup__img-container" : "popup__with-form"
        }`}
      >       
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
