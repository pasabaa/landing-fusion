import React from 'react'

export const Button = ({text, event, size}) => {
  return (
    <button 
        onClick={event} 
        className={`w-${size} text-center place-self-center block font-bold px-3 py-2 border border-blue-500 text-white mt-4 hover:bg-blue-500/10 transition`}>
            {text}
    </button>
  )
}
