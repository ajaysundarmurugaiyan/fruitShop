import React, { useState } from "react";

const Filters = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div>
      <section className="my-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around">
        <button onClick={()=>setSelectedItem(1)} className={`btnstyle ${selectedItem===1 ? 'bg-yellow-500 text-white' : 'text-slate-500'}`}>Latest</button>
        <button onClick={()=>setSelectedItem(2)} className={`btnstyle ${selectedItem===2 ? 'bg-yellow-500 text-white' : 'text-slate-500'}`}>Best Seller</button>
        <button onClick={()=>setSelectedItem(3)} className={`btnstyle ${selectedItem===3 ? 'bg-yellow-500 text-white' : 'text-slate-500'}`}>Special</button>
      </section>
    </div>
  );
};

export default Filters;
