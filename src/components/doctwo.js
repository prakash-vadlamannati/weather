import React,{useEffect, useState} from "react";
import UseDoc from "./final";

export default function DocTitleTwo(props)
{



    let [count,SetCount]=useState(0);
    UseDoc(count);

   

    return(
        <div>
            Doc title two
            <button onClick={()=>SetCount(count+1)}>click two-{count}</button>
        </div>
    )

}