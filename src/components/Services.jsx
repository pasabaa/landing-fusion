import React from 'react'
import uuid from 'react-uuid';
import { Cloud, Data, Ecommerce, Text, Maintenance, Marketing, Mobile, Security, SEO, Web } from '../assets/icons';
import { Card } from './Card';

export const Services = () => {

    const MAX_DISPLAY = 10;

    const services = [
        {
            name: 'Diseño y desarrollo de sitios y aplicaciones web',
            desc: ' Crear sitios web y aplicaciones web personalizadas y funcionales que se ajusten a las necesidades específicas de un cliente.',
            icon: Web
        },
        {
            name: 'Optimización de motores de búsqueda (SEO)',
            desc: 'Mejorar la visibilidad y el ranking de un sitio web en los motores de búsqueda mediante la optimización de contenido, enlaces y otros factores.',
            icon: SEO
        },
        {
            name: 'Integración de comercio electrónico',
            desc: 'Agregar características de comercio electrónico a un sitio web, como la capacidad de realizar compras en línea.',
            icon: Ecommerce
        },
        {
            name: 'Desarrollo de aplicaciones móviles',
            desc: 'Crear aplicaciones móviles personalizadas para dispositivos iOS o Android.',
            icon: Mobile
        },
        {
            name: 'Creación de contenido para sitios web',
            desc: 'Escribir y crear contenido de calidad para sitios web, incluyendo textos, imágenes y videos.',
            icon: Text
        },
        {
            name: 'Mantenimiento y actualización de sitios web',
            desc: 'Realizar cambios y actualizaciones en sitios web existentes para mantenerlos actualizados y seguros.',
            icon: Maintenance
        },
        {
            name: 'Alojamiento web y servicios de nube',
            desc: 'Proporcionar servicios de alojamiento web y almacenamiento en la nube para los sitios web de los clientes.',
            icon: Cloud
        },
        {
            name: 'Análisis de datos y estadísticas de sitios web',
            desc: 'Recolectar y analizar datos para obtener información sobre el rendimiento y el comportamiento de los visitantes de un sitio web.',
            icon: Data
        },
        {
            name: 'Seguridad de sitios web y cumplimiento de normas',
            desc: 'Asegurar la seguridad de un sitio web y cumplir con las normas y regulaciones aplicables.',
            icon: Security
        },
        {
            name: 'Marketing digital y publicidad en línea',
            desc: 'Ayudar a los clientes a promocionar sus sitios web y productos en línea mediante técnicas de marketing digital, publicidad en línea y redes sociales.',
            icon: Marketing
        },
    ]


  return (
    <div className='mt-16'>
        <header>
            <h1 className='text-3xl font-medium'>Servicios</h1>
            <p className='text-lg text-gray-400 mt-2'>Servicios que tenemos para ofrecerte</p>
        </header>
        <div className='mt-4 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8'>
            {
                services.slice(0, MAX_DISPLAY).map(service => {
                    return(
                        <Card key={uuid()} name={service.name} desc={service.desc} icon={service.icon} />
                    )
                })
            }
        </div>
    </div>
  )
}
