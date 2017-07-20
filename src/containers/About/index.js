import './About.css'
import React,{ Component } from 'react' 

export default class AboutContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'About Container'
        }
    }
    render(){
        return (
            <div className="about">
                <h3>{ this.state.title }</h3>
            </div>
        )
    }
}