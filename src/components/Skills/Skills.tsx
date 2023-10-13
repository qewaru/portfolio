import Languages from "./Languages"
import Tools from "./Tools"

export default function Skills() {
  return (
    <section id="skills" className="w-full h-full sm:mt-0 mt-40 scroll-mt-32">
      <div className="flex flex-col gap-5 items-center">
        <p className="text-4xl font-bold"><span className="text-accent">Skill</span>set</p>
        <div className='pt-5'>
          <p className='text-xl'>Languages and frameworks</p>
        </div>
        <Languages />
        <div className='pt-10'>
          <p className='text-xl'>Most-used tools</p>
        </div>
        <Tools />
      </div>
    </section>
  )
}
