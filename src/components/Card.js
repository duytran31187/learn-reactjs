import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; // just get all other classes to this
    // // props.children => without this, it can render content to Card
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Card;