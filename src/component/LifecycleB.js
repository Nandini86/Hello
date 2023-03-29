import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Nandini'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(){
        console.log('LifecycleB getderived state props')
        return null
    }
componentDidMount(){
    console.log('LifecycleB componentdidmount ')
}
    
    render() {
        console.log('LifecycleB rendered')
        return (
            <div>
                LifecycleA
            </div>
        );
    }
}

export default LifecycleB;