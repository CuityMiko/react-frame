import './Movie.css'
import React,{ Component } from 'react' 
import PropTypes from 'prop-types'

export default class MovieContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'Movie Container'
        }
    }
    static contextTypes={
        text:PropTypes.string.isRequired
    }
    componentWillMount(){
        console.log(this.context.text)
    }
    render(){
        return (
            <div className="movie">
                <h3>{ this.state.title }</h3>
            </div>
        )
    }
}