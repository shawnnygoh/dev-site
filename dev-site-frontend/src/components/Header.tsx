'use client';

import { useEffect, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { Button } from './ui/button';
import { Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';

const navigation = [
  { name: 'about', href: '/#about' },
  { name: 'projects', href: '/#projects' },
  { name: 'blog', href: '/#blog' },
  { name: 'contact', href: '/#contact' },
];

const Header = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    const currentTheme = resolvedTheme || theme;
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm" 
          : "bg-background"
      }`}
    >
      <div className="flex justify-between items-center p-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex">
          <Link href="/" className="transition ease-in-out delay-150 bg-indigo-200 rounded-lg hover:scale-110 hover:bg-indigo-300 duration-300 dark:bg-indigo-300">
            <span className="sr-only">shawnnygoh</span>
            <Image 
              src="/shawnnygoh.png" 
              alt="home" 
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground tracking-[1px] group transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-indigo-500 to-indigo-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className={`rounded-full transition-all duration-300 ${
              scrolled ? "hover:bg-background/60" : "hover:bg-muted"
            }`}
            suppressHydrationWarning
          >
            {mounted && (resolvedTheme === 'dark' ? (
              <Sun className="h-5 w-5 transition-all" />
            ) : (
              <Moon className="h-5 w-5 transition-all" />
            ))}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="outline" 
                size="icon"
                className={`transition-all duration-300 ${
                  scrolled ? "border-muted-foreground/20" : ""
                }`}
              >
                <Bars3Icon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle></SheetTitle>
              <nav className="flex flex-col gap-6 mt-10 px-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-semibold leading-6 group transition-all duration-300 ease-in-out"
                    onClick={() => setSheetOpen(false)}
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-indigo-500 to-indigo-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;