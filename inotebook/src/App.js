import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Header from "./components/Header";
import NoteState from './context/notes/NoteState'
import Alert from "./components/Alert";
import Login from "./components/Login";
import Newuser from "./components/Newuser";

function App() {
  var flag = true;
  return (
    <NoteState>
    <div style={{background:"rgb(4 64 56)"}}>
      <BrowserRouter>
        
        
           {flag&& <Header />}
              {/* <Alert/> */}
            <Routes>
         
              
              <Route exact path='/login' element={<Login />}/> 
               <Route exact path="/newuser" element={<Newuser />} />
             
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/about" element={<About />} />
             
            </Routes>
        
      </BrowserRouter>
    </div>
    </NoteState>
  );
}

export default App;
