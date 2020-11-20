import React from 'react'
interface TwoProp{
    [propsName:string]:any
}
interface TwoState{
    [propsName:string]:any
}
export default class Two extends React.Component<TwoProp,TwoState>{
    constructor(props:TwoProp){
        super(props)
        this.state = {
            name:"two"
        }
    }
    render(){
        return(
            <div>
                { this.state.name }
            </div>
        )
    }
}