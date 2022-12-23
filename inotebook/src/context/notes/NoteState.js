import React ,{useState} from 'react'
import NoteContext from './NoteContext'
const NoteState = (props) => {
  const host='http://localhost:4000';
      const [notes,setNotes]=useState([]);
      const getNotes=async()=>{
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTVhZDIyM2I0MmUzNzI2OTY0MDYzIn0sImlhdCI6MTY3MTUxODkzMH0.KuOC3tjSuRtTzdHBgcKsRq7J1QUQqBuMUAFhV3cIYeA'
          
          },
        });
        const json=await response.json();
        setNotes(json);
      }
    
      //adding new notes to the data base
      const addNote=async(title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/addnotes`, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTVhZDIyM2I0MmUzNzI2OTY0MDYzIn0sImlhdCI6MTY3MTUxODkzMH0.KuOC3tjSuRtTzdHBgcKsRq7J1QUQqBuMUAFhV3cIYeA'
          
          },
         
          body: JSON.stringify({title,description,tag}) 
        });
        const note=await response.json();
        setNotes(notes.concat(note));
      }
      
      //deleting the existing notes from data base
      const deleteNote=async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTVhZDIyM2I0MmUzNzI2OTY0MDYzIn0sImlhdCI6MTY3MTUxODkzMH0.KuOC3tjSuRtTzdHBgcKsRq7J1QUQqBuMUAFhV3cIYeA'
          
          }
         
        });
        const json =response.json();
        console.log("deleting the notes"+id);
        console.log(json);
        const filterNotes=notes.filter((note)=> {return note._id!==id})
        setNotes(filterNotes);
      }

      //updading existing notes in the data base
      const updateNote=async(id,title,description,tag)=>{
        const response = await fetch(`${host}/api/notes//updatenote/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhMTVhZDIyM2I0MmUzNzI2OTY0MDYzIn0sImlhdCI6MTY3MTUxODkzMH0.KuOC3tjSuRtTzdHBgcKsRq7J1QUQqBuMUAFhV3cIYeA'
          
          },
         
          body: JSON.stringify({title,description,tag}) 
        });
        console.log("updating  the notes"+id);
        const json=response.json();
        let newNotes=JSON.parse(JSON.stringify(notes));
        console.log(json);
        for (let index = 0; index <newNotes.length; index++) {
          const element =newNotes[index];
          if(element._id===id){
            newNotes[index].title=title;
            newNotes[index].description=description;
            newNotes[index].tag=tag;
          break;
        }
        }
        setNotes(newNotes);
        console.log("notes updated in database with id:"+id);
      }
  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
