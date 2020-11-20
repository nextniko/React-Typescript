import React from 'react'
// import {  withRouter } from 'react-router-dom'
interface watchProp{
    [propsName:string]:any
}
interface watchState{
    [propsName:string]:any
}
class WatchClone extends React.Component<watchProp,watchState>{
    constructor(props:watchProp){
        super(props)
        this.state = {
            name:"watchclone"
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
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div>
                { this.state.name }
                <div className="one" onClick={() => this.props.history.push({pathname:'one'})}>
                    one跳转
                </div>
            </div>
            
        )
    }
}
export default WatchClone