import { useState } from "react";
import { generate } from "shortid";
const useEvent=()=>{

const init={
    'a1|b1':{
            id:'b1',
            name:"Zihad",
            Email:"zihad#mail.com",
            firs:"making file"
    },
    'a1|b2':{
            id:'b2',
            name:"Zihad",
            Email:"zihad#mail.com",
            firs:"making file"
    },

    'a2|b2':{
        id:'b2',
        name:'rakib',
        Email:"rakib@gmail.com",
        done:"I am Done my Project"
    }
}

const [state,setState]=useState({...init})

const addEvent=(event)=>{
    event.id=generate()
    const {id,clockId}=event
    setState(prev=>({
        ...prev,
        [`${id}|${clockId}`]:event
    }))
   
}

const getEventsById=(clockId)=>{
    return Object.keys(state).filter((event)=>event.startsWith(clockId))
}



const getEvents=(isArray=false)=>{
        if(!isArray) return state;
        return Object.values(state)
}

const updateEvent=(data, id)=>{
    let events={...state};
    events[id]={
        ...events.id,
        ...data
    }


    setState(events)
}


const deleteEvents=(id)=>{
        let events={...state}
        delete events.id;
        setState(events)
}

const deleteEventsWithClockId=(clockId)=>{
    let events=Object.keys(state).filter((item)=>!item.startsWith(clockId))
    setState(events)
}




    return{
        events:state, 
        getEventsById,
        getEvents,
        addEvent,
        updateEvent,
        deleteEvents,
        deleteEventsWithClockId
    }

}




export default useEvent;