import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Data from "./Data.txt"
let obj={}
let arr=[];
const TexonomyData = () => {
    const[nestedArr,setNestedArr]=useState([]);
    const selectRef=useRef([]);
    useEffect(()=>{
        fetch(Data)
        .then(function(response){
            return response.text();
        }).then(function (data) {
            let splitData=data.split("\n");
        displayData(splitData);
    })
    },[])
    const displayData=(TexonomyData)=>{
        TexonomyData.map(item=>{
            let arr=item.split(">").map(el=>el.trim());
            createNestedObject(obj,arr);
        })
        console.log(obj);
        setNestedArr([obj]);
    }
    var createNestedObject = function( base, values ) {
        for( var i = 0; i < values.length; i++ ) {
            base = base[ values[i] ] = base[ values[i] ] || {};
        }
    };
    // console.log(nestedArr);
    const selectHandler1=(e)=>{
        select2=[];
        Object.keys(nestedArr[0]).map((item,i)=>{
            if(item==e.target.value){
            let child=Object.values(nestedArr[0])[i];
            // console.log(child);
            Object.keys(child).map(ele=>{
                // console.log(ele);
             select2.push(ele);
            })
            }
        })  
        setSelect2([...select2])
    }
    const selectHandler2=(e)=>{
       nestedArr[0].map(item=>{
        console.log(item);
       })
    }
    const selectHandler=(e)=>{
        console.log(e.target.value);    
        console.log(selectRef.current);
    }
    return (
    <div>
        {/* <button onClick={displayData}>Texonomy Data</button> */}
      {nestedArr.length>0?
      nestedArr.map((item,i)=>{
        return(
        <select onChange={()=>selectHandler(i)}  ref={(ref)=>selectRef.current[i]=ref}>
            {
                 Object.keys(item).map(ele=>{
                   return <option value={ele}>{ele}</option>
                })
            }
        </select>)
       
    })
      :""} 
        {/* <select onChange={selectHandler1}>
          {nestedArr.length>0?
          Object.keys(nestedArr[0]).map(item=>{
            return<option>{item}</option>
          })
          :""}
        </select> */}
        {/* <select onChange={selectHandler2}>
        {select2.map(item=>{
           return <option>{item}</option>
        })}
        </select> */}
       
        
    
    </div>
  )
}

export default TexonomyData