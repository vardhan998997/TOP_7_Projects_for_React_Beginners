import React from 'react'

const Styles = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-yellow-100'>
        <div className='bg-white p-10 w-126 shadow-lg rounded-lg'>
            <h1 className='text-2xl text-bold mb-5 text-blue-700 stroke-yellow-50'>I am Always Look Forward to Learn</h1>
            <h2 className='w-85 shadow-md bg-green-100 ml-2'>Definetly u will reach ur desire gods plan!</h2>
            <form>
            <input className='mt-3 ml-2 w-98 h-6 shadow-lg' type="text" placeholder='Enter the something... ' required />
            </form>
        </div>
    </div>
  )
}

export default Styles