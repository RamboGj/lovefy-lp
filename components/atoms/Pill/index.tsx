import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

export interface PillProps extends ComponentProps<'div'> {
  content: string
}

const pillStyles = tv({
  slots: {
    wrapper:
      'w-fit px-4 rounded-[16px] h-[24px] bg-alphaBlack04 outline outline-1 outline-alphaBlack04 outline-offset-[-1px] flex items-center',
    contentStyle:
      'text-neutral500 font-SatoshiBlack leading-[160%] uppercase text-[0.625rem] tracking-[0.2px]',
  },
})

export function Pill({ content, className, ...rest }: PillProps) {
  const { contentStyle, wrapper } = pillStyles({ className })

  return (
    <div className={wrapper({ className })} {...rest}>
      <span className={contentStyle()}>{content}</span>
    </div>
  )
}
