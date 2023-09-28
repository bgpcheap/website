import { useState } from 'react';
import { Transition } from "@headlessui/react";

interface FlagPopoverProps {
  country: string;
}

const RPKIPopover: React.FC<FlagPopoverProps> = ({ country }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative inline-block">




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
        className="absolute left-0 p-4 mt-2 bg-white border rounded shadow-lg w-max"
      >
        <h2 className="text-lg font-semibold">{country}</h2>
      </Transition>
    </div>
  );
}

export default RPKIPopover;
