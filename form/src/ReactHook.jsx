
import React,{useState,useEffect} from "react";


const ReactHooks =(props)=>{

    const [counter, setCounter] = useState(props.count)

    const [status, setSatus] = useState('student')


  useEffect(()=>{

    setCounter(props.count)
    console.log('hooks clicked');
  },[props.count])

   return(

    <>
    <h1>Hook state  {counter}</h1>
    <input value={status} onChange={(e)=>setSatus(e.target.value)} />
     <div>
       HOOOOK
           <button onClick={()=>setCounter(counter + 1)}>+</button>
           <button onClick={()=>setCounter(counter - 1)}>-</button>
        </div>
    </>
    

       
        )
    }

export default ReactHooks;