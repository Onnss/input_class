import React from 'react';
import Modall from './modal';
class Inputs extends React.Component{
    constructor(){
        super()
        this.state={name:'',email:'',password:''}
    }
    handleName=(event)=>{
    this.setState({
        name:event
    })
}
handleEmail=(event)=>{
    this.setState({
        email:event
    })
}
handlePass=(event)=>{
    this.setState({
        password:event
    })
}

    render (){
        return(
        <div className='container card shadow-lg p-3 mb-5 bg-body rounded mt-5  w-50'>
            <h1>Hello</h1>
            <input onChange={(e)=>this.handleName(e.target.value)} type="text" className="mt-3 form-control"  placeholder="Full Name"></input>
            <input onChange={(e)=>this.handleEmail(e.target.value)} type="email" className="mt-2 form-control"  placeholder="Email"></input>
            <input onChange={(e)=>this.handlePass(e.target.value)} type="password" className="mt-2 form-control"  placeholder="Password"></input>
            <Modall> <h2> name : {this.state.name}</h2>
            <h2>email : {this.state.email}</h2>
            <h2>password: {this.state.password}</h2>
            </Modall>
        </div>
        )
    }
}
export default Inputs;