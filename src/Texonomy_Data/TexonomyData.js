import React, { useEffect, useState } from 'react'
import Data from "./Data.txt"
const TexonomyData = () => {
    const[TexonomyData,setTexonomyData]=useState([]);
    const[MainCat,setMaincat]=useState([]);
    const[nestedArr,setNestedArr]=useState([]);
    let obj={}
    let arr=[];
    useEffect(()=>{
        fetch(Data)
        .then(function(response){
            return response.text();
        }).then(function (data) {
            let splitData=data.split("\n");
        setTexonomyData(splitData)
    })
    },[])
    const displayData=()=>{
        // let arr=[];
        TexonomyData.map(item=>{
            let arr=item.split(">");
            createNestedObject(obj,arr);
            
            // if(!item.includes(">"))
            // {
            //   arr.push({[item]:{}});
            // }
        })
        // setNestedArr()
        console.log(obj);
        setNestedArr([obj]);
        setMaincat([...arr]);
    }
    var createNestedObject = function( base, values ) {
        for( var i = 0; i < values.length; i++ ) {
            base = base[ values[i] ] = base[ values[i] ] || {};
        }
    };
    console.log(nestedArr)
    console.log(obj);
    // const select_category=(e)=>{
    //     console.log(MainCat[0])
    //     let cat1=[]
    //     TexonomyData.map(item=>{   
    //         if(item.slice(0,item.indexOf('>')).match(e.target.value))
    //         {                 
    //             let index=item.slice(item.indexOf('>')+2)
    //             let catItem=index.slice(0,index.indexOf(">"));
    //             if(!cat1.includes(catItem)){
    //                cat1.push(catItem);
    //             }
    //         } 
        //  let cat2=index.slice(0,index.indexOf('>'))
        //  if(!arr.includes(cat2)){
        //     arr.push(cat2);
        //  }
        //  else{

        //  }
        // })
        // let cat2=[]
        // MainCat.map(item=>{
        //     // console.log(Object.keys(item).toString())
       
        //     if(Object.keys(item).toString()==e.target.value)
        //     {
        //         console.log(Object.keys(item).toString());
        //         cat1.map(ele=>{
        //             console.log(ele);
        //             if(!cat2.includes(ele))
        //             {
        //                 cat2.push({[ele]:[]})
        //             }
        //             // item.push({[ele]:[]})
        //             // Object.assign(Object.keys(item).toString(),)
        //         })
        //        console.log(item,"",cat2 );
        //     }
        // })
        // console.log();
    
    // }
    return (
    <div>
        <button onClick={displayData}>Texonomy Data</button>
        <select>
        {MainCat.map(item=>{
            // console.log(Object.keys(item).toString())
        return(<>
        <option>{Object.keys(item).toString()}</option>
       
        </>)
    })}
        </select>
    
    </div>
  )
}

export default TexonomyData