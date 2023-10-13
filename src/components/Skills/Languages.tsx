import { skills } from '../../../lib/data'

export default function Languages() {
  return (
    <div className="border-2 border-primary bg-secondary/50 p-5 w-[80%] lg:w-[60%]">
      <div className="w-full flex  px-3 py-3">
        <div className='w-[220px]' />
        <div className='flex justify-between w-full'>
          <p className='font-bold text-lg'>Novice</p>
          <p className='font-bold text-lg'>Expert</p>
        </div>
      </div>
      <ul className="flex flex-col gap-3">
        {skills.map((item, index) => (
          <li key={index} className="flex bg-secondary w-full">
            <div className="flex items-center gap-3 py-2 px-4 bg-primary/40 font-bold w-[230px]">
              {item.icon}
              <p style={{color: `${item.color}`}}>{item.name}</p>
            </div>
            <div className="h-auto w-full relative">
              <div style={{width: `${item.progress}`}} className='py-2 px-4 h-full bg-gradient-to-r from-primary to-primary/50' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
