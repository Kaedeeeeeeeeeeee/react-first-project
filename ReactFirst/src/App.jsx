import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const card = () =>{
  return(
    <div>
      <h2>trying react component</h2>
    </div>
  )
};


const App = () =>{
  return(
  <>  
    <h2>trying react component</h2>
     <img src={reactLogo} className="logo react" alt="React logo" />
    <p>this is good ngl</p>
  </>    
  );
};

export {card}
export default App

