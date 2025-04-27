import React, { useEffect, useRef, useState } from 'react'

const Sample = () => {
    const[name , setName] = useState('');
    const[temp , setTemp] = useState('');
    const countrender = useRef(1);

    useEffect(() => {
      countrender.current = countrender.current + 1;
    })


    const Modify = () => {
        setName(temp); 
    }

  return (
    <div>
        <input value={temp} onChange={e => setTemp(e.target.value)} />
        <h1>My name is : {name} </h1>
        <h1>My page is render :  {countrender.current} times</h1>
        <button onClick={Modify}>Done</button>
    </div>
  )
}

export default Sample
