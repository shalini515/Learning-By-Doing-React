function BookCard(props) {
    return (
        <div className="book-card">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt={props.title}></img>
            </a>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                {props.title}
            </a>
            <p>By: {props.author}</p>
            <p>{props.description}</p>
        </div>
    );
}
export default BookCard;