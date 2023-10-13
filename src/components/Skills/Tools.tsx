import { tools } from '../../../lib/data'

export default function Tools() {
  return (
    <div className="border-2 border-primary bg-secondary/50 p-5 w-[80%] lg:w-[60%]">
      <div className="w-full flex px-3 py-3">
        <p className='font-bold text-lg w-[50%] text-center'>Purpose</p>
        <p className='font-bold text-lg w-[50%] text-center'>Tool</p>
      </div>
      <ul className="flex flex-col gap-3">
        {tools.map((item, index) => (
          <li key={index} className="flex bg-gradient-to-r from-primary to-primary/30 w-full items-center">
            <div className='flex justify-center w-[50%]'>
                <p>— {item.title}</p>
            </div>
            <div className="flex w-[50%] items-center justify-center gap-3 py-2 px-4 md:mr-2">
              {item.icon}
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}