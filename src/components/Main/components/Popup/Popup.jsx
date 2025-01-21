import closeIcon from '../../../../images/CloseIcon.svg';

export default function Popup(props) {
    const {title, children, onClose} = props;

    return (
        <div className='popup'>
            <div
                className={`popup popup_open-image ${
                    !title ? "popup__img-container" : ""
                  }`}
            ></div>
            <img
                src={closeIcon}
                alt='Close popup icon'
                className='popup__close-button'
                onClick={onClose}
            />
            {title && <h3 className='popup__title'>{title}</h3>}
            {children}
        </div>
    )
}