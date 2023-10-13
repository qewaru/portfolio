import { LuGamepad2 } from 'react-icons/lu'
import { RiComputerLine } from 'react-icons/ri'
import { PiComputerTowerFill } from 'react-icons/pi'
import useSecondCount from '../../../lib/useSecondCount'

const hobbies = [
  {
    icon: <LuGamepad2 size={25} />,
    name: 'Gaming'
  },
  {
    icon: <RiComputerLine size={25} />,
    name: 'Clip editing'
  },
  {
    icon: <PiComputerTowerFill size={25} />,
    name: 'PC building'
  },
]

export default function About() {
  const { timerYears, timerSeconds } = useSecondCount()

  return (
    <section id='about' className="w-full h-screen scroll-mt-32 mb-20 sm:mb-0">
      <div className="flex flex-col items-center gap-20">
        <p className="text-4xl font-bold"><span className="text-accent font-bold">Who</span> am I?</p>
        <div className='flex flex-col items-center gap-7'>
          <div className="w-[50%] text-justify flex flex-col gap-4 sm:gap-2">
            <p className="text-lg">I'm<span className='text-accent-200'> {timerYears}</span><span className='text-sm'>,{timerSeconds}</span> years  old student of the <a className='text-accent-200 hover:underline' href='https://tsi.lv'>Transport and Telecommunication Institute</a> with a passion to Web Development.</p>
            <p>I prefer to learn<span className='text-accent-200'> new things</span>, such as frameworks/languages/libraries, in <span className='text-accent-200'>every</span> project, so you will <span className='text-accent-200'>never</span> catch me coding new app using <span className='text-accent-200'>the same</span> config over and over again.</p>
          </div>
          <div className="flex flex-col gap-3 items-center sm:items-start">
            <p className="text-lg font-bold"><span className="text-accent-200">Hobbies</span> besides programming:</p>
            <ul className='w-[200px] flex flex-col gap-2'>
              {hobbies.map((item, index) => (
                <li key={index} className='flex gap-3 items-center justify-center sm:justify-start '>
                  {item.icon}
                  <p className='text-lg'>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center text-xl py-5 px-3 border-t border-b border-primary/50 relative overflow-hidden shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-background before:animate-[shimmer_3.5s_infinite]'>
            <p className='text-accent-200/60'>'' They ain't belive in us... GOD DID! ''</p>
            <p className='text-accent-200/60'>— DJ Khaled</p>
          </div>
        </div>
      </div>
    </section>
  )
}
