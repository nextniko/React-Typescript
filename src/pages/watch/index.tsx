import React from 'react'
import { Route , Switch , withRouter , Link } from 'react-router-dom'
import routes from '@/router/loadable/index'
interface watchProp{
    [propsName:string]:any
}
interface watchState{
    [propsName:string]:any
}
//@ts-ignore
@withRouter
class Watch extends React.Component<watchProp,watchState>{
    constructor(props:watchProp){
        super(props)
        this.state = {
            name:"watch"
        }
        this.goPathRouter = this.goPathRouter.bind(this)
    }
    goPathRouter(path:string):any{
        this.props.history.push({
            pathname:path,
            query:{
                number:1 
            }
        })
    }
    routesConfig(route:any,index:number){
        console.log(route)
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
        // console.log(this.props)
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
export default Watch