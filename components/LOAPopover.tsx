import { useState } from 'react';
import { Transition } from "@headlessui/react";

interface LOAPopoverProps {

}

const RPKIPopover: React.FC<LOAPopoverProps> = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-block">

      <span onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)} className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      </span>


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

        <h2 className="text-lg font-semibold">LOA Required</h2>
        <p className="text-sm">This provider requires LOAs for new prefix additions</p>
      </Transition>
    </div>
  );
}

export default RPKIPopover;
