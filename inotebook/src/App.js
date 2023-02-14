import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Newuser from "./components/Newuser";
import LoadingBar from 'react-top-loading-bar'
import { useContext} from "react";
import noteContext from "./context/notes/NoteContext";



function App() {
  const progressContext=useContext(noteContext);
   const {progress,setProgress}=progressContext;
  return (
    
          <div>
            <BrowserRouter>
              <LoadingBar
                color="#e7a613"
                progress={progress}
                height={3}
                onLoaderFinished={() => setProgress(0)}
              />
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
              <div className="p-2 " style={{ background: "white" }}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="left">
                    <span>&#169;</span>
                    <span>Copyright.All rights reserved.</span>
                  </div>
                  <div className="right">
                    <div className="gap-3 mt-2 icons d-flex flex-row  justify-content-center align-items-center">
                      <span>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <i className="fa fa-twitter"></i>
                        </a>
                      </span>{" "}
                      <span>
                        <a
                          href="http://facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </span>
                      <span>
                        <a
                          href="http://instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                      </span>{" "}
                      <span>
                        <a
                          href="http://linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
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
    
  );
}

export default App;
