import editIcon from "../../images/pencilEditButton.svg";
import { useState, useContext } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard/NewCard";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup";
import EditAvatar from "./components/Popup/Avatar/EditAvatar";
import Card from "./components/Card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main(props) {
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfile = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatar = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img alt="Profile photo" className="profile__photo" src={currentUser.avatar} />
          <button
            className="profile__edit-avatar"
            alt="Pencil edit avatar"
            onClick={() => props.onOpenPopup(editAvatar)}
          ></button>
        </div>

        <div className="profile__info">
          <div className="profile__info-text">
            <h2 className="profile__info-name">{currentUser.name}</h2>
            <p className="profile__info-about">{currentUser.about}</p>
          </div>

          <button className="profile__info-edit">
            <img
              className="profile__info-edit-pencil"
              src={editIcon}
              alt="Pencil Edit Button"
              onClick={() => props.onOpenPopup(editProfile)}
            />
          </button>
        </div>
        <button
          className="profile__add-img"
          type="button"
          onClick={() => props.onOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card 
            key={card._id}
            card={card}
            handleOpenPopup={handleCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>

      {/* renderizar Popup */}
      {props.popup && (
        <Popup title={props.popup.title} onClose={props.onClosePopup}>
          {props.popup.children}
        </Popup>
      )}
      {isImagePopupOpen && (
        <Popup
          onClose={() => {
            setIsImagePopupOpen(false);
          }}
        >
          <ImagePopup selectedCard={selectedCard} />
        </Popup>
      )}
    </main>
  );
}
