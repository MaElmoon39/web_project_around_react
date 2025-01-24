export default function ImagePopup({selectedCard}) {
    return (<>
        <img
            className="popup__img-container popup__big-img"
            src={selectedCard.link} 
            alt={selectedCard.name}
        />
        <p>{selectedCard.name}</p>
    </>);
}