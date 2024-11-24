import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetRequestFun(props) {
  const [tododata, Settododata] = useState([]);
  const [postdata, Setpostdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => Settododata(res.data.filter(item => item.userId === 1)))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => Setpostdata(data.filter(item => item.userId === 1)))
      
  }, []);
  
  


  return (
    <div>
      <div>
        <label >select todo:</label>
        <select >
          {tododata.map((item) => (
            <option >
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label >select post:</label>
        <select >
          {postdata.map((item) => (
            <option >
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
