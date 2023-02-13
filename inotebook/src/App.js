import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Header from "./components/Header";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Newuser from "./components/Newuser";
import AlertState from "./context/alerts/AlertState";
import UserState from "./context/users/UserState";

function App() {
  
  return (
    <UserState>
      <NoteState>
        <AlertState>
          <div >
            <BrowserRouter>
              <Header />
              <Alert />
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/newuser" element={<Newuser />} />
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<About />} />
              </Routes>
            </BrowserRouter>
            <footer>
              <div className="p-2 " style={{background:"white"}}>
                <div className="d-flex flex-column justify-content-center align-items-center" >
                  <div className="left">
                    <span>&#169;</span>
                    <span>Copyright.All rights reserved.</span>
                  </div>
                  <div className="right">
                    <div className="gap-3 mt-2 icons d-flex flex-row  justify-content-center align-items-center">
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>{" "}
                      <span>
                        <i className="fa fa-facebook-f"></i>
                      </span>
                      <span>
                        <i className="fa fa-instagram"></i>
                      </span>{" "}
                      <span>
                        <i className="fa fa-linkedin"></i>
                      </span>{" "}
                    </div>
                    <div className="left">
                    <span>Created By: </span>
                    <span>Shivam Goswami.</span>
                  </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </AlertState>
      </NoteState>
    </UserState>
  );
}

export default App;
