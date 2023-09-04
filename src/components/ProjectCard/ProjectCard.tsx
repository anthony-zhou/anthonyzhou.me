import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

type ProjectCardProps = {
  title: string,
  description: string,
  techStack: string[],
  alt: string, // alt text for image
  image: string, // image source
  details: React.ReactNode, // content to show in a popup
};

export default function ProjectCard({
  title, description, techStack, image, alt, details,
}:ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button type="button" className="border-[1px] border-[rgba(0,0,0,.125)] rounded-lg text-left flex flex-col justify-start" onClick={() => openModal()}>
        <img src={image} alt={alt} className="w-full object-cover rounded-t-lg" />
        <div className="p-5">
          <h1 className="font-bold text-[1.3rem]">{title}</h1>
          <p className="opacity-50 mt-2 text-[0.95rem]">{description}</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {techStack.map((technology) => (<div className="p-1 border-[1px] border-[rgba(0,0,0,.125)] rounded-lg text-sm opacity-50">{technology}</div>))}
          </div>
        </div>
      </button>

      <CSSTransition
        in={modalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <button className="fixed top-0 left-0 z-[100] w-screen h-screen bg-white p-10 cursor-default text-left overflow-auto" type="button" onClick={() => closeModal()}>
          <div className="flex justify-center">
            <button type="button" className="bg-white bg-opacity-100 shadow-md md:w-1/2 text-left cursor-default rounded-md" onClick={(e) => e.stopPropagation()}>
              <img src={image} alt="TreeChat screenshots" className="w-full object-cover rounded-t-md" />
              <div className="p-10">
                <h1 className="font-bold text-[1.3rem]">{title}</h1>
                <p className="opacity-50 mt-2 text-[0.95rem]">{description}</p>
                <div className="flex gap-2 mt-4">
                  {techStack.map((technology) => (<div className="p-1 border-[1px] border-[rgba(0,0,0,.125)] rounded-lg text-sm opacity-50">{technology}</div>))}
                </div>
                <div className="mt-6 mb-6">
                  {details}
                </div>
              </div>
            </button>
          </div>
        </button>
      </CSSTransition>
    </>
  );
}
