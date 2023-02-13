import React, { useState } from "react";
import NoteContext from "./NoteContext";
const host = "https://freebook-website.onrender.com";

const NoteState = (props) => {
 
  const [notes, setNotes] = useState([]);
  const [isFetching,setIsFetching]=useState(true);

  
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    if(json) setIsFetching(false);
    setNotes(json);
  };

  //adding new notes to the data base
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //deleting the existing notes from data base
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    const filterNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(filterNotes);
  };

  //updading existing notes in the data base
  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes//updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();
    
    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, getNotes,isFetching }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
