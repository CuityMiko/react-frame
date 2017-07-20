/**
 * 项目入口文件
 */
import React,{ Component } from 'react'
import ReactDOM from 'react-dom'

import Hello from '../components/Hello/'

ReactDOM.render(
    <div>
       <Hello />
    </div>,
    document.getElementById('app')
)