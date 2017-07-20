import './Movie.css'
import React,{ Component } from 'react' 

export default class MovieContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'Movie Container'
        }
    }
    render(){
        return (
            <div className="movie">
                <h3>{ this.state.title }</h3>
            </div>
        )
    }
}