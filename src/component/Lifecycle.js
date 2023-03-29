import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Nandini'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(){
        console.log('LifecycleA getderived state props')
        return null
    }
componentDidMount(){
    console.log('LifecycleA componentdidmount ')
}
    
    render() {
        console.log('LifecycleA rendered')
        return (
            <div> 
             <div> LifecycleA</div> 
             <LifecycleB/> 
                </div>
        );
    }
}

export default Lifecycle;