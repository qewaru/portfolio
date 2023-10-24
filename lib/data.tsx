import React from 'react'
import { IoLogoWindows, IoLogoJavascript, IoMdSchool } from 'react-icons/io'
import { TbBrandVscode } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { BiSolidSchool, BiLogoLinkedin, BiLogoGithub, BiLogoInstagramAlt } from 'react-icons/bi'
import { BsGit, BsFiletypeSql, BsPersonWorkspace } from 'react-icons/bs'
import { SiFigma, SiMongodb, SiYoutube, SiExpress, SiVercel, SiNextdotjs, SiTailwindcss, SiCss3, SiReact, SiTypescript,  } from 'react-icons/si'
// import { SiRender, SiStackoverflow } from 'react-icons/si'

export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: 'About',
        hash: '#about'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'Skills',
        hash: '#skills'
    },
] as const

export const contact = [
    {icon: React.createElement(BiLogoLinkedin), link: 'https://www.linkedin.com/in/artūrs-šaicāns/'},
    {icon: React.createElement(BiLogoInstagramAlt), link: 'https://www.instagram.com/qewaru/'},
    {icon: React.createElement(BiLogoGithub), link: 'https://github.com/qewaru'},
] as const

export const tabs = [
    {
        name: 'itkbroke',
        src: '../1.png',
        links: {web: 'https://itkbroke.vercel.app', github: 'https://github.com/qewaru/itkbroke'},
        languages: ['Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'RESTful API', 'Responsive'],
        content: 
        <p className='text-justify'>My last project is an Online-shop built on 
            <span className='text-accent-200'> Next.js </span> 
            and 
            <span className='text-accent-200'> Node.js. </span> 
            It seems like a most common web store, but it has a feature for a users to 
            <span className='text-accent-200'> sign up</span>, 
            <span className='text-accent-200'> make</span> their own brand and 
            <span className='text-accent-200'> sell </span> 
            clothing directly from my app. Another feature for a developers or owners of a webiste -
            <span className='text-accent-200'> admin dashboard</span>, where admins can 
            <span className='text-accent-200'> edit/delete/verify </span>items, brands and users. In this project Next.js takes care only of a client side and Node.js is doing all the backend work.</p>
    },
    {
        name: 'Dota2Track',
        src: '../2.png',
        links: {web: 'https://dota2track.vercel.app', github: 'https://github.com/qewaru/dota2track'},
        languages: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API', 'Responsive'],
        content: <p className='text-justify'>Main purpose of this app - fast information searching about professional players in DoTA 2 videogame. New version of my old project <a href='https://dotatrack.onrender.com/?' className='underline text-accent'>DotaTrack</> built on <span className='text-accent-200'> Next.js </span> with <span className='text-accent-200'> TypeScript </span>. Two main data sources are - <a href='https://www.opendota.com' className='underline text-accent'>OpenDota API</> and <a href='https://github.com/odota/dotaconstants' className='underline text-accent'>DotaConstants Repo</>. </p>
    },
    {
        name: 'ChatMe',
        src: '../3.png',
        links: {web: 'http://chatme.42web.io/index.php', github: 'https://github.com/qewaru/chatme'},
        languages: ['HTML', 'PHP', 'CSS', 'MySQL'],
        content: <p className='text-justify'>Small and simple messenger built on HTML and PHP, where users can create an account and chat with other users that are online on a website. "Purest" webiste without any frameworks or libraries.</p>
    },
] as const

export const skills = [
  { style: '1', name: 'Node.js', progress: '98%', icon: React.createElement(FaNodeJs), color: '#9ecc97' },
  { style: '2', name: 'Next.js', progress: '93%', icon: React.createElement(SiNextdotjs), color: '#eee7f9' },
  { style: '3', name: 'Express.js', progress: '91%', icon: React.createElement(SiExpress), color: '#eee7f9' },
  { style: '4', name: 'Vanilla JS', progress: '90%', icon: React.createElement(IoLogoJavascript), color: '#ffffa8' },
  { style: '5', name: 'Tailwind CSS', progress: '89%', icon: React.createElement(SiTailwindcss), color: '#80e2ff' },
  { style: '6', name: 'Vanilla CSS', progress: '88%', icon: React.createElement(SiCss3), color: '#7588ff' },
  { style: '7', name: 'React.js', progress: '87%', icon: React.createElement(SiReact), color: '#99f6ff' },
  { style: '8', name: 'MongoDB', progress: '80%', icon: React.createElement(SiMongodb), color: '#97cca2' },
  { style: '9', name: 'TypeScript', progress: '70%', icon: React.createElement(SiTypescript), color: '#91ccff' },
  { style: '10', name: 'Git', progress: '50%', icon: React.createElement(BsGit), color: '#dbb797' },
  { style: '11', name: 'MySQL', progress: '40%', icon: React.createElement(BsFiletypeSql), color: '#97dbcb' },
] as const
 
export const tools = [
    { title: 'to use', name: 'Windows / Linux', icon: React.createElement(IoLogoWindows) },
    { title: 'to code', name: 'VSCode', icon: React.createElement(TbBrandVscode) },
    { title: 'to deploy', name: 'Vercel / Render', icon: React.createElement(SiVercel) },
    { title: 'to store', name: 'MongoDB', icon: React.createElement(SiMongodb) },
    { title: 'to design', name: 'Figma', icon: React.createElement(SiFigma) },
    { title: 'to learn', name: 'YouTube / StackOverflow', icon: React.createElement(SiYoutube) },
] as const


const date = new Date().getFullYear()
export const experience = [
    {
        // title: 'School',
        name: 'Riga 22nd secondary school',
        duration: '2010 - 2022',
        degree: 'Secondary Education',
        icon: React.createElement(IoMdSchool),
        content: ''
    },
    {
        // title: 'University',
        name: 'Transport and Telecommunication Institute',
        duration: '2023 - 2028',
        degree: 'Bachelor of Natural Sciences in Computer Science',
        icon: React.createElement(BiSolidSchool),
        content: ''
    },
    {
        // title: 'Work',
        name: 'Your company',
        duration: `${date} - future`,
        degree: 'Junior Web Developer',
        icon: React.createElement(BsPersonWorkspace),
        content: ''
    },
] as const
