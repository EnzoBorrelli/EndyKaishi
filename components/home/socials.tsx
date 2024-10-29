'use client'
import React from 'react'
import { Socials } from '../footer/socials'
import { m,LazyMotion, domAnimation } from 'framer-motion'

export default function SocialsComp() {
  return (
    <div className="flex items-center justify-start gap-4 mt-2">
      <LazyMotion features={domAnimation}>
            {Socials.map((social) => (
              <m.a
              whileHover={{
                y: -4,
                scale: 1.2,
                transition: { duration: 0.2, type: "spring" },
              }}
                className="p-1 rounded-md bg-brand-400 ring-2 ring-text-secondary"
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </m.a>
            ))}
            </LazyMotion>
          </div>
  )
}
