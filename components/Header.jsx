import React from 'react';

function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-3">
      <h1 className="text-zinc-800 text-4xl text-center font-bold uppercase tracking-widest lg:text-5xl">Trevin Shu</h1>
      <p className="text-zinc-600 text-md text-center uppercase tracking-widest underline decoration-wavy decoration-indigo-800 underline-offset-8">Web Applications Developer</p>
    </header>
  );
}

export default Header;
