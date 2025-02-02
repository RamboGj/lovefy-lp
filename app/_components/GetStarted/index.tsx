'use client'

import { Pill } from '@/components/atoms/Pill'
import Link from 'next/link'

export function GetStarted() {
  return (
    <section
      id="getStarted"
      className="py-10 flex flex-col gap-y-10 w-full items-center px-4 lg:px-0"
    >
      <div className="flex flex-col gap-y-2 items-center">
        <Pill content="Get involved" />

        <h2 className="text-center text-[2.5rem] leading-[120%] tracking-[-0.8px] font-SatoshiBold text-brand500">
          Get started for free
        </h2>

        <p className="max-w-[646px] text-center text-neutral500 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
          Create your virtual companion for free during our closed-beta.
        </p>
      </div>

      <Link href={'/get-started'}>
        <button className="px-4 h-[56px] rounded-[8px] bg-brand500 hover:bg-brand400 transition-colors duration-300 flex items-center justify-center">
          <span className="text-neutral100 font-SatoshiBold leading-[150%] text-[1rem] tracking-[-0.32px]">
            Get Started
          </span>
        </button>
      </Link>
    </section>
  )
}
