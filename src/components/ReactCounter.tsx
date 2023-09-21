import React, { useState } from "react";

export const ReactCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={(evt) => {
        evt.preventDefault();
        setCount((prevCount) => ++prevCount);
      }}
      className="w-full h-full text-5xl text-slate-500"
    >
      {count}
    </button>
  );
};
