/**
 * 路由配置
 */
import React,{ Component } from 'react'
import { Router,Route,IndexRoute,browserHistory } from 'react-router'

import AppContainer from '../containers/App/'

export default class Routers extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={ AppContainer }>
                    {/* 默认页 */}
                    <IndexRoute
                        // 权限或者日志记录可以用这两个方法
                        onEnter={()=>null}
                        onLeave={()=>null}
                        getComponent={
                            (nextStates,callback)=>{
                                require.ensure([],(require)=>{
                                    callback(null,require('../containers/Home/').default)
                                },'home')
                            }
                        }>
                    </IndexRoute>
                    {/*修改路由实现代码分块，实现异步加载js*/}
                    <Route path='/movie' 
                        // 权限或者日志记录可以用这两个方法
                        onEnter={()=>null}
                        onLeave={()=>null}
                        getComponent={
                            (nextStates,callback)=>{
                                require.ensure([],(require)=>{
                                    callback(null,require('../containers/Movie/').default)
                                },'movie')
                            }
                        }>
                    </Route>
                    <Route path='/about' 
                        // 权限或者日志记录可以用这两个方法
                        onEnter={()=>null}
                        onLeave={()=>null}
                        getComponent={
                            (nextStates,callback)=>{
                                require.ensure([],(require)=>{
                                    callback(null,require('../containers/About/').default)
                                },'about')
                            }
                        }>
                    </Route>
                </Route>
            </Router>
        )
    }
}