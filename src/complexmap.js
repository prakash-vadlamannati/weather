import React from "react";

export default function ArrayFunctions(props)
{
const company=[
        {
            name:'Prakash',
            code:'IN1',
            Bags:['Liveya','ISI','GUGARAth']

        },
        {
            name:'satya',
            code:'IN2',
            Bags:['21','55','66']

        },
        {
            name:'sai',
            code:'USSR',
            Bags:['c1','c2','c3']

        }
    ]
    localStorage.setItem("user","company")
    localStorage.setItem("user1","Prakash")
    
       

    return(

        <div>
        

            <select>
                {company.map((item,i)=>(
                    <option>{item.code}</option>
                ))}
            </select><br></br>

            <select>
                {company.map((item,i)=>(
                    <option>{i}</option>
                ))}
            </select>

            
        </div>
    )

}