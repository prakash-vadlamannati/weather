import React,{useEffect, useState} from "react";
import UseDoc from "./final";

export default function DocTitleOne(props)
{

    let [count,SetCount]=useState(2);
    UseDoc(count);

    
    
    useEffect(()=>{

        let user=localStorage.getItem('user1');
        console.log(user);
    },[])




    return(
        <div>
            Doc title one
            <button onClick={()=>SetCount(count+1)}>click once-{count}</button>
        </div>
    )

}