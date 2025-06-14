
import { addMinutes } from 'date-fns'
import { useState, useEffect } from 'react'



let tizeZoneOfset={
    PST: -7 * 60,
    EST: -4 * 60,
    EDT: -4 * 60,
    BST: 1 * 60,
    MST: -6 * 60,
}


const useClock=(timezone, offset=0)=>{

const [localClock,setLocalClock]=useState(null)
const [localOffset,setLocalOffset]=useState(null)
const [LocalTimezone, setLocalTimezone]=useState('')
const [utc, setUtc]=useState(null)

useEffect(()=>{
let d=new Date()
const lo=d.getTimezoneOffset()
setLocalOffset(lo)
d=addMinutes(d,lo)
setUtc(d)
},[])


useEffect(()=>{

    if(utc){
        if(timezone){
            offset=tizeZoneOfset[timezone] || offset
            let newUtc=addMinutes(utc,offset)

            setLocalClock(newUtc)

    }

    else{

        let newUtc=addMinutes(utc, localOffset)
        let DateArry=newUtc.toUTCString().split(' ')
        setLocalTimezone(DateArry.pop())
           setLocalClock(newUtc)


    }

    
}
},[utc, timezone, offset])


  return{
       date:localClock,
        timezone:timezone || LocalTimezone,
        offset:offset || -localOffset
  
      

    }

  
}


export default useClock;