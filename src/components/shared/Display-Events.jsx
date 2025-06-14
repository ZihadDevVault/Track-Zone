const DisplayEvents=({events})=>{
    
const EventsArr=Object.keys(events)
console.log(EventsArr)
    return(
        <div>
        
                {EventsArr.map((item, index)=>{
                    return(
                        <ul key={index}>
                            {Object.keys(events[`${item}`]).map((e, index)=>{
                                return(
                                    <li key={index}>{`${e} :  ${events[`${item}`][e]}`}</li>
                                )
                            })}
                        </ul>
                    )
                
            })}
            
        </div>
    )
}



export default DisplayEvents;