import React from 'react';
import Heading from './Heading';
import projects from '../public/data/projects.json';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <Heading>Projects</Heading>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
        {projects.projects.map((item) => {
          return (
            <div key={item.id} className="flex items-start justify-start flex-col border-zinc-800 border-solid border-4 rounded-sm p-5 gap-5">
              <h2 className="text-lg font-bold tracking-widest text-zinc-800 underline decoration-wavy decoration-indigo-800 underline-offset-8 leading-loose">{item.title}</h2>
              <Image alt="project screenshot" src={item.image} width="3840" height="2412" className="w-1/2 m-auto 2xl:w-full" />
              <div className="flex-1">
                <p className="text-zinc-800 text-left tracking-widest  break-words leading-loose">{item.description}</p>
              </div>
              <div className="flex flex-row items-center justify-start flex-wrap gap-3 w-full">
                {item.stack.map((stackItem, index) => {
                  return (
                    <div key={index} className="border-zinc-800 border-[3px] p-3">
                      <h2 className="text-center tracking-widest text-zinc-800 whitespace-nowrap">{stackItem.name}</h2>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-end gap-5 w-full ">
                <a href={item.GitHub} className="text-3xl" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href={item.Web} className="text-3xl" target="_blank" rel="noreferrer" aria-label="Web">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
