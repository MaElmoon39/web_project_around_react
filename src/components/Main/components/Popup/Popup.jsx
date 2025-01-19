import closeIcon from '../../../../images/CloseIcon.svg';

export default function Popup(props) {
    const {title, children, onClose} = props;

    return (
        <div className='popup'>
            <div className='popup__content'>
                <img
                    src={closeIcon}
                    alt='Close popup icon'
                    className='popup__close-button'
                    onClick={onClose}
                />
                <h3 className='popup__title'>{title}</h3>
                {children}
            </div>
        </div>
    )
}