import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; // just get all other classes to this
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Card;