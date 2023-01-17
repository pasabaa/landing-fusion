import React from 'react'

export const Card = ({icon, name, desc}) => {
return (
<div className='border border-gray-800 rounded-lg p-6 bg-blue-500/5'>
    <img width={50} className='mb-4' src={icon} alt={name} />
    <h2 className='font-semibold'>{name}</h2>
    <p className='mt-4 text-gray-400'>{desc}</p>
</div>
)
}