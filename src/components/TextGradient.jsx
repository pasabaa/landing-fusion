import React from 'react'

export const TextGradient = ({text}) => {
  return (
    <span className='bg-gradient-to-r from-blue-600 via-infigo-500 to-blue-400 inline-block text-transparent bg-clip-text pb-2'>{text}</span>
  )
}
