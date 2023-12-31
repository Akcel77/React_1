import { Component } from "react";
import Car from './Car';

class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ["", 'red', 'green', 'black', 'pink', 'orange'],
        content: ''
    }

    handlePseudo = (e) => {
        this.setState({
            username : e.target.value
        }) 
    }

    handleColor = e => {
        this.setState({
            color : e.target.value
        }) 
    }

    handleComments = e =>{
        this.setState({
            content : e.target.value
        })
    }

    handleSubmitForm = e =>{
        e.preventDefault();
        console.log(`Usename:${this.state.username} Couleur:${this.state.color} Commentaire:${this.state.content}`)
    }


    render(){


        return(
            <div>

                <Car color={this.state.color} height="300"></Car>

                <h1>Comment</h1>

                <form onSubmit={this.handleSubmitForm}>

                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                    </div>

                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index )=>{
                                    return <option key={index} value={color}>{color}</option>                                    
                                }) 
                            }
                        </select>
                    </div>
                    
                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.content} onChange={this.handleComments}></textarea>
                    </div>


                    <button>Envoyer</button>
                </form>

            </div>
        )

    }
}

export default Form;