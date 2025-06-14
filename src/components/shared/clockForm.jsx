import { useState } from "react";
import { getOffset, TimeZones } from "../util/timezone";
    
const Clockform=({edit=true, value={timezone:'', offset:0, title:''}, HandelData})=>{
    const [formValue, setFormValue]=useState({...value})


const changeHandeler=(e)=>{
    let{name,value}=e.target;

   
    setFormValue(prev=>({
        ...prev,
            [name]:value
    }))
}

const SubmitHandeler=(e)=>{
    
    e.preventDefault()
    HandelData({
        ...formValue,
        offset:formValue.offset*60
    })
}


        return(
           <form onSubmit={SubmitHandeler}>
            
            <label  htmlFor="TitleId">Title</label>
            <input
             type='text'
             name='title'
              id='TitleId' 
              value={formValue.title} 
              onChange={changeHandeler}
              />
            <label htmlFor="TimezoneId">TimeZone</label>
            <select
            
            id="TimezoneId"
            name="timezone"
            value={formValue.timezone}
            onChange={changeHandeler}
            >
                    {TimeZones().map((zone)=>(
                        <option key={zone} value={zone}>{zone}</option>
))}
            </select>
          {(formValue.timezone=='UTC' || formValue.timezone=='GMT') && <div>
            
            <label htmlFor="OffsetId">Offset</label>
                <select 
                    id='OffsetId'
                    value={formValue.offset}
                    onChange={changeHandeler}
                    name='offset'
                >
                    {getOffset().map((offset)=>(
                    <option key={offset} value={offset}>{offset}</option>
                ))}
                </select>

            </div>}



           
           <button type='submit'>{edit? 'Update':'Create'}</button>
           </form>
        )
}


export default Clockform;