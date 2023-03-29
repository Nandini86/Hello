import React, { Component } from 'react';

class Eventbind extends Component {
    constructor(props){
        super(props)
        
          
          this.state={
            message:"hello"
        }
        this.clickHandler=this.clickHandler.bind(this)
          console.log(this.state)
    }
clickHandler(){
    this.setState({
        message:"goodbye"
        
    })
console.log(this)
}
    // using bind keyword
    // using arrow function
    // binding in constrouctor

    render() {
        return (
            
            <div>
                <div>{this.state.message}</div>
                
                <button onClick={this.clickHandler.bind(this)}>click</button>  
                {/* <button onClick={()=>this.clickHandler()}>click</button>   
                <button onClick={this.clickHandler()}>click</button>  */}
            </div>
        );
    }
}

export default Eventbind;