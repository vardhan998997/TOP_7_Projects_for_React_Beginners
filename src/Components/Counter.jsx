import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [value , setValue] = useState(() => {
        const savedValue = localStorage.getItem('counterValue');
        return savedValue ? parseInt(savedValue, 10) : 0;
    })

    useEffect(() => {
        localStorage.setItem('counterValue', value);
    },[value]);

    const Increment = () => {
        setValue((prevIndex) => prevIndex+1);
    }

    const Decrement = () => {
        setValue((prevIndex) => prevIndex-1);
    }



    return (
        <div className='bg-blue-300 rounded text-black mt-12 ml-6 mr-7 p-6 w-60 text-center'>
            <h1 className='text-white text-2xl font-bold mb-4'>Counter</h1>
            <div className='bg-blue-500 text-white px-10 py-5 rounded mb-4'>
                Value: {value}
            </div>
            <button 
                onClick={Increment} 
                className='bg-green-500 text-white px-6 py-2 rounded mr-4 mb-6'
            >
                Increment
            </button>
            <button 
                onClick={Decrement} 
                className='bg-red-500 text-white px-5 py-2 mr-3 rounded'
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;