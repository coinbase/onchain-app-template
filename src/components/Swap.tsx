'use client';

import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { useEffect, useState } from 'react';

export default function Swap() {
  const [mounted, setMounted] = useState(false);
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  useEffect(() => {
    setMounted(true);
  }, []);

  const openSwapModal = () => {
    open();
  };

  if (!mounted) {
    return null;
  }

  if (!isConnected) {
    return null;
  }

  return (
    <button 
      onClick={openSwapModal}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Swap
    </button>
  );
} 