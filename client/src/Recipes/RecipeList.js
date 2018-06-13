import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class RecipeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipes: []
        }
    }

    componentDidMount(){
        axios
        .get('http://localhost5001/api/recipe')
        .then(response => {
            this.setState(() => ({recipes: response.data}))
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        console.log(this.state.recipes)
        return (
            <div>
                <ul>
                {this.state.recipes.map(recipe => {
                    return(
                        <li>
                            <p>Recipe: {recipe.recipe}</p>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default RecipeList;