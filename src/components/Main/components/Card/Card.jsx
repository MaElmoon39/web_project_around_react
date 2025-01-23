export default function Card(props) {
    const {name, link, isLiked} = props.card;
    const {handleOpenPopup} = props;
    
    return (
        <div id='elements__card-template'>
            <div className='elements__picture'>
                <img
                    className='elements__picture-size'
                    src={link}
                    alt='image template'
                    onClick={() => handleOpenPopup(props.card)}
                />
                <button
                    className='elements__picture-trash-btn'
                    type='button'
                ></button>
                <div className='elements__picture-name-section'>
                    <h3 className='elements__picture-name'>{name}</h3>
                    <button
                        className='elements__like-btn'
                        type='button'
                    ></button>
                </div>
            </div>
        </div>
    );
}