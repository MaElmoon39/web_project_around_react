import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card(props) {
    const { currentUser } = useContext(CurrentUserContext);

    const {name, link, isLiked, _id} = props.card;
    const {handleOpenPopup, onCardDelete} = props;
    //const {handleOpenPopup} = props;
    const cardLikeButtonClassName = `elements__like-btn ${
        isLiked ? 'elements__like-click' : ''
      }`;

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
                    onClick={() => onCardDelete(props.card)}
                    type='button'
                ></button>
                <div className='elements__picture-name-section'>
                    <h3 className='elements__picture-name'>{name}</h3>
                    <button
                        className={cardLikeButtonClassName}
                        onClick={() => {props.onCardLike(props.card)}}
                        type='button'
                    ></button>
                </div>
            </div>
        </div>
    );
}