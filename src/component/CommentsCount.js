import React,{Component}from 'react';
import HOC from './HOC';
  class CommentsCount extends Component{
    
    render(){
        return(
            <div>
              Total comments:  {this.props.Countnumber}<br/>
                <button onClick={this.props.handleClick}>Addcomment! </button>

            </div>
        )
    }
}
const EnhancedComments=HOC(CommentsCount);
export default EnhancedComments;
