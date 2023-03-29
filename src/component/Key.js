import React from'react'
function Key(){
    const names=[ 
        {
            id:1,
            name: 'ragu',
            age:30,
        },
        {
          id:2,
          name:'manu',
          age:40
          

        }
     ]
    const nameList=names.map(name=><h2>I am {name.name}.I am{ name.age} </h2>)
    return <div> {nameList}</div>

}

export default Key;
