//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Welcome from './component/welcome';
import Hello from './component/Hello';
import Greet from './component/Greet';
import Message from './component/Message';
import Jsxcomp from './component/Jsxcomp';
import Counter from './component/Counter';
import Destructure from './component/Destructure';
import Functionalclick from'./component/Functionalclick';
import Eventbind from './component/Eventbind';
import ParentComponent from './component/Parentcomponent';
import Namelist from'./component/Namelist';
import Key from './component/Key'
import Lifecycle from './component/Lifecycle';
import StateTutorial from "./component/StateTutorial"
import ExampUseeffect from"./component/ExampUseeffect"
import ExampleUseState from "./component/ExampleUseState"
import CompE from'./component/CompE'
import LikesCount from './component/LikesCount'
import CommentsCount from './component/CommentsCount'
import EnhancedLikes from './component/LikesCount';
import EnhancedComments from './component/CommentsCount';
import Home from './component/Home';
//import ExpenseList from './component/ExpenseList';
export const UserContext=React.createContext()// creating the context
export const JobContext=React.createContext()// creating the context
const App = () =>{
    return(
    
      <div className='=App'>
        
        
      
 {/* <UserContext.Provider value={'Nandini'}> 
<JobContext.Provider value={'Trainer'}>

<CompE/>
</JobContext.Provider>
</UserContext.Provider>   */}
{/* <ExpenseList/> */}
          {/* <ExampUseeffect/>   */}
          {/* <ExampleUseState/>  */}
        {/* <EnhancedLikes/>
        <EnhancedComments/> */}

        {/* <StateTutorial/> */}
         
         {/* <Lifecycle/>  */}
        <Key/>  
         {/* <Namelist/>  */}
         {/* <ParentComponent/>  */}
          <Eventbind/>  
 {/* <Functionalclick/>  */}
         {/* <Counter/> */}
{/* <Jsxcomp/> */}
         {/* <Message/>  */}
        {/* <Welcome name='Nandu' value='prog'/> 
        <Welcome name='sita' value='test'/> 
        <Welcome name='manu' value='mang'/> 
         */}

        {/* <Hello/> */}
         {/* <Destructure name= 'clark' value='man' />
        <Destructure name ='Diana'  value='Women'/>  */}
        {/* <Greet name='Nandu' value='prog'>
          <p> this is children props</p>
        </Greet>
        <Greet name='sita' value='tester'>
          <button>Action</button> 
          </Greet>
        <Greet name='manu' value='manager'/> */}
      </div>
    );
  }
export default App;

