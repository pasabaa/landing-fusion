import React from 'react'

export const Footer = () => {
  return (
    <footer className='text-sm text-center py-4'>
        <div className='grid place-content-center'>
            <p className='mt-16'>Fusion Design © {new Date().getFullYear()} </p>
        </div>
    </footer>
  )
}
