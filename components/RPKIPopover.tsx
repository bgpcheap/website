import { useState } from 'react';
import { Transition } from "@headlessui/react";

interface RPKIPopoverProps {
  supported: boolean
}

const RPKIPopover: React.FC<RPKIPopoverProps> = ({ supported }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-block">

      {supported && (
        <span onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)} className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </span>
      ) || (
          <span onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
            <h2 className="text-lg font-semibold">RPKI Supported</h2>
            <p className="text-sm">This provider filters all their routes via RPKI</p>
          </>
        ) || (
            <>
              <h2 className="text-lg font-semibold">RPKI Not Supported</h2>
              <p className="text-sm">This provider does not support RPKI</p>
            </>
          )}
      </Transition>
    </div>
  );
}

export default RPKIPopover;
