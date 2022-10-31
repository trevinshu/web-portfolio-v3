import React from 'react';

function Heading({ children }) {
  return <h2 className="text-2xl font-bold uppercase tracking-widest underline decoration-wavy decoration-indigo-800 underline-offset-8">{children}</h2>;
}

export default Heading;
