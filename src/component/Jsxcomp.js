import React from "react";
const Jsxcomp=()=>{
    // return(
    //     <div>
    //         <h1> hello everyone</h1>
    
    //     </div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'hello everyone'))
    //return React.createElement('div',null,'<h1>hello everyone</h1>')
}


export default Jsxcomp