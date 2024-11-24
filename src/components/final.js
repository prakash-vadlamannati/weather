import React,{useEffect, useState} from "react";

export default function UseDoc(count)
{
    useEffect(()=>{
        document.title=`doc title  is ${count}`;

    },[count])




}