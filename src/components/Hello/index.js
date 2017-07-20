
import './Hello.scss'
import './Hello.css';
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
            <div className="hello">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h1>{ this.state.title }</h1>
                </div>
            </div>
        )
    }
}
