/**
 * 路由配置
 */
import React,{ Component } from 'react'
import { Router,Route,IndexRoute,browserHistory } from 'react-router'

import AppContainer from '../containers/App/'
import HomeContainer from '../containers/Home/'
import MovieContainer from '../containers/Movie/'
import AboutContainer from '../containers/About/'

export default class Routers extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={ AppContainer }>
                    <IndexRoute component={ HomeContainer}></IndexRoute>
                    <Route path='/movie' component={ MovieContainer }></Route>
                    <Route path='/about' component={ AboutContainer }></Route>
                </Route>
            </Router>
        )
    }
}