import React ,{useState} from 'react'
import AlertContext from './AlertContext'
const AlertState = (props) => {
    // const ref=useRef(null);
    const [alertInfo,setAlertInfo]=useState({type:"",msg:""})
    const [show,setShow]=useState(false);
  const UpdateAlert=(alertType,message)=>{
        setAlertInfo({type:alertType,msg:message});
        setShow(true);
  }
  setTimeout(() => {
    setShow(false);
  }, 1500);
  return (
    <AlertContext.Provider value={{UpdateAlert,alertInfo,show}}>
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
