'use client'

import { LogoLong } from '@/components/@icons/logo-long'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    setCurrentHash(window.location.hash)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navLinks = [
    {
      label: 'Product',
      href: '#product',
    },
    {
      label: 'Features',
      href: '#features',
    },
    {
      label: 'Pricing',
      href: '#pricing',
    },
    {
      label: 'FAQ',
      href: '#faq',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any, href: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(href) as HTMLElement
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setCurrentHash(href)
  }

  return (
    <header className="max-w-[1440px] inset-x-0 mx-auto fixed py-8 px-16 bg-neutral100 flex items-center justify-between z-30">
      <LogoLong />

      <nav className="hidden lg:flex">
        <ul className="flex gap-x-2 p-2">
          {navLinks.map(({ href, label }) => {
            const active = href === currentHash

            return (
              <li key={label}>
                <div
                  onClick={(e) => {
                    console.log(typeof e)
                    handleClick(e, href)
                  }}
                  data-active={active}
                  className="w-fit group px-6 py-4 bg-alphaWhite08 backdrop-blur-[8px] rounded-[40px] flex justify-center items-center transition-all duration-500 data-[active=true]:bg-brand100 hover:cursor-pointer data-[active=false]:hover:bg-alphaBlack04"
                >
                  <span className="w-0 h-0 rounded-full bg-brand500 mr-2 group-data-[active=true]:h-1 group-data-[active=true]:w-1 transition-all duration-300" />
                  <span className="text-neutral600 font-SatoshiBold leading-[150%] tracking-[-0.32px] text-[1rem] group-data-[active=true]:text-brand500">
                    {label}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-x-6">
        <Link href={'/sign-in'}>
          <strong className="font-SatoshiBold text-neutral600 leading-[150%] text-[1rem] tracking-[-0.32px] hover:text-neutral500 transition-colors duration-300 ">
            Log In
          </strong>
        </Link>

        <Link href={'/get-started'}>
          <button className="px-4 h-[56px] rounded-[40px] bg-brand500 hover:bg-brand400 transition-colors duration-300 flex items-center justify-center">
            <span className="text-neutral100 font-SatoshiBold leading-[150%] text-[1rem] tracking-[-0.32px]">
              Get Started
            </span>
          </button>
        </Link>
      </div>
    </header>
  )
}
