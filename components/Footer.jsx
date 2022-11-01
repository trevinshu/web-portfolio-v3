import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-3 justify-between items-center sm:flex-row">
      <p className="text-zinc-800 text-center sm:tracking-widest">Designed & Built by Trevin Shu. &copy; {currentYear}</p>
      <div className="flex justify-center items-center gap-3">
        <a
          href="https://github.com/trevinshu"
          className="text-zinc-800 text-center tracking-widest hover:underline hover:decoration-wavy hover:decoration-indigo-800 hover:underline-offset-8"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/trevin-shu/"
          className="text-zinc-800 text-center tracking-widest hover:underline hover:decoration-wavy hover:decoration-indigo-800 hover:underline-offset-8"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:trevinshu2008@gmail.com" className="text-zinc-800 text-center tracking-widest hover:underline hover:decoration-wavy hover:decoration-indigo-800 hover:underline-offset-8">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
