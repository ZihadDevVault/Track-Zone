export const getOffset=(start=-11, end=12)=>{
    let offsetArr=[]
  for(let i=start;i<=end;i+=0.5){
    offsetArr.push(i)
  }


  return offsetArr;
}


export const TimeZones=()=>{
    return[
        'UTC','GMT','EST','PST','EDT'
    ]
}

let value=1
export const itemId=()=>{
return value++
} 