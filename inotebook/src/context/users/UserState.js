import React ,{ useState} from 'react'
import UserContext from './UserContext'
const UserState = (props) => {
  const host = "http://localhost:4000";
    // const ref=useRef(null);
    const [user,setUser]=useState({name:"",email:"",date:""})
    const GetUserDetails=async()=>{
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            }
          });
          const data = await response.json();
          
          setUser({
            name:data.name,
            email:data.email,
            date:data.date

          });
          
    }
    
   
  return (
    <UserContext.Provider value={{ GetUserDetails,user}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
