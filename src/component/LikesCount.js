import React,{Component}from 'react';
import HOC from './HOC';

 class LikesCount extends Component{
   
    render(){
        return(
            <div>
                {this.props.Countnumber}<br/>
                <button onClick={this.props.handleClick}>likes </button>

            </div>
        )
    }
}
const EnhancedLikes=HOC(LikesCount);
export default EnhancedLikes;