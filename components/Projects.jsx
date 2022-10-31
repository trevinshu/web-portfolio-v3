import React from 'react';
import Heading from './Heading';
import projects from '../public/data/projects.json';
import Image from 'next/image';

function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <Heading>Projects</Heading>
      <div className="grid grid-cols-3 gap-5">
        {projects.projects.map((item) => {
          return (
            <div key={item.id} className="flex flex-col border-zinc-800 border-solid border-4 rounded-sm p-5 gap-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-0">
                <h2 className="text-lg font-bold tracking-widest text-zinc-800 underline decoration-wavy decoration-indigo-800 underline-offset-8 leading-loose">{item.title}</h2>
              </div>
              <Image alt="project screenshot" src={item.image} width="350" height="350" />
              <h3 className="text-zinc-800 italic leading-loose">{item.location}</h3>
              <p className="text-zinc-800 text-left tracking-widest  break-words leading-loose">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
