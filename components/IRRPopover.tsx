import { useState } from 'react';
import {  Transition } from "@headlessui/react";

interface IRRPopoverProps {
  supported: boolean
}

const IRRPopover: React.FC<IRRPopoverProps> = ({ supported }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-block">

      {supported && (
        <span onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </span>
      ) || (
          <span onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        )}
      
      <Transition
              show={visible}
              enter="transition-opacity duration-250 ease-linear"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300 ease-linear"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="absolute left-0 p-4 bg-white border rounded shadow-lg w-max"
        >
          {supported && (
            <>
              <h2 className="text-lg font-semibold">Automatic prefix lists</h2>
              <p className="text-sm">This provider updates their prefix lists automatically</p>
            </>
          ) || (
              <>
                <h2 className="text-lg font-semibold">Prefix Lists</h2>
                <p className="text-sm">This provider updates prefix lists manually. </p>
              </>
            )}

    </Transition>
    </div>
  );
}

export default IRRPopover;
