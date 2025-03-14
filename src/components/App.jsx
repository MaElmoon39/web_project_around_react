import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { api } from '../utils/api';

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [popup, setPopup] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

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

  const handleUpdateUser = (data) => {
    (async () => {
      await api.editUser(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.updateAvatar(data.avatar).then((newAvatar) => {
        setCurrentUser(newAvatar);
        handleClosePopup();
      });
    })();
  };

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    if(!isLiked){
      await api.likeCards(card._id).then((newCard) => {
        setCards((state) => state.map(
          (currentCard) => currentCard._id === card._id ? newCard : currentCard));
      });
    }else{
      await api.deleteLikeCards(card._id).then((newCard) => {
        setCards((state) => state.map(
          (currentCard) => currentCard._id === card._id ? newCard : currentCard));
      });
    }
    
  }

  async function handleCardDelete(card) {
    api.deleteCards(card._id).then(() => {
      setCards(cards.filter(c => c._id !== card._id));
    })
  }

  const handleAddPlaceSubmit = async (data) => {  
      await api.createCard(data).then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      });    
  };
  
  return (
    <>
      <div className='page'>
        <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar, onAddPlaceSubmit:handleAddPlaceSubmit }}>
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  )
}

export default App
