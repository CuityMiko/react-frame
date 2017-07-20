
import './Hello.css';
import './Hello.scss'
import logo from '../../assets/logo.svg'

import React, {Component} from 'react'

export default class Hello extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'Hello React Project'
        }
    }
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo"/>
                <h1>{ this.state.title }</h1>
            </div>
        )
    }
}
