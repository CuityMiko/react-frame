/**
 * 项目入口文件
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Hello from '../components/Hello/'
import AppContainer from '../containers/App/'
import Routers from './routers.js'

ReactDOM.render(
    <div>
       <Routers />
    </div>,
    document.getElementById('app')
)