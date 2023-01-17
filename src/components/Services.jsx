import React from 'react'
import uuid from 'react-uuid';
import { services, microServices } from '../data/servicesData';
import 'react-multi-carousel/lib/styles.css';
import { Card } from './Card';

export const Services = () => {

  return (
    <div className='mt-16'>
        <header>
            <h1 className='text-3xl font-medium'>Servicios</h1>
            <p className='text-lg text-gray-400 mt-2'>Servicios que tenemos para ofrecerte</p>
        </header>
        <div className='mt-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-8'>
            {
                services.map(service => {
                    return(
                        <Card key={uuid()} name={service.name} desc={service.desc} icon={service.icon} />
                    )
                })
            }
        </div>
        <div className='mt-8 pb-4 scroll-smooth rounded-lg flex items-center justify-between gap-8 w-full overflow-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-blue-500/10'>
                {
                    microServices.map(microService => {
                        return(
                            <div className='border pt-4 px-4 border-gray-800 rounded-lg bg-blue-500/5 min-w-fit flex items-center justify-center h-full'>
                                <img width={50} className='mb-4' src={microService.icon} alt={microService.name} />
                            </div>
                        )
                    })
                }
        </div>

    </div>
  )
}
