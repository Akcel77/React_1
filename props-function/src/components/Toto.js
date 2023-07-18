const Toto = (props) => {
    
    return (
    
       
        <div>
            <h2>{props.name}</h2>
            <button onClick={props.reponseToto} disabled={props.leState.disable}>
            Reponse
            </button>

            <p>{props.leState.messageToto}</p>
            <hr></hr>
        </div>
    )
}


export default Toto;