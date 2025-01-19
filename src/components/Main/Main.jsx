import logo from '../../images/profilePhoto.png';

export default function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img alt="Profile photo" className="profile__photo" src={logo}/>
                    <button className="profile__edit-avatar"></button>
                </div>

                <div className="profile__info">
                    <div className="profile__info-text">
                        <h2 className="profile__info-name">Jacques Cousteau</h2>
                        <p className="profile__info-about">Explorador</p>
                    </div>
                </div>

                <button className="profile__add-img"></button>
            </section>

            <section className="elements"></section>
        </main>
    );
}