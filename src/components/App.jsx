import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { api } from '../utils/api';

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.editUser(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
    };
  
  return (
    <>
      <div className='page'>
        <CurrentUserContext.Provider value={{currentUser, handleUpdateUser }}>
          <Header />
          <Main />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  )
}

export default App
