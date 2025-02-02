import { LeafsLeftIcon } from '@/components/@icons/leafs-left-icon'
import { LeafsRightIcon } from '@/components/@icons/leafs-right-icon'

export function Achievements() {
  const achievements = [
    {
      title: '200K+',
      label: 'users worldwide',
    },
    {
      title: 'Editors’ Choice',
      label: 'by TechCrunch',
    },
    {
      title: '+1000',
      label: 'positive testimonials',
    },
  ]

  return (
    <section
      id="achievements"
      className="py-10 flex flex-col lg:flex-row gap-[45px] items-center justify-center"
    >
      {achievements.map(({ label, title }) => {
        return (
          <div className="flex items-center gap-x-4" key={title}>
            <LeafsRightIcon />
            <div className="flex flex-col items-center">
              <strong className="text-neutral600 font-SatoshiBold leading-[133.33%] text-[1.5rem] tracking-[-0.48px]">
                {title}
              </strong>
              <span className="text-neutral500 font-SatoshiBold leading-[133.33%] text-[0.75rem] tracking-[-0.24px]">
                {label}
              </span>
            </div>
            <LeafsLeftIcon />
          </div>
        )
      })}
    </section>
  )
}
