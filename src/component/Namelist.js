import React from'react'
function Namelist(){
    const names=['raj' ,'bruce', 'clark']
    return(
       <div> 
        {
            names.map(mn=><h2> {mn}</h2>)
        }

       </div>
    )
}
export default Namelist;