import React from 'react'
import { skills } from './skills'

export default function SkillsBlock() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-2 bg-blue-400">
          {skills.map((skill) => (
            <div
              className="flex items-center justify-center p-1 text-3xl rounded-md size-10 bg-brand-400 "
              key={skill.name}
            >
              <skill.icon />
            </div>
          ))}
        </div>
  )
}
