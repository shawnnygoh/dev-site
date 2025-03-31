'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from 'react-icons/io5';

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white-100 dark:text-white">
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
};

export default DarkMode;