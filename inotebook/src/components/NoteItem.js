import React, { useContext } from "react";
import alertContext from "../context/alerts/AlertContext";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const alertcontext = useContext(alertContext);
  const { UpdateAlert } = alertcontext;
  const { deleteNote} = context;
  const { update, note } = props;
  const { title, description, tag, _id } = note;

  return (
    <>
      <div className="card m-2" style={{ width: "20rem", color: "black" }}>
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <h6 className="card-subtitle mb-2 ">{tag}</h6>
          <p className="card-text">{description}</p>
          <button
            className="btn btn-danger "
            onClick={() => {
              deleteNote(_id);
              UpdateAlert("success", "Notes deleted successfully!");
            }}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-info  mx-2 "
            onClick={() => update(note)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
