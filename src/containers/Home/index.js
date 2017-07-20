import './Home.css'
import React,{ Component } from 'react' 

export default class HomeContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'Home Container'
        }
    }
    render(){
        return (
            <div className="home">
                <h3>{ this.state.title }</h3>
            </div>
        )
    }
}