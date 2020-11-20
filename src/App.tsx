import React from 'react';
// hash 模式
import { HashRouter as Router , Route , Redirect , withRouter } from 'react-router-dom'
// , Link
// history 模式
// import { BrowserRouter as Router , Link , Route } from 'react-router-dom'
import './App.css';
import routes from '@/router/loadable/index'
console.log(routes)
//@ts-ignore
@withRouter
class App extends React.Component<any,any>{
  componentDidMount(){
  }
  render(){
    return(
      <Router>
        <div className='App'>
          {routes.map((route,index)=>{
            <Route exact={route.exact?route.exact:false} path={route.path} component={route.component} key={index}/>
            if(route.Redirect){
              <Redirect exact to={route.path}/>
            }
            return true
          })}
          {/* <Route exact path='/Watch' component={CustomRouter}/>
          <Redirect exact to="/Watch"/> */}
        </div>
      </Router>
    ) 
  }
}
export default App;
