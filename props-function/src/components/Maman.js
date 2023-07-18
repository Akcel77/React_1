import { Component } from "react";
import React from "react";
import Toto from "./Toto";

class Maman extends Component{

    state = {
        messageMaman: null,
        messageToto: null
    }    

    ordre = () => {
        this.setState({
            messageMaman : 'Va ranger ta chambre'
        })
    }

    reponseToto = () => {
        this.setState({
            messageToto : 'Ok maman'
        })
    }
    render(){
         

        return (

            <div>
                <h1>Maman</h1>
                <button onClick={this.ordre}>Ordre de la maman</button>
                <p>{this.state.messageMaman}</p>
                <hr></hr>

                <Toto name="Toto" reponseToto={this.reponseToto} leState={this.state}>

                </Toto>
            </div>
        )
    }
}


export default Maman;