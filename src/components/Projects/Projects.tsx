import { useState } from 'react'
import { tabs } from '../../../lib/data'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
    const [ toggle, setToggle ] = useState('itkbroke')
    
    const handleSwitch = (name: string) => {
        setToggle(name)
    }

  return (
    <section id='projects' className='w-full h-screen flex flex-col items-center scroll-mt-32 mb-20 md:mb-0'>
        <p className='text-4xl font-bold pb-20'>My recent <span className='text-accent'>projects</span></p>
        <div className='flex justify-center relative w-full'>
            <div className='absolute z-10 left-0 w-[20%] h-full bg-background' />
            <div className='container flex flex-col semimd:flex-row justify-center gap-3 semimd:h-[380px]'>
                <div className='flex flex-row semimd:flex-col z-20 shadow-slider h-full justify-between px-5 py-3 border-b semimd:border-r semimd:border-b-0 border-accent/20 sm:border-accent'>
                    {tabs.map((item, index) => (
                        <div key={index} onClick={() => handleSwitch(item.name)} className={`flex items-center justify-center h-[50px] w-[120px] sm:h-[70px] md:w-[150px] md:h-[70px] hover:transition-all hover:duration-150 hover:bg-accent/70 cursor-pointer ${toggle === item.name ? 'bg-accent' : 'bg-primary'}`}>
                            <p className='text-xl'>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col semimd:flex-row w-full relative'>
                    {tabs.map((item, index) => (
                        <div key={index} className={`flex flex-col-reverse md:flex-row gap-3 md:top-[50px] semimd:top-0 absolute transition duration-500 ease-out justify-around items-center md:items-start lg:items-center transform ${toggle === item.name ? 'translate-x-0 opacity-100' : 'translate-x-[-100%] opacity-0'}`}>
                            <div className='flex flex-col gap-2 max-w-[400px] w-full md:w-[40%] z-10 px-3 sm:px-0'>
                                <p className='text-lg font-bold'>{item.name}</p>
                                <div className='py-3'>
                                    {item.content}
                                </div>
                                <ul className='flex flex-wrap gap-2 text-sm justify-center'>
                                    {item.languages.map((item, index) => (
                                        <li key={index} className='py-1 px-2 bg-primary/50 rounded-full'>{item}</li>
                                    ))}
                                </ul>
                                <div className='flex justify-center gap-5 pt-2'>
                                    <a href={item.links.web} className='p-2 flex items-center justify-center border-2 border-primary rounded-full hover:transition-all hover:duration-150 hover:bg-primary'>
                                        <FiExternalLink size={20} /> 
                                    </a>
                                    <a href={item.links.github} className='p-2 flex items-center justify-center border-2 border-primary rounded-full hover:transition-all hover:duration-150 hover:bg-primary'>
                                        <FiGithub size={20} /> 
                                    </a>
                                </div>
                            </div>
                            <img src={item.src} className='border border-accent w-[70%] md:w-[50%]' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
