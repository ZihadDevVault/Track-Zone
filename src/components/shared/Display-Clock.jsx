import { format } from "date-fns";
import classes from './clock.module.css'

const DisplayClock=({clock, date, timezone, offset})=>{


    let Offsethour=offset/60;

    return(
        <div className={classes.card} >

        <h1>{clock.title}</h1>
        <h2>{format(date, 'yyyy-MM-dd hh:mm:ss aaa')}</h2>
        <p>Offset: {timezone}{Offsethour > 0 ?`+${Math.abs(Offsethour)}`:`-${Math.abs(Offsethour)}`}</p>
       
        </div>
        
    )


}


export default DisplayClock;