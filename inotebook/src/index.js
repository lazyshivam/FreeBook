import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserState from "./context/users/UserState";
import NoteState from "./context/notes/NoteState";
import AlertState from "./context/alerts/AlertState";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NoteState>
      <UserState>
        <AlertState>
          <App />
        </AlertState>
      </UserState>
    </NoteState>
  </React.StrictMode>
);
