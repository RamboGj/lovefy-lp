import { HeartIcon } from '@/components/@icons/heart-icon'
import { LikeIcon } from '@/components/@icons/like-icon'
import { StarIcon } from '@/components/@icons/star-icon'
import { Pill } from '@/components/atoms/Pill'

export function Testimonials() {
  const testimonials = [
    {
      icon: <LikeIcon />,
      title: 'Amazing experience!',
      description:
        '”Aliquet aliquam malesuada at consectetur ac vitae phasellus. Leo scelerisque integer lectus scelerisque a id ut vel ultricies. Augue sapien fusce sed elit.”',
    },
    {
      icon: <StarIcon />,
      title: 'Amazing experience!',
      description:
        '”Aliquet aliquam malesuada at consectetur ac vitae phasellus. Leo scelerisque integer lectus scelerisque a id ut vel ultricies. Augue sapien fusce sed elit.”',
    },
    {
      icon: <HeartIcon />,
      title: 'Amazing experience!',
      description:
        '”Aliquet aliquam malesuada at consectetur ac vitae phasellus. Leo scelerisque integer lectus scelerisque a id ut vel ultricies. Augue sapien fusce sed elit.”',
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-10 flex flex-col gap-y-10 w-full items-center px-4 lg:px-0"
    >
      <div className="flex flex-col gap-y-2 items-center">
        <Pill content="wall of love" />

        <h2 className="text-center text-[2.5rem] leading-[120%] tracking-[-0.8px] font-SatoshiBold text-transparent bg-clip-text bg-gradient-to-r from-[#E12E8F] to-[#0084FF]">
          What people are saying about us
        </h2>

        <p className="max-w-[646px] text-center text-neutral500 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </div>

      <div className="relative max-w-[1120px] overflow-hidden mx-auto">
        <div className="absolute w-[320px] top-0 bottom-0 bg-custom-gradient z-20 -right-[160px] rotate-180" />
        <div className="absolute w-[320px] top-0 bottom-0 bg-custom-gradient z-20 -left-[160px]" />

        <div className="flex animate-marquee-rtl hover:pause gap-x-8">
          <div className="flex shrink-0 gap-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[352px] p-8 border border-alphaBlack08 bg-neutral100 rounded-[16px] flex flex-col gap-y-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-[8px] border border-alphaBlack08">
                  {testimonial.icon}
                </div>
                <strong className="text-[1.5rem] text-brand500 font-SatoshiBold leading-[133.33%] tracking-[-0.48px]">
                  {testimonial.title}
                </strong>
                <p className="text-neutral600 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
                  {testimonial.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex shrink-0 gap-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[352px] p-8 border border-alphaBlack08 bg-neutral100 rounded-[16px] flex flex-col gap-y-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-[8px] border border-alphaBlack08">
                  {testimonial.icon}
                </div>
                <strong className="text-[1.5rem] text-brand500 font-SatoshiBold leading-[133.33%] tracking-[-0.48px]">
                  {testimonial.title}
                </strong>
                <p className="text-neutral600 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
                  {testimonial.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
