import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'
import Cards from './components/cards/Card';
import { data } from './data';

const App = () =>{
    return(
       <div>
             <Navbar/>
             <Header/>
             <Cards /> 
       </div>
        
    )

}
    





export default App;