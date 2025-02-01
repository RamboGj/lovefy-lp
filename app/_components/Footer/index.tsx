import { FacebookIcon } from '@/components/@icons/facebook-icon'
import { InstagramIcon } from '@/components/@icons/instagram-icon'
import { LogoMd } from '@/components/@icons/logo-md'
import { LogoXL } from '@/components/@icons/logo-xl'
import { TwitterIcon } from '@/components/@icons/twitter-icon'
import { YoutubeIcon } from '@/components/@icons/youtube-icon'
import Link from 'next/link'

export function Footer() {
  const social = [
    {
      alt: 'Facebook',
      icon: <FacebookIcon />,
      href: '#',
    },
    {
      alt: 'Instagram',
      icon: <InstagramIcon />,
      href: '#',
    },
    {
      alt: 'Twitter',
      icon: <TwitterIcon />,
      href: '#',
    },
    {
      alt: 'Youtube',
      icon: <YoutubeIcon />,
      href: '#',
    },
  ]

  const sections = [
    {
      title: 'Explore',
      links: [
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
          href: '#footer',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          label: 'Download',
          href: '#',
        },
        {
          label: 'Help center',
          href: '#',
        },
        {
          label: "What's new",
          href: '#pricing',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '#',
        },
        {
          label: 'Support',
          href: '#',
        },
        {
          label: 'Careers',
          href: '#',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          label: 'Terms',
          href: '#',
        },
        {
          label: 'Privacy policy',
          href: '#',
        },
        {
          label: 'Data protection',
          href: '#',
        },
        {
          label: 'Cookies',
          href: '#',
        },
        {
          label: 'Abuse',
          href: '#',
        },
      ],
    },
  ]

  return (
    <footer
      id="footer"
      className="max-w-[1344px] mx-auto rounded-[40px_40px_0_0] border border-alphaBlack08"
    >
      <div className="p-[72px] flex justify-between">
        <div className="max-w-[197px] flex flex-col justify-start items-start gap-y-6">
          <LogoMd />

          <p className="font-SatoshiMedium text-neutral500 text-[0.875rem] leading-[171.429%] tracking-[-0.28px]">
            We {"don't"} use cookies and we will never use or save your data.
          </p>

          <ul className="flex gap-x-4">
            {social.map(({ alt, href, icon }) => {
              return (
                <li key={alt}>
                  <Link href={href} target="_blank">
                    <span className="text-neutral500 hover:text-neutral400 transition-colors duration-300">
                      {icon}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="grid grid-cols-4 gap-x-8">
          {sections.map(({ links, title }) => {
            return (
              <div key={title} className="w-[195px] flex flex-col">
                <strong className="text-neutral500 font-Satoshi leading-[150%] text-[1rem] tracking-[-0.32px]">
                  {title}
                </strong>
                <ul className="flex flex-col gap-y-4 mt-4">
                  {links.map(({ href, label }) => {
                    return (
                      <li key={label}>
                        <Link href={href}>
                          <span className="text-neutral600 hover:text-neutral500 transition-colors duration-300 font-SatoshiBold leading-[150%] text-[1rem] tracking-[-0.32px]">
                            {label}
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div className="h-[300px] overflow-hidden">
        <LogoXL />
      </div>
    </footer>
  )
}
