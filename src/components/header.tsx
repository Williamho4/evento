'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Logo from './logo'

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'All events',
    path: '/events/all',
  },
]

export default function Header() {
  const activePathName = usePathname()

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-6 h-full text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                'hover:text-white flex items-center relative transition',
                {
                  'text-white': activePathName === route.path,
                  'text-white/50': activePathName !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathName === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
