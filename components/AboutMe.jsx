import React from 'react';
import Image from 'next/image';
import ProfilePic from '../public/img/profilepic-medium.jpg';
function AboutMe() {
  return (
    <div className="flex flex-col gap-10 p-5 items-center md:flex-row">
      <>
        <Image src={ProfilePic} alt="profile pic" layout="fill" priority="true" className="rounded-xl" width={350} />
      </>
      <div>
        <p className="text-xl text-zinc-800 text-left tracking-widest  break-words leading-loose">
          Web Developer based in Edmonton, Alberta, Canada. I am passionate about building and delivering Web Applications that are aesthetically pleasing, feature rich, responsive and compliant with
          the latest accessibility standards.
          <br />
          In my free time I like to learn new technologies, binge watch the latest movie or tv show, listen to music or play video games.
        </p>
        <button className="mt-5 border-solid border-zinc-800 border-[3px] px-5 py-3 rounded-sm hover:bg-zinc-800 hover:text-slate-50">Download/View My Resume</button>
      </div>
    </div>
  );
}

export default AboutMe;
