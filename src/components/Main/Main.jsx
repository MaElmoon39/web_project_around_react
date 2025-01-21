import logo from '../../images/profilePhoto.png';
import editIcon from '../../images/pencilEditButton.svg';
import { useState } from 'react';
import Popup from './components/Popup/Popup';
import NewCard from './components/NewCard/NewCard';
import EditProfile from './components/EditProfile/EditProfile';
import EditAvatar from './components/Avatar/EditAvatar';
import Card from './components/Card/Card';
import { initialCards } from '../utils/constants';
  
export default function Main() {
    const [popup, setPopup] = useState(null);
    const newCardPopup = {title: 'Nuevo lugar', children: <NewCard />};
    const editProfile = {title: 'Editar perfil', children: <EditProfile />};
    const editAvatar = {title: 'Cambiar foto de perfil', children: <EditAvatar />};


    function handleOpenPopup(popup) {
        setPopup(popup);
    }

    function handleClosePopup() {
        setPopup(null);
    }

    return (
        <main className='content'>
            <section className='profile'>
                <div className='profile__avatar'>
                    <img alt='Profile photo' className='profile__photo' src={logo}/>
                    <button
                        className='profile__edit-avatar'
                        alt='Pencil edit avatar'
                        onClick={() => handleOpenPopup(editAvatar)}
                    ></button>
                </div>

                <div className='profile__info'>
                    <div className='profile__info-text'>
                        <h2 className='profile__info-name'>Jacques Cousteau</h2>
                        <p className='profile__info-about'>Explorador</p>
                    </div>

                    <button className='profile__info-edit'>
                        <img
                            className='profile__info-edit-pencil'
                            src={editIcon}
                            alt='Pencil Edit Button'
                            onClick={() => handleOpenPopup(editProfile)}
                        />
                    </button>
                </div>
                <button 
                    className='profile__add-img'
                    type='button'
                    onClick={() => handleOpenPopup(newCardPopup)}
                ></button>
            </section>

            <section className='elements'>
                {initialCards.map((card) => (
                    <Card key={card._id} card={card} />
                ))}
            </section>

            {/* renderizar Popup */}
            {popup && (
                <Popup
                    title={popup.title}
                    onClose={handleClosePopup}
                >
                    {popup.children}
                </Popup>
            )}
        </main>
    );
}