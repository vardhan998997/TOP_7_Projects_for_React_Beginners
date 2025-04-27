import React, { useState } from 'react'

const Updateq = () => {
    const[names , setNames] = useState([]);
    const[editname, setEditname] = useState("");

    const Addname = (e) => {
        e.preventDefault();

        if(editname.trim()===""){
            return;
        }
        setNames([...names, editname]);
        setEditname("");
    }

    const Deletename = (index) =>{
        setNames(names.filter((_,i) => i!==index));
    }


  return (
    <div>
        <form>
            <input type="text"
            placeholder='Enter name..'
            required
            value={editname}
            onChange={(e) => setEditname(e.target.value)} />

            <button onClick={Addname} className='bg-blue-500 py-4 px-2 rounded text-white'> Add </button>
        </form>
        {names.map((name,index) => (
            <h1 key={index}>
                <li>{name}</li>
                <button onClick={() => Deletename(index)} className='bg-red-500 px-2 py-4 rounded text-white'>del</button>
            </h1>
        ))}
    </div>
  )
}

export default Updateq
