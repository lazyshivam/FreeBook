import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import alertContext from "../context/alerts/AlertContext";
import noteContext from "../context/notes/NoteContext";
import svg from "../image/dataNotFound.svg"
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(noteContext);
  const alertcontext = useContext(alertContext);
  const { UpdateAlert } = alertcontext;
  const naviagte = useNavigate();
  const { notes, getNotes, updateNote, isFetching } = context;
  const ref = useRef(null);
  const closeRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      naviagte("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({
    cid: "",
    ctitle: "",
    cdescription: "",
    ctag: "",
  });
  const update = (currentNote) => {
    ref.current.click();
    setNote({
      cid: currentNote._id,
      ctitle: currentNote.title,
      cdescription: currentNote.description,
      ctag: currentNote.tag,
    });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    updateNote(note.cid, note.ctitle, note.cdescription, note.ctag);
    closeRef.current.click();
    UpdateAlert("success", "Notes updated successfully!.");
  };

  if (isFetching){
    console.log(isFetching)
  }
  return (
    <div className="Alert">
      <button
        type="button"
        ref={ref}
        className="btn btn-info d-none "
        data-bs-toggle="modal"
        data-bs-target="#Modal"
      ></button>
      <div className="modal" id="Modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content" style={{ background: "#044038" }}>
            <div className="modal-header" style={{ color: "whitesmoke" }}>
              <h5 className="modal-title">Update Notes</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ filter: "invert(1)", fontSize: "20px" }}
              ></button>
            </div>
            <div className="modal-body">
              <form className=" mx-3">
                <div className="mb-3">
                  <input
                    type="text"
                    name="ctitle"
                    value={note.ctitle}
                    className="form-control"
                    placeholder="Title"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="cdescription"
                    value={note.cdescription}
                    placeholder="Description"
                    id="floatingTextarea"
                    style={{ height: "150px" }}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="ctag"
                    value={note.ctag}
                    className="form-control"
                    placeholder="Tag"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Close
              </button>
              <button
                type="button"
                disabled={
                  note.ctitle.length < 3 || note.cdescription.length < 5
                }
                className="btn btn-primary"
                onClick={handleOnClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ############################################ */}
      <div className="row my-3 text-white  justify-content-center align-items-center">
        <h2>Your Notes :</h2>
        { isFetching&& <div className="spinner-border text-primary mt-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
  {/* //Opps! ,No notes to display */}
        {!isFetching&&<div className="conainer pt-0 ">
          {notes.length === 0 &&<div><span>Opps! No notes to display.</span><div className="d-flex justify-content-center align-items-center"><img  src={svg} width="300px" alt="dataNotFound"/></div></div>}
        </div>}
        {notes.map((note) => {
          return <NoteItem note={note} update={update} key={note._id} />;
        })}
      </div>
      
    </div>
  );
};

export default Notes;
