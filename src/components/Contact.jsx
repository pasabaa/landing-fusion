import React from 'react'
import { Button } from './Button'
import { TextGradient } from './TextGradient'

export const Contact = () => {
return (
<div className='mt-16 relative h-full flex flex-col items-center justify-center'>
    <div className='relative mx-auto w-full xl:w-6/12 lg:w-5/12 md:w-10/12'>
        <header className='text-center'>
            <h1 className='text-6xl font-bold'><TextGradient text={'Contacto'}/></h1>
            <p className='text-lg text-gray-400 mt-2'>Cotiza o ponte en contacto con nosotros.</p>
        </header>
        <div>
            <form className="bg-blue-500/5 p-6 rounded-lg mt-4">
                <div className="mb-4">
                    <label className="block font-medium mb-2">Nombre</label>
                    <input className="bg-black border border-gray-800 p-2 w-full text-white" type="text" placeholder="John Doe"
                        required />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2">Correo electrónico</label>
                    <input className="bg-black border border-gray-800 p-2 w-full text-white" type="email"
                        placeholder="johndoe@example.com" required />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2">Tipo de projecto</label>
                    <select className="bg-black border border-gray-800 p-2 w-full text-white">
                        <option>Sitio web</option>
                        <option>Rediseño</option>
                        <option>E-Commerce</option>
                        <option>Aplicación Móvil</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2">Descripción del proyecto</label>
                    <textarea className="bg-black border border-gray-800 p-2 w-full text-white"
                        placeholder="Describa brevemente su proyecto"></textarea>
                </div>
                <div className="mb-4 flex items-center">
                    <input className="mr-2" type="checkbox" required />
                    <label className="text-gray-400 text-sm">Acepto los términos y condiciones</label>
                </div>
                <Button size={'full'} text={'Enviar'}/>
            </form>

        </div>
    </div>
</div>
)
}