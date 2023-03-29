// Program to demonstrate UseContext
import React, { useContext } from 'react';//import useContest

import{UserContext, JobContext} from '../App'//  import user and job context
function CompE(){
const user=useContext(UserContext)// call the useContextfun and pass in context has its argument
const job=useContext(JobContext)// assign function call to variable

    return(
        <div>
            {user} - {job}
        </div>
    )
}
export default CompE;