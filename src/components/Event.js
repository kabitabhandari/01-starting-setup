function Event(props){
    return (
        <div>
            <img src={props.items.image} alt="TODO: TITLE" />
            <h2>{props.items.title}</h2>
            <p>{props.items.description}</p>
        </div>
    )

}

export default Event;