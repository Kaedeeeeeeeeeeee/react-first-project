import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({animal}) =>{
  return(
    <div>
      <h2>this is another component and the props is : {animal ? animal : 'cat'}</h2>
    </div>
  )
};

const Alerting = (props) =>{
  return(alert(`this is a test for calling ${props.name}`))
};


//arrow function is used to create a component >>>
//this is called an comoponent and html inside it is called jsx >>>
//jsx can only have 1 element inside it so thats why we use empty tag or empty element such as div>>>
const App = () =>{
  const student = ['budi', 'yapping', 'pakcik', 'anwar']
  return(
  //this eh is a empty tag or empty element>> :  <></>
  <> 
    <ul>
      {
      student.map((student) => (
        <li>{student}</li>
      ))
      }

    </ul>
    <h2>trying react component</h2>
     <img src={reactLogo} className="logo react" alt="React logo" />
    <p>this is good ngl</p>
   {/* <Alerting name="budiYapping" /> */}
   <Card /> 
  </>    
  );
};















// export {card}
export default App

