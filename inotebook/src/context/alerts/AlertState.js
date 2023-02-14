import React ,{useState} from 'react'
import AlertContext from './AlertContext'
const AlertState = (props) => {
    // const ref=useRef(null);
    const [alertInfo,setAlertInfo]=useState({type:"",msg:""})
    const [showalert,setShowalert]=useState(false);
  const UpdateAlert=(alertType,message)=>{
        setAlertInfo({type:alertType,msg:message});
        setShowalert(true);
  }
  setTimeout(() => {
    setShowalert(false);
  }, 1500);
  return (
    <AlertContext.Provider value={{UpdateAlert,alertInfo,showalert}}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
