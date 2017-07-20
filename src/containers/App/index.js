/**
 * AppContainer
 */
import './App.css'
import React,{ Component } from 'react'
import { Button } from 'antd'

export default class AppContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'App Container'
        }
    }
    render(){
        return (
            <div className="app">
                <h1>{this.state.title}</h1>
                <p>
                    <Button type="primary">按 钮</Button>
                </p>
            </div>
        )
    }
}