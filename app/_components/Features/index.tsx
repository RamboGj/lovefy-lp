import { ClockIcon } from '@/components/@icons/clock-icon'
import { EmojiIcon } from '@/components/@icons/emoji-icon'
import { LockIcon } from '@/components/@icons/lock-icon'
import { MagicIcon } from '@/components/@icons/magic-icon'
import { Pill } from '@/components/atoms/Pill'

export function Features() {
  const features = [
    {
      icon: <LockIcon />,
      title: 'Safe & Secure',
      description:
        'Lovefy guarantees security and data privacy. Your data is solely used for product optimization and is never shared with third parties.',
      className: 'col-span-1 row-span-2 h-full',
    },
    {
      icon: <LockIcon />,
      title: 'GDPR Secure',
      description:
        'Lovefy guarantees security and data privacy. Your data is solely used for product optimization and is never shared with third parties.',
      className: 'col-span-1 row-span-1',
    },
    {
      icon: <EmojiIcon />,
      title: 'Judgement-free',
      description:
        'Your Al companion for romance, companionship, and endless adventure! Chat, laugh, and grow together in a judgment-free space.',
      className: 'col-span-1 row-span-1',
    },
    {
      icon: <ClockIcon />,
      title: '24/7',
      description:
        'Com a Lovefy você não precisa mais se sentir pressionado em responder na hora, aqui você responde quando quiser, em qualquer lugar e não será julgado.',
      className: 'col-span-1 row-span-1',
    },
    {
      icon: <MagicIcon />,
      title: 'Customized behavior',
      description:
        "Only you know what you really want, and that's why you can customize your entire digital companion experience—from curves to personality traits.",
      className: 'col-span-1 row-span-1',
    },
  ]

  return (
    <section
      id="features"
      className="py-10 flex flex-col gap-y-10 w-full items-center"
    >
      <div className="flex flex-col gap-y-2 items-center">
        <Pill content="What we offer" />

        <h2 className="max-w-[727px] text-center text-[2.5rem] leading-[120%] tracking-[-0.8px] font-SatoshiBold text-transparent bg-clip-text bg-gradient-to-r from-[#E12E8F] to-[#0084FF]">
          Tons of features and lots of opportunities
        </h2>

        <p className="max-w-[646px] text-center text-neutral500 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
          You no longer need to wait for the ideal match, now you can create
          your perfect companion, just the way you want and with just a few
          click
        </p>
      </div>

      <div className="grid grid-cols-[448px,1fr,1fr] grid-rows-[360px,360px] gap-8">
        {features.map(({ className, description, icon, title }) => {
          return (
            <div
              key={title}
              className={`${className} p-8 bg-neutral100 border border-alphaBlack08 rounded-[16px] flex flex-col`}
            >
              {icon}

              <div className="mt-auto flex flex-col gap-y-2">
                <h3 className="text-feedbackNeutral500 text-[1.5rem] font-SatoshiBold leading-[133.33%] tracking-[-0.48px]">
                  {title}
                </h3>

                <p className="text-neutral500 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
                  {description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
