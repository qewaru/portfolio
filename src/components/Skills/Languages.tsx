import { skills } from '../../../lib/data'

export default function Languages() {
  const screenSmall = window.innerWidth < 426
  return (
    <div className="border-2 border-primary bg-secondary/50 p-5 w-[80%] lg:w-[60%]">
      <div className="w-full flex px-3 py-3">
        <div className='w-[220px] hidden sm:block' />
        <div className='flex justify-between w-full'>
          <p className='font-bold text-lg'>Novice</p>
          <p className='font-bold text-lg'>Expert</p>
        </div>
      </div>
      <ul className="flex flex-col gap-3">
        {skills.map((item, index) => (
          <li key={index} className="flex bg-secondary w-full">
            <div style={{width: screenSmall ? `${item.progress}` : '230px'}} className="flex items-center gap-3 py-2 px-4 bg-gradient-to-r from-primary to-primary/50 sm:bg-primary/40 font-bold">
              {item.icon}
              <p style={{color: `${item.color}`}}>{item.name}</p>
            </div>
            <div className="hidden sm:block h-auto w-full relative">
              <div style={{width: `${item.progress}`}} className='py-2 px-4 h-full bg-gradient-to-r from-primary to-primary/50' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
