import React, { useState } from 'react';

type ProjectCardProps = {
  title: string,
  description: string,
  techStack: string[],
  image: string, // image source
  details: React.ReactNode, // content to show in a popup
};

export default function ProjectCard({
  title, description, techStack, image, details,
}:ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button type="button" className="border-[1px] border-[rgba(0,0,0,.125)] rounded-lg text-left" onClick={() => setModalOpen(true)}>
        <img src={image} alt="TreeChat screenshots" className="w-full object-cover" />
        <div className="p-5">
          <h1 className="font-bold text-[1.3rem]">{title}</h1>
          <p className="opacity-50 mt-2 text-[0.95rem]">{description}</p>
          <div className="flex gap-2 mt-4">
            {techStack.map((technology) => (<div className="p-1 border-[1px] border-[rgba(0,0,0,.125)] rounded-lg text-sm opacity-50">{technology}</div>))}
          </div>
        </div>
      </button>
      {modalOpen
        ? (
          <button className="fixed top-0 left-0 z-[100] w-screen h-screen bg-opacity-95 bg-white p-10 cursor-default text-left overflow-auto" type="button" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
            <div className="bg-white bg-opacity-100 shadow-md md:w-3/4 mx-auto">
              <img src={image} alt="TreeChat screenshots" className="w-full object-cover" />
              <div className="p-5">
                <h1 className="font-bold text-[1.3rem]">{title}</h1>
                <p className="opacity-50 mt-2 text-[0.95rem]">{description}</p>
                <div className="flex gap-2 mt-4">
                  {techStack.map((technology) => (<div className="p-1 border-[1px] border-[rgba(0,0,0,.125)] rounded-lg text-sm opacity-50">{technology}</div>))}
                </div>
                <div className="mt-6 mb-6">
                  {details}
                </div>
              </div>
            </div>
          </button>
        )
        : null}

    </>
  );
}
