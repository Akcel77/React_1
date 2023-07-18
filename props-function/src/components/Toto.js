const Toto = (props) => {
    
     
    const btnTotoResponse = props.leState.messageMaman !== null ? (<button onClick={props.reponseToto}>Reponse</button>) : (<button disabled>Reponse</button>)

    console.log(props.messageToto)

    return (

       
        <div>
            <h2>{props.name}</h2>
            {btnTotoResponse}            
            <p>{props.leState.messageToto}</p>
            <hr></hr>
        </div>
    )
}


export default Toto;