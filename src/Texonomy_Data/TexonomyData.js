import React, { useEffect, useState } from 'react'
import Data from "./Data.txt"
const TexonomyData = () => {
    const[TexonomyData,setTexonomyData]=useState([]);
    const[MainCat,setMaincat]=useState([]);
    useEffect(()=>{
        fetch(Data)
        .then(function(response){
            return response.text();
        }).then(function (data) {
            let splitData=data.split("\n");
            // console.log(splitData);
        setTexonomyData(splitData)
    })
    },[])
    const displayData=()=>{
        let arr=[];
        console.log(TexonomyData);
        TexonomyData.map(item=>{
            if(!item.includes(">"))
            {
              arr.push(item);
            }

        })
        setMaincat([...arr]);
    }
    console.log(MainCat);
    const select_category=()=>{
        console.log(TexonomyData);
        
    }
    return (
    <div>
        <button onClick={displayData}>Texonomy Data</button>
        <select onChange={select_category}>
        {MainCat.map(item=>{
        return(<>
        <option>{item}</option>
       
        </>)
    })}
        </select>
    
    </div>
  )
}

export default TexonomyData