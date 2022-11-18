import React from 'react';
import skills from '../public/data/skills.json';
import Image from 'next/image';
import Heading from './Heading';

function SkillsTools() {
  return (
    <div className="flex flex-col gap-5">
      <Heading>Skills & Tools</Heading>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {skills.skills.map((skill) => {
          return (
            <div key={skill.id} className="flex flex-col items-center justify-center border-zinc-800 border-solid border-4 rounded-sm p-5 gap-3">
              <Image alt="skill image" src={skill.image} width="50" height="50" className="w-1/2 h-auto xl:w-1/3" sizes="100vw" />
              <h2 className="text-center tracking-widest text-zinc-800">{skill.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsTools;
