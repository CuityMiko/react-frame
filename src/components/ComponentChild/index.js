/**
 * 自定义组件的solt
 */
import React,{ Component } from 'react'

export default class ComponentChild extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ol>
                {
                    React.Children.map(this.props.children,(child)=>{
                        console.log(child)
                        return <li>{ child }</li>
                    })
                }
            </ol>
        )
    }
}