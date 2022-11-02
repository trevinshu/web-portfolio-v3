import React from 'react';
import Heading from './Heading';
import projects from '../public/data/projects.json';
import Image from 'next/image';

function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <Heading>Projects</Heading>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        {projects.projects.map((item) => {
          console.log(item);
          return (
            <div key={item.id} className="flex items-start justify-start flex-col border-zinc-800 border-solid border-4 rounded-sm p-5 gap-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-0">
                <h2 className="text-lg font-bold tracking-widest text-zinc-800 underline decoration-wavy decoration-indigo-800 underline-offset-8 leading-loose">{item.title}</h2>
              </div>
              <Image alt="project screenshot" src={item.image} width="3840" height="2412" className="w-1/2 m-auto 2xl:w-full" />
              <div className="flex-1">
                <p className="text-zinc-800 text-left tracking-widest  break-words leading-loose">{item.description}</p>
              </div>
              <div className="grid grid-cols-3 p-3">
                {item.stack.map((stackItem, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center justify-center gap-3">
                      <Image alt="skill image" src={stackItem.image} width="50" height="50" className="w-1/4 h-auto" sizes="100vw" />
                      <h2 className="text-center tracking-widest text-zinc-800">{stackItem.name}</h2>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-start gap-3 w-full">
                <a
                  href={item.GitHub}
                  className="w-1/2 text-center text-xl border-solid border-zinc-800 border-[3px] px-5 py-3 rounded-sm hover:bg-zinc-800 hover:text-slate-50"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={item.Web}
                  className="w-1/2 text-center text-xl border-solid border-zinc-800 border-[3px] px-5 py-3 rounded-sm hover:bg-zinc-800 hover:text-slate-50"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
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
