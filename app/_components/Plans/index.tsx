import { CashIcon } from '@/components/@icons/cash-icon'
import { Pill } from '@/components/atoms/Pill'
import Image from 'next/image'

export function Plans() {
  const plans = [
    {
      bestChoice: false,
      title: 'Freemium',
      price: '$0.00',
      priceLabel: '',
      features: [
        {
          icon: <CashIcon />,
          content: 'Start with +3000 chips',
        },
        {
          icon: <CashIcon />,
          content: '600 free chips each month',
        },
        {
          icon: <CashIcon />,
          content: 'Create AI character for you',
        },

        {
          icon: <CashIcon />,
          content: 'Hot role-play chatting',
        },
        {
          icon: <CashIcon />,
          content: 'Romantic voice messages',
        },
        {
          icon: <CashIcon />,
          content: 'Spicy photos',
        },
      ],
      cta: 'Choose this plan',
    },
    {
      bestChoice: false,
      title: '3 Months Plan',
      price: '$9.99',
      priceLabel: 'Billed $71.88 every year',
      features: [
        {
          icon: <CashIcon />,
          content: 'Start with +3000 chips',
        },
        {
          icon: <CashIcon />,
          content: '600 free chips each month',
        },
        {
          icon: <CashIcon />,
          content: 'Create AI character for you',
        },

        {
          icon: <CashIcon />,
          content: 'Hot role-play chatting',
        },
        {
          icon: <CashIcon />,
          content: 'Romantic voice messages',
        },
        {
          icon: <CashIcon />,
          content: 'Spicy photos',
        },
      ],
      cta: 'Choose this plan',
    },
    {
      bestChoice: true,
      title: '12 Months Plan',
      price: '$5.99',
      priceLabel: 'Billed $71.88 every year',
      features: [
        {
          icon: <CashIcon />,
          content: 'Start with +3000 chips',
        },
        {
          icon: <CashIcon />,
          content: '600 free chips each month',
        },
        {
          icon: <CashIcon />,
          content: 'Create AI character for you',
        },

        {
          icon: <CashIcon />,
          content: 'Hot role-play chatting',
        },
        {
          icon: <CashIcon />,
          content: 'Romantic voice messages',
        },
        {
          icon: <CashIcon />,
          content: 'Spicy photos',
        },
      ],
      cta: 'Choose this plan',
    },
  ]

  return (
    <section
      id="pricing"
      className="py-10 flex flex-col gap-y-10 w-full items-center px-4 lg:px-0"
    >
      <div className="flex flex-col gap-y-2 items-center">
        <Pill content="Pricing" />

        <h2 className="text-center text-[2.5rem] leading-[120%] tracking-[-0.8px] font-SatoshiBold text-transparent bg-clip-text bg-gradient-to-r from-[#E12E8F] to-[#0084FF]">
          Choose your plan
        </h2>

        <p className="max-w-[646px] text-center text-neutral500 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
          {"Don't"} worry, we {"don't"} have hidden fees and no adult
          transaction will appear in your bank statement.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map(
          ({ bestChoice, cta, features, price, priceLabel, title }) => {
            return (
              <div
                data-best={bestChoice}
                className="p-8 group relative z-0 rounded-[16px] bg-neutral100 border border-alphaBlack08 data-[best=true]:border-2 data-[best=true]:border-brand500"
                key={title}
              >
                {bestChoice && (
                  <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 px-4 h-[24px] rounded-[16px] bg-brand500 flex items-center justify-center w-fit">
                    <span className="text-neutral100 font-SatoshiBlack text-[0.625rem] uppercase tracking-[0.2px] leading-[160%]">
                      BEST CHOICE
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <span className="text-neutral600 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
                    {title}
                  </span>

                  <strong className="block mt-2 font-SatoshiBold text-feedbackNeutral500 text-[2.5rem] leading-[120%] tracking-[-0.8px] blur-[8px] group-data-[best=true]:text-brand500 select-none">
                    {price}
                  </strong>
                  <span className="text-[0.875rem] text-feedbackNeutral500 font-SatoshiMedium leading-[171.429%] tracking-[-0.28px] blur-[8px] h-[24px] group-data-[best=true]:text-brand500 select-none">
                    {priceLabel}
                  </span>
                </div>

                <ul className="mt-8 flex flex-col gap-y-4">
                  {features.map(({ content, icon }, index) => {
                    return (
                      <li key={index}>
                        <div className="flex items-center gap-x-4">
                          <span className="text-feedbackNeutral500 group-data-[best=true]:text-brand500">
                            {icon}
                          </span>
                          <span className="text-neutral600 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
                            {content}
                          </span>
                        </div>
                      </li>
                    )
                  })}
                </ul>

                <button className="mt-8 w-full h-[56px] flex items-center justify-center rounded-[8px] px-6 outline outline-1 outline-offset-[-1px] outline-alphaBlack08 bg-neutral100 hover:bg-neutral200 group-data-[best=true]:bg-brand500 group-data-[best=true]:hover:bg-brand400 transition-colors duration-300">
                  <span className="text-neutral600 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px] group-data-[best=true]:text-neutral100">
                    {cta}
                  </span>
                </button>
              </div>
            )
          },
        )}
      </div>

      <div className="flex items-center gap-x-[45px] mt-10 py-6">
        <Image
          src={'/ssl-secured.png'}
          alt="SSL secured"
          width={73.5}
          height={40}
        />
        <Image
          className="opacity-[16%]"
          src={'/mastercard.png'}
          alt="Mastercar SecureCode"
          width={88}
          height={40}
        />
        <Image
          src={'/visa.png'}
          alt="Verified by Visa"
          width={74}
          height={40}
        />
      </div>
    </section>
  )
}
