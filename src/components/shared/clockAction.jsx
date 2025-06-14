import { useState } from "react"
import Clockform from "./clockForm"
import DisplayEvents from "./Display-Events"
import useEvent from "../hooks/useEvents/useEvent"

const ClockAction=({local,clock, updateFunc, CreateClock,setisidDeleted})=>{
    const{events}=useEvent()
    const [isCreateForm, setisCreateForm]=useState(false)
    const [isEdit,setIsEdit]=useState(false)
  const [isEvent,setIsEvent]=useState(false)



const isCreateClock=()=>(
   setisCreateForm(!isCreateForm)
)

const deleteFun=()=>{
    setisidDeleted(true)
}

const EditFunct=()=>{
    setIsEdit(!isEdit)

}

return(
     <div>
 <button onClick={EditFunct}>Edit</button>
        {local? <button onClick={isCreateClock}>Create</button> : <button onClick={deleteFun}>Delete</button>}
    <button onClick={()=>setIsEvent(!isEvent)}>Events</button>
            {isEdit && <Clockform value={clock} HandelData={updateFunc} />}

            {isCreateForm && <Clockform value={clock} HandelData={CreateClock} edit={false} /> }
            {isEvent && <DisplayEvents events={events} />} 
 </div>
)


}


export default ClockAction;