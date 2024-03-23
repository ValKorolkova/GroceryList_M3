import { Component } from "react";
import check from "./basket.svg"

export class GroceryList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: " ",
            groceryList: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput:e});
    }

    addItem(input){
        if (input === ""){
            alert ("Please, enter item")
        } else{
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ""})
    }
    }

    crossWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
        <div>
            <form onSubmit={this.onFormSubmit} >
            <div className="container">
            <input type="text" placeholder="What to you want to bay today?"
            onChange={(e) => {this.onChangeEvent(e.target.value)}} />
            </div>
            <div className="container">
                <button className="btn-add btn" onClick={()=> this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item,index)=>(
                    <li onClick={this.crossWord} key={index}>
                        <img src={check} width="40px" alt="basket" />
                        {item}
                        </li>
                ))}
            </ul>
            <div className="container">
                <button onClick={ () => this.deleteItem() } className="btn btn-delete">Delete</button>
            </div>
            </form>
        </div>
        )
    }
}