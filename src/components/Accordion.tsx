import { ReactNode, useState } from "react";
import "../index.css";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="overflow-hidden max-h-[400px] flex flex-col gap-3 border-2 backdrop-blur-[500px] rounded-lg px-6 w-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <button
        role="button"
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        onClick={handleClick}
        className="flex justify-between items-baseline z-10 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <h3 className="text-4xl">{title}</h3>
        <p
          className={`text-4xl ${
            isOpen ? "rotate-45" : null
          } transition ease-in-out`}
        >
          +
        </p>
      </button>
      {isOpen ? (
        <div className="h-[1px] animate-spread bg-zinc-100 animate -mt-2"></div>
      ) : null}
      {isOpen ? (
        <div
          data-testid="children"
          id="accordion-content"
          className="overflow-y-auto overscroll-contain max-h-[300px] text-xl animate-insert mb-4"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
