import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-3 justify-between items-center sm:flex-row">
      <p className="text-zinc-800 text-center sm:tracking-widest">Designed & Built by Trevin Shu. &copy; {currentYear}</p>
      <div className="flex justify-center items-center gap-5">
        <a
          href="https://github.com/trevinshu"
          className="text-zinc-800 text-center text-2xl tracking-widest hover:underline hover:decoration-wavy hover:decoration-indigo-800 hover:underline-offset-8"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/trevin-shu/"
          className="text-zinc-800 text-center text-2xl tracking-widest hover:underline hover:decoration-wavy hover:decoration-indigo-800 hover:underline-offset-8"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:trevinshu2008@gmail.com"
          className="text-zinc-800 text-center text-2xl tracking-widest hover:underline hover:decoration-wavy hover:decoration-indigo-800 hover:underline-offset-8"
        >
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
