import React, { useContext, useState  } from "react";
import alertContext from "../context/alerts/AlertContext";
import noteContext from "../context/notes/NoteContext";
   
const Addnotes = () => {
    const notecontext = useContext(noteContext);
    const {addNote} = notecontext;
    const alertcontext=useContext(alertContext);
    const {UpdateAlert}=alertcontext
   
    const [note,setNote]=useState({title:"",description:"",tag:""});
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      };
      const handleOnSubmit=(e)=>{
          e.preventDefault();
        addNote(note.title,note.description,note.tag);
        
         setNote({title:"",description:"",tag:""});
         UpdateAlert("success","Notes added successfully!.");
      }

    
  return (
    <div className="container my-3 ">
      <form className=" mx-3" onSubmit={handleOnSubmit} method="POST">
        <div className="mb-3">
          <input
            type="text"
            name="title"
            value={note.title}
            className="form-control"
            placeholder="Title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            name="description"
            value={note.description}
            placeholder="Description"
            id="floatingTextarea"
            style={{ height: "150px" }}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="tag"
            value={note.tag}
            className="form-control"
            placeholder="Tag"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>

        <button type="submit" disabled={note.title.length<3|| note.description.length<5} className="btn btn-primary">
          Add Notes
        </button>
      </form>
    </div>
  );
};

export default Addnotes;
