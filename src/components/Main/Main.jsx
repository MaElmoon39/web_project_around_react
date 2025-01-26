import editIcon from "../../images/pencilEditButton.svg";
import { useEffect, useState, useContext } from "react";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/NewCard/NewCard";
import EditProfile from "./components/EditProfile/EditProfile";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import EditAvatar from "./components/Avatar/EditAvatar";
import Card from "./components/Card/Card";
import { api } from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfile = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatar = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  
  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  },[]);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api.likeCards(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map(
          (currentCard) => currentCard._id === card._id ? newCard : currentCard));
      }).catch((error) => console.error(error));
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img alt="Profile photo" className="profile__photo" src={currentUser.avatar} />
          <button
            className="profile__edit-avatar"
            alt="Pencil edit avatar"
            onClick={() => handleOpenPopup(editAvatar)}
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
              onClick={() => handleOpenPopup(editProfile)}
            />
          </button>
        </div>
        <button
          className="profile__add-img"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card 
            key={card._id}
            card={card}
            handleOpenPopup={handleCardClick}
            onCardLike={handleCardLike}
          />
        ))}
      </section>

      {/* renderizar Popup */}
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
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
