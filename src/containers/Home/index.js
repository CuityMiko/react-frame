import './Home.css'
import React,{ Component } from 'react'
import PropTypes from 'prop-types' 
import ComponentChild from '../../components/ComponentChild/'

export default class HomeContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'Home Container',
            students:[
                {id:1,name:'张三',age:20},
                {id:2,name:'李四',age:21},
                {id:3,name:'王五',age:23},
                {id:4,name:'赵六',age:24}
            ]
        }
    }
    static contextTypes={
        text:PropTypes.string.isRequired,
        changetitle:PropTypes.func
    }
    componentWillMount(){
        this.context.text="Home Container"
        this.context.changetitle;
    }
    render(){
        return (
            <div className="home">
                <h3>{ this.state.title }</h3>
                <ComponentChild>
                    {
                        this.state.students.map((stu)=>{
                            return <a href="javascript:;" key={ stu.id }>姓名：{ stu.name }，年龄：{ stu.age }岁</a>
                        })
                    }
                </ComponentChild>
            </div>
        )
    }
}