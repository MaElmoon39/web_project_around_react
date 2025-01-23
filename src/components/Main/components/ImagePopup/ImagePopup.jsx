export default function ImagePopup(props) {
    const {selectedCard} = props;
    return (<>
        <img
            className="popup__img-container popup__big-img"
            src={selectedCard.link} 
            alt={selectedCard.name}
        />
        <p>{props.selectedCard.name}</p>
    </>);
}