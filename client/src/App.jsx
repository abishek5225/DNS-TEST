import { useState } from 'react'
import './App.css'
import React from 'react';


const quotes= [
  "If you are god, why is there suffering for you?",
  "This business eating, sleeping, sex life and defending this is also the animals business and you are doing the same.But the advantage of human body is you can realize god",

]
function App() {
  const[quote, setquote]= useState(quotes[0]);
  const handlequote=()=>{
    setquote(quotes[1])
  }

  return (
    <>
      <div className='flex item-center'>
        {quote}
      </div>

      <button onClick={handlequote} className='bg-gray-500 px-4 py-2 rounded-full mt-12 text-white'>Click here</button>
    </>
  )
}

export default App
