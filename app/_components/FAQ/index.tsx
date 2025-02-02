'use client'

import { MinusIcon } from '@/components/@icons/minus-icon'
import { PlusIcon } from '@/components/@icons/plus-icon'
import { Pill } from '@/components/atoms/Pill'
import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'

export function FAQ() {
  const [value, setValue] = useState<string>('')

  const faqList = [
    {
      question: 'How does an AI girlfriend work?',
      answer:
        "At Lovefy, it's all about making realistic yet fantasy-fueled relationships. We use advanced artificial intelligence technology to enable you to create your ideal AI girlfriend according to your preferences—whether that's a sweet and innocent petite princess or an older and more dominant woman.",
    },
    {
      question: 'How do people interact with their AI girlfriends?',
      answer:
        "At Lovefy, it's all about making realistic yet fantasy-fueled relationships. We use advanced artificial intelligence technology to enable you to create your ideal AI girlfriend according to your preferences—whether that's a sweet and innocent petite princess or an older and more dominant woman.",
    },
    {
      question:
        'How are privacy and data security handled when it comes to AI girlfriends?',
      answer:
        "At Lovefy, it's all about making realistic yet fantasy-fueled relationships. We use advanced artificial intelligence technology to enable you to create your ideal AI girlfriend according to your preferences—whether that's a sweet and innocent petite princess or an older and more dominant woman.",
    },
    {
      question: 'How can I design my own AI girlfriend?',
      answer:
        "At Lovefy, it's all about making realistic yet fantasy-fueled relationships. We use advanced artificial intelligence technology to enable you to create your ideal AI girlfriend according to your preferences—whether that's a sweet and innocent petite princess or an older and more dominant woman.",
    },
    {
      question: "Can you customize your AI girlfriend's behavior?",
      answer:
        "At Lovefy, it's all about making realistic yet fantasy-fueled relationships. We use advanced artificial intelligence technology to enable you to create your ideal AI girlfriend according to your preferences—whether that's a sweet and innocent petite princess or an older and more dominant woman.",
    },
    {
      question: 'Can I ask for pictures?',
      answer:
        "At Lovefy, it's all about making realistic yet fantasy-fueled relationships. We use advanced artificial intelligence technology to enable you to create your ideal AI girlfriend according to your preferences—whether that's a sweet and innocent petite princess or an older and more dominant woman.",
    },
  ]

  return (
    <section
      id="faq"
      className="py-10 flex flex-col gap-y-10 w-full items-center px-4 lg:px-0"
    >
      <div className="flex flex-col gap-y-2 items-center">
        <Pill content="doubts or concerns? we're here to help!" />

        <h2 className="text-center text-[2.5rem] leading-[120%] tracking-[-0.8px] font-SatoshiBold text-brand500">
          Frequently Asked Questions
        </h2>

        <p className="max-w-[646px] text-center text-neutral500 font-SatoshiMedium leading-[150%] text-[1rem] tracking-[-0.32px]">
          Something else? Feel free to reach out to our team.
        </p>
      </div>

      <Accordion.Root
        className="w-full block list-none max-w-[892px]"
        collapsible
        type="single"
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        {faqList.map(({ answer, question }) => {
          return (
            <li key={question}>
              <Accordion.Item
                className="py-6 w-full border-b border-alphaBlack08 group"
                value={question}
              >
                <Accordion.Trigger className="w-full flex items-center justify-between gap-x-2">
                  <strong className="flex flex-1 text-left font-SatoshiBold text-brand500 text-[1rem] leading-[150%] tracking-[-0.32px]">
                    {question}
                  </strong>

                  {value === question ? (
                    <MinusIcon className="text-brand500" />
                  ) : (
                    <PlusIcon className="text-brand500" />
                  )}
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="h-4 w-full" />
                  <p className="text-neutral500 text-[1rem] leading-[150%] font-SatoshiMedium tracking-[-0.32px]">
                    {answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </li>
          )
        })}
      </Accordion.Root>
    </section>
  )
}
