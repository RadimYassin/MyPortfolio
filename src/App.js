import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import GlobleStyle from './GloblesStyles';

function App() {
const [click,setClick]=useState(false)
  return (
    <div style={{backgroundColor:'#fcfcfc'}} className="App">
          <GlobleStyle/>
          <Navbar click={click} setClick={setClick}/>
          <Hero/>
    </div>
  );
}

export default App;
