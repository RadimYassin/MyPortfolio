import React, { useState } from 'react'
import Hero from './Components/Hero/Hero';
import GlobleStyle from './GloblesStyles';
import Layout from './Components/layout/Layout';
import About from './Components/About/About';
function App() {
// const [click,setClick]=useState(false)
  return (
    <div style={{backgroundColor:'#fcfcfc'}} className="App">
          <GlobleStyle/>
          {/* <Navbar click={click} setClick={setClick}/>
          <Hero/>
          <Socialmedia/> */}

          <Layout>
                  <Hero/>
                  <About/>
                   
          </Layout>

        
       
           
    </div>
  );
}

export default App;


