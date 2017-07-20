/**
 * 项目入口文件
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Hello from '../components/Hello/'
import AppContainer from '../containers/App/'

ReactDOM.render(
    <div>
       <AppContainer />
    </div>,
    document.getElementById('app')
)