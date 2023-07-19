import { Component } from "react";

class Result extends Component{

    state = {
        name : 'Mario',
        winner : false
    }

    render(){

      return(
        this.state.winner ? (
            <h1>Bravo {this.state.name}</h1>
        ) : (
            <h1>Fail {this.state.name}</h1>
        )
      )
    }
        

}

export default Result;