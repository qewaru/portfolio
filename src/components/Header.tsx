import { links } from '../../lib/data'

export default function Header() {
  return (
    <header className="fixed z-40 flex justify-center items-center w-full h-[50px] bg-background">
        <ul className="flex gap-10 text-lg font-bold">
            {links.map((item, index) => (
                <li key={index} className="relative">
                    <a href={item.hash} className="bottom-0 w-full h-[0px] relative hover:border-b-2 hover:transition hover:animate-[pulsate_1.25s_infinite] hover:duration-1000 hover:border-accent">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </header>
  )
}
