import React from 'react'
interface HelloProps{
    // title:string,
    [propsName:string]:any,
    
}
// 接口也要声明状态
interface HelloState{
    count:number,
    [propsName:string]:any,
}
export default class Hello extends React.Component<HelloProps,HelloState>{
    constructor(props:HelloProps){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.clickHandlerManager = this.clickHandlerManager.bind(this)
    }
    state = {
        count:11
    }
    clickHandler():void{
        this.setState({
            count:22
        })
    }
    clickHandlerManager():void{
        console.log("asdasd as")
    }
    render(){
        const { title } = this.props
        return(
            <div className="Hello">
                <div>
                    { title }
                </div>
                
                <div>
                    <span>{ this.state.count }</span>
                    <button onClick={this.clickHandler}>点</button>
                    <button onClick={this.clickHandlerManager}>manger</button>
                </div>
            </div>
            
        )
    }
}