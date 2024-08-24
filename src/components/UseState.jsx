import React, { Fragment } from "react";
import { useState } from "react";

function main() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count<1){
      alert("less than 0")
    }
    else{
      setCount(count - 1);
    }
    
  };

  return (
    <Fragment>
      <div className=" text-white p-20 bg-black">
        <button className="p-5 bg-white text-teal-600 hover:bg-teal-600 hover:text-white" onClick={increment}>
          +
        </button>
        <span className="p-5">{count}</span>
        <button className="p-5 bg-white text-teal-600  hover:bg-teal-600 hover:text-white" onClick={decrement}>
          -
        </button>
      </div>

      <button className="px-4 py-2 mt-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md
       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={increment}>
        children
      </button>
    </Fragment>
  );
}

export default main;
