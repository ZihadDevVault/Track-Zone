import { useState } from 'react';
import LocalClock from './components/Local-Clock/index';
import ClockList from './components/Clock-List';
import {generate} from 'shortid';


const App = () => {
    const int={
        id:'',
        title:'I am Local Clock',
        timezone:'',
        offset:0,
        date:null

    }

    const [LocalClockValue,setLocalClockValue]=useState({...int})
    const [ClockListValue,setClockListValue]=useState([])

    



    const upadateClock=(data)=>{
        setLocalClockValue({
            ...LocalClockValue,
            ...data
        })
    }

    const CreateClock=(data)=>{
            data.id=generate()
        setClockListValue(prev=>([
            
            ...prev,
            
            data
        ]))
    }

    const deleteItem=(id)=>{
       
       let newArr= ClockListValue.filter((item)=>item.id!=id)
        setClockListValue(
            newArr
        )
    }

    const UpdateLocal=(updatedClock)=>{


        

           const updatedArr= ClockListValue.map((clock)=>{
                if(updatedClock.id==clock.id){
                    
                    return updatedClock;
                }

                return clock;
            })
            setClockListValue(updatedArr)
           

            console.log("operation succesfull" + JSON.stringify(updatedClock))
    }

   

    

    return (
        <div> 
             <LocalClock clock={LocalClockValue} local={true} updateFunc={upadateClock} CreateClock={CreateClock}/>
            <ClockList arrofClockValue={ClockListValue} upadateClock={UpdateLocal} deleteItem={deleteItem} LocalClock={LocalClockValue.date} />
         
           
        </div>
    );
};

export default App;
