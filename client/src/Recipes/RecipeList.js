import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';

class RecipeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipes: [],
            title: '',
            author: '',
            calories: Number,
            ingredients: '',
            directions: ''
        }
    }

    componentDidMount(){
        axios
        .get('http://localhost:5001/api/recipes')
        .then(response => {
            this.setState(() => ({recipes: [...response.data]}))
        })
        .catch(err => {
            console.log('error', err)
        })
    }

    render(){
        return (
            <div>
                <ul>
                {this.state.recipes.map(recipe => {
                    return (
                        <li key={recipe}>
                        <Card inverse>
                            <CardImg  className="img" width="" src="https://i2.wp.com/www.thissavoryvegan.com/wp-content/uploads/2017/05/vegan-potato-salad.jpeg?resize=500%2C500&ssl=1"alt="Card image cap"/>
                            <CardImgOverlay>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardText>Author: {recipe.author}</CardText>
                            <CardText>Calories: {recipe.calories}</CardText>
                            <CardText>Ingredients: {recipe.ingredients}</CardText>
                            <CardText>Directions: {recipe.directions}</CardText>
                                <small className="text-muted">Vegan Eats</small>
                            </CardImgOverlay>
                        </Card>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default RecipeList;