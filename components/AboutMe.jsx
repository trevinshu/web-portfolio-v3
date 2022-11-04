import React from 'react';
import Image from 'next/image';
import ProfilePic from '../public/img/profilepic-medium.jpg';
import Heading from './Heading';
function AboutMe() {
  return (
    <div className="flex flex-col gap-10 items-center md:flex-row">
      <>
        <Image src={ProfilePic} alt="profile pic" priority="true" width="3840" height="2412" className="w-1/2 m-auto sm:w-1/3 xl:w-1/4 2xl:w-[15%]" />
      </>
      <div className="flex flex-col justify-center items-start gap-5">
        <Heading>About Me</Heading>
        <p className=" text-zinc-800 text-left tracking-widest  break-words leading-loose">
          I am a Web Developer based in Edmonton, Alberta, Canada. I am passionate about building and delivering Web Applications that are aesthetically pleasing, feature rich, responsive and
          compliant with the latest accessibility standards.
        </p>
        <p className=" text-zinc-800 text-left tracking-widest  break-words leading-loose">
          In my free time I like to learn new technologies, binge watch the latest movie or tv show, listen to music or play video games.
        </p>
        <a
          className="text-lg text-center border-solid border-zinc-800 border-[3px] px-5 py-3 rounded-sm hover:scale-110 hover:transition-all hover:ease-in-out"
          href="resources/Trevin Shu - Resume 2022.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download/View My Resume
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
