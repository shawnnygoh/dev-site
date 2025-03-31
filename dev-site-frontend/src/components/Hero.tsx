'use client';

import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = 64;
      const aboutPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = aboutPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <TypeAnimation
                sequence={[
                  "hi, i'm shawn.",
                  1000, 
                  "i'm an explorer.",
                  1000,
                  "i'm a problem solver.",
                  1000,
                  "i'm a tinkerer.",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              an aspiring
              <a 
                href="https://www.cognition-labs.com/introducing-devin" 
                target="_blank" 
                rel="noreferrer"
                className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent px-1 hover:from-violet-600 hover:to-blue-600 transition-colors"
              >
                software engineer
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full"
        >
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;