import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import BeResilient from "./components/BeResilient";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return(
    <>
        <Header/>
        
        <div class="quoteMandela">
            <h1>“A maior glória em viver não está em jamais cair, mas em nos levantar cada vez que caímos.”</h1>
            
            <p>- Nelson Mandela</p>
        </div>

        <About/>

        <BeResilient/>

        <Footer></Footer>
    </>
    ) 
}

export default App;