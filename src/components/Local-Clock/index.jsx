import { useEffect, useState } from "react";
import useClock from "../hooks/useClock/useClock";
import DisplayClock from "../shared/Display-Clock";
import ClockAction from "../shared/clockAction";


const LocalClock=({clock, local, updateFunc, CreateClock})=>{
   
const { date,offset,timezone } = useClock(clock.timezone, clock.offset)

useEffect(()=>{
updateFunc({
    date,
    timezone,
    offset
    
})
},[date])



    return(
     <div>
       {date && <DisplayClock date={date} timezone={timezone} clock={clock} offset={offset} /> }
       <ClockAction local={local} clock={clock} updateFunc={updateFunc} CreateClock={CreateClock} />

     </div>
    )
}

export default LocalClock;