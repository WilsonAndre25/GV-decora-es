
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'

import CostomNavbar from './Components/CostomNavbar'

import Home from './Components/Home'

import CASAMENTOS1 from './Components/CASAMENTOS1'
import Graduation from './Components/Graduation';
import Infantis from './Components/Infantis';

import Batismo from './Components/Batistmo';
import Mesas from './Components/Mesas'
import Somos from './Components/Somos';


function App() {

  return (
    <div   className='App'>
     
      <BrowserRouter>
      

     <CostomNavbar/>
   
 

     <Routes> 
    
    <Route path="*"element={<Home/>}/>

    <Route path="/CASAMENTOS1"element={<CASAMENTOS1/>}/>
    <Route path="/Graduation"element={<Graduation/>}/>
    <Route path="/infantis"element={<Infantis/>}/>
    <Route path="/Somos"element={<Somos/>}/>
    <Route path="/Batismo"element={<Batismo/>}/>
    <Route path="/Mesas"element={<Mesas/>}/>
   
     </Routes>
       
        


      </BrowserRouter>

    </div>
  );
}

export default App;
