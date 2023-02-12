import React from 'react'
import Addnotes from './Addnotes';
import Notes from './Notes'
const HomePage = () => {
 
  return (
    <div className="mx-4 py-4" style={{minHeight:"100vh"}} >
       <h1 style={{color:"white"}}>Add Your Notes Here..</h1>
      <Addnotes/>
      <Notes/>
     </div>
  );
};

export default HomePage;
