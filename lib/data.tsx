import React from 'react'
import { IoLogoWindows, IoLogoJavascript, IoMdSchool } from 'react-icons/io'
import { SiFigma, SiMongodb, SiYoutube, SiVercel, SiReact, SiVirtualbox,  } from 'react-icons/si'
import { BsGit, BsFiletypeSql, BsPersonWorkspace } from 'react-icons/bs'
import { BiSolidSchool, BiLogoLinkedin, BiLogoGithub, BiLogoInstagramAlt, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandVscode } from 'react-icons/tb'
import { FaCloud, FaJava, FaLinux, FaNetworkWired, FaPython } from 'react-icons/fa'

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
        name: 'Kotobe',
        src: '../1.png',
        links: {web: 'https://kotobe.bebxsh.org', github: ''},
        languages: ['Next.js', 'Full-Stack', 'REST API', 'Responsive'],
        content: 
            <p className='text-justify'>
                My latest project is a messenger built on 
                <span className='text-accent-200'> Next.js</span>.
                The project was made with passion and creativity to help people move away from greedy companies that hide common features behind paywalls. 
                <span className='text-accent-200'> The features </span> 
                I'm most proud of are 
                <span className='text-accent-200'> profile customization </span> 
                (gifs/images as profile picture), 
                <span className='text-accent-200'> encryption methods</span>, 
                and
                <span className='text-accent-200'> design </span>. 
                You can find more information about this project on its homepage.
            </p>
    },
    {
        name: 'Win Server',
        src: '../2.png',
        links: {web: 'https://github.com/qewaru/win-server-setup', github: 'https://github.com/qewaru/win-server-setup'},
        languages: ['Networking', 'System Administration', 'Virtual Machine', 'Windows Server 2022', 'Guide'],
        content: 
        <p className='text-justify'>
            I made a 
            <span className='text-accent-200'> guide </span> 
            for setting up and configuring the 
            <span className='text-accent-200'> Windows Server 2022 </span> 
            with 
            <span className='text-accent-200'> AD DS</span>,
            <span className='text-accent-200'> DNS</span>,
            <span className='text-accent-200'> GPO</span>, and
            <span className='text-accent-200'> automatition</span>.
            Everything was done on QEMU 
            <span className='text-accent-200'> Virutal Machine </span> 
            (Virt-Manager).
        </p>
    },
    {
        name: 'itkbroke',
        src: '../3.png',
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
] as const

export const skills = [
  { style: '1', name: 'JavaScript', progress: '85%', Icon: IoLogoJavascript, color: '#EACB32' },
  { style: '2', name: 'TypeScript', progress: '83%', Icon: BiLogoTypescript, color: '#2D79C7' },
  { style: '4', name: 'JS Frameworks', progress: '80%', Icon: SiReact, color: '#62DAFC' },
  { style: '8', name: 'Linux', progress: '80%', Icon: FaLinux, color: '#D38D00' },
  { style: '3', name: 'Windows', progress: '75%', Icon: IoLogoWindows, color: '#fff' },
  { style: '5', name: 'Cloud Services', progress: '75%', Icon: FaCloud, color: '#FF9A00' },
  { style: '6', name: 'Networking', progress: '75%', Icon: FaNetworkWired, color: '#23c918' },
  { style: '7', name: 'Virtualization', progress: '75%', Icon: SiVirtualbox, color: '#18c9ae' },
  { style: '9', name: 'Git', progress: '70%', Icon: BsGit, color: '#F05133' },
  { style: '10', name: 'Python', progress: '60%', Icon: FaPython, color: '#3F7DAF' },
  { style: '11', name: 'MySQL', progress: '40%', Icon: BsFiletypeSql, color: '#FFA618' },
  { style: '12', name: 'Java', progress: '40%', Icon: FaJava, color: '#EB2025' },
] as const
 
export const tools = [
    { title: 'to use', name: 'Linux', icon: React.createElement(FaLinux) },
    { title: 'to code', name: 'VSCode / IntelliJ / Visual Studio', icon: React.createElement(TbBrandVscode) },
    { title: 'to deploy', name: 'Vercel / Railway / AWS / Cloudflare', icon: React.createElement(SiVercel) },
    { title: 'to store', name: 'MongoDB / MySQL', icon: React.createElement(SiMongodb) },
    { title: 'to design', name: 'Figma / Adobe Illustrator ', icon: React.createElement(SiFigma) },
    { title: 'to learn', name: 'YouTube / GitHub', icon: React.createElement(SiYoutube) },
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
