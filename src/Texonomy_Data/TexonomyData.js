import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Data from "./Data.txt";
let obj = {};
const TexonomyData = () => {
  const [nestedArr, setNestedArr] = useState([]);
  const selectRef = useRef([]);
  // for data fetching
  useEffect(() => {
    fetch(Data)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        let splitData = data.split("\n");
        displayData(splitData);
      });
  }, []);
  //call nesting array object generated
  const displayData = (TexonomyData) => {
    TexonomyData.map((item) => {
      let arr = item.split(">").map((el) => el.trim());
      createNestedObject(obj, arr);
    });
    console.log(obj);
    setNestedArr([obj]);
  };
  // created nested object function
  var createNestedObject = function (base, values) {
    for (var i = 0; i < values.length; i++) {
      base = base[values[i]] = base[values[i]] || {};
    }
  };
  // function for dependent dropdown
  const selectHandler = (e,objData, ind) => {
    console.log(objData);
    if (Object.keys(objData).length > 0) {
      if (ind < nestedArr.length) {
        nestedArr.splice(ind + 1);
      }
      nestedArr.push(objData);
    } else {
      alert("Leaf Node Reached");
      if (ind < nestedArr.length) {
        nestedArr.splice(ind + 1);
      }
    }
    setNestedArr([...nestedArr]);
  };
  return (
    <div className="select">
      <h1>Google Textonomy Task</h1>
      {nestedArr.length > 0
        ? nestedArr.map((item, i) => {
            return (
              <select
                className="selectBox"
                onChange={(e) => selectHandler(e, item[e.target.value], i)}
                ref={(ref) => (selectRef.current[i] = ref)}
              > <option selected hidden>select</option>
                {Object.keys(item).map((ele) => {
                  return <option value={ele}>{ele}</option>;
                })}
              </select>
            );
          })
        : ""}
    </div>
  );
};

export default TexonomyData;
