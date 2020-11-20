import React from 'react'
interface OneProp{
    [propsName:string]:any
}
interface OneState{
    [propsName:string]:any
}
export default class One extends React.Component<OneProp,OneState>{
    constructor(props:OneProp){
        super(props)
        this.state = {
            name:"one"
        }
    }
    componentDidMount(){
        console.log(1222222)
    }
    render(){
        return(
            <div className="onechild">
                { this.state.name }
                123131
            </div>
        )
    }
}