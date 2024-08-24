import React, { useState } from 'react';

function HookCounter3() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
      <form>
        <input
          type="text"
          placeholder='enter your name'
          className='bg-black p-2 rounded-md text-white font-semibold'
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          placeholder='enter your name'
          className='bg-black p-2 m-3 rounded-md text-white font-semibold'
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        {/* <button className='bg-red-500 text-white px-3 py-2 rounded-md font-semibold 
        focus:ring-opacity-65 hover:bg-red-700 ml-3' onClick={update()}>hello</button> */}
        
      </form>
  );
}

export default HookCounter3;
