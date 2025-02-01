import { Pill } from '@/components/atoms/Pill'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      id="product"
      className="pb-10 pt-[176px] flex flex-col gap-y-10 w-full items-center"
    >
      <div className="flex flex-col gap-y-2 items-center">
        <Pill content="Howdy, we are lovefy" />

        <h1 className="max-w-[563px] text-center text-[2.5rem] leading-[120%] tracking-[-0.8px] font-SatoshiBold text-transparent bg-clip-text bg-gradient-to-r from-[#E12E8F] to-[#0084FF]">
          Create your perfect match the way {`you've`} always dreamed
        </h1>

        <p className="max-w-[646px] text-center text-neutral500 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
          You no longer need to wait for the ideal match, now you can create
          your perfect companion, just the way you want and with just a few
          clicks.
        </p>

        <Link href={'/get-started'}>
          <button className="px-4 mt-8 h-[56px] rounded-[40px] bg-brand500 hover:bg-brand400 transition-colors duration-300 flex items-center justify-center">
            <span className="text-neutral100 font-SatoshiBold leading-[150%] text-[1rem] tracking-[-0.32px]">
              Get Started
            </span>
          </button>
        </Link>
      </div>

      <Image
        alt="Lovefy app preview"
        src="/hero-cellphone.png"
        width={416}
        height={840}
      />
    </section>
  )
}
