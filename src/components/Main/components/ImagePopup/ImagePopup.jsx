export default function ImagePopup(props) {
    const {selectedCard} = props;
    return (<>
        <img src={selectedCard.link} alt={selectedCard.name} />
        <p>{props.selectedCard.name}</p>
    </>);
}