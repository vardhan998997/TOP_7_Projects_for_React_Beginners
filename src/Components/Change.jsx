import React, { useState } from 'react'

const Change = () => {
    const [variable , setVariable] = useState(false);
    const [name , setName] = useState("vishnu");

    const ClickHere = () =>{
        if(name=="vishnu"){
            setName((variable) => "Nitin");
        }else{
            setName((variable) => "vishnu");
        }
    }

  return (
    <div className='bg-blue-300 rounded text-black mt-12 ml-6 mr-7 p-6 w-60 text-center'>
    <h1 className='text-white text-2xl font-bold mb-4'>Changeble</h1>
    <div className='bg-blue-500 text-white px-10 py-5 rounded mb-4'>
        Name: {name}
    </div>
    <button 
        onClick={ClickHere} 
        className='bg-green-500 text-white px-6 py-2 rounded mr-4 mb-6'
    >
        Change
    </button>
</div>
  )
}

export default Change
