function BookCard(props) {
    return (
        <div className="book-card">
            <a href={props.link}>
                <img src={props.image} alt={props.title}></img>
            </a>
            <a href={props.link}>
                {props.title}
            </a>
            <p>By: {props.author}</p>
            <p>{props.description}</p>
        </div>
    );
}
export default BookCard;