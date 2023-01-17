import React, { useState } from 'react'
import { Button } from './Button'
import { TextGradient } from './TextGradient'

export const Hero = () => {

return (
<div className='p-8 min-h-screen grid place-content-center text-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-zinc-900/40 to-black'>
    <h1 className='text-8xl font-bold'>Fusion <TextGradient text={'Design'} />
    </h1>
    <p className='mt-2 text-lg'>Crea asombrosos proyectos con la presencia de la mejor tecnología.</p>
    <Button text={'Cotizar Proyecto'}/>
</div>
)
}