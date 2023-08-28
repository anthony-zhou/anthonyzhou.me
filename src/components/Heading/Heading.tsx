import React from 'react';

export default function Heading({ text }: { text: string }) {
  return (
    <div className="flex justify-between border-b-2">
      <h2 className="text-xl font-bold border-b-2 border-black -mb-0.5 pb-3">{text}</h2>
    </div>
  );
}
