import { useEffect, useRef, useState } from "react";
import useClock from "../hooks/useClock/useClock";
import ClockAction from "../shared/clockAction";
import DisplayClock from "../shared/Display-Clock";
import {addSeconds, formatDistance} from 'date-fns'
import useTimer from "../hooks/useTimer/useTimer";

const CreateAnotherClock=({mytimezone, myoffset, clock, id, deleteItem,upadateClock, LocalClock})=>{
    const{date}=useClock(mytimezone, myoffset)
    const [isDeleted,setisDeleted]=useState(false)
    isDeleted && deleteItem(id);
// const timer=useTimer(date)

   
  
         return (
            <div>
                    <DisplayClock  clock={clock} offset={myoffset} date={date} timezone={mytimezone} />
                    <ClockAction clock={clock} local={false}  setisidDeleted={setisDeleted} updateFunc={upadateClock}/>
                 <h3>Difference: { formatDistance(LocalClock, date)}</h3>
            </div>
         )
}

const ClockList=({arrofClockValue,deleteItem, upadateClock, LocalClock})=>{


return(

 <div>
    <h1> Others Clocks</h1>
    <hr/>


    {arrofClockValue.length===0 ? (<p>There is no Clock. Please Create one</p>):(   <div>
        {arrofClockValue.map((oneClock,index)=>{
          
        
           return (
            
               <CreateAnotherClock key={index}  mytimezone={oneClock.timezone} myoffset={oneClock.offset} clock={oneClock} id={oneClock.id}  deleteItem={deleteItem} upadateClock={upadateClock}  LocalClock={LocalClock} />
            
           )
        })}
    </div>)}
 </div>

)
}


export default ClockList;