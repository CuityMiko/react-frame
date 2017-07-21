import React,{ Component } from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router'

export default class RFBreadcrumb extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Breadcrumb style={{ margin: '12px 24px' }} separator="->">
                {
                    this.props.navs.map((nav)=>{
                        return <Breadcrumb.Item key={ nav } >
                                    <Link to={ nav.path }>{ nav.name }</Link>
                                </Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        )
    }
}