import React from 'react'
// hash 模式
import { Route , Switch , withRouter , Link } from 'react-router-dom'
// history 模式
// import { BrowserRouter as Router , Link , Route } from 'react-router-dom'
import routes from '@/router/loadable/index'
interface routesConfigProps{
    [propsName:string]:any
}
// class routesConfig extends React.Component<routesConfigProps,any>{
//     constructor(props:routesConfig){
//         super(props)
//     }
//     render(){
//         return(
//             <Route
//                 path={this.props.path}
//                 render={(props) => (
//                     // pass the sub-routes down to keep nesting
//                     <this.props.component {...this.props} routes={this.props.routes} />
//                 )}
//             />
//         )
//     }
// }
//@ts-ignore
@withRouter
class CustomRouter extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.routesConfig = this.routesConfig.bind(this)
    }
    routesConfig(route:any,index:number){
        return(
            <Route
                key={index}
                path={route.path}
                render={(props):any=>{
                    <route.component {...props} routes={route.children}/>
                }}
            />
            
        )
    }
    componentDidMount(){
        // console.log(this.routesConfig)
    }
    render(){
        return(
            <div className="routerAll">
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/Watch/One"> one </Link>
                        </li>
                        <li>
                            <Link to="/Watch/Two"> two </Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    {routes.map((route,index)=>{
                        this.routesConfig(route,index)
                        // <routesConfig key={index} {...route} />
                    })}
                    {/* <Route
                        path={"/Watch/One"}
                        component={routes[0].children![0].component}
                    /> */}
                </Switch>
                
            </div> 
        )
    }
}

export default CustomRouter;
