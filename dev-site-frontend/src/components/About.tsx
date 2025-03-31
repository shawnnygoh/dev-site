'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Music, Film } from 'lucide-react';
import { IconChessKnightFilled } from '@tabler/icons-react';
import AnimateOnScroll from './AnimateOnScroll';

const items = [
  {
    title: "Coffee",
    description: "Check out my coffee calibrations and tastenotes.",
    icon: <Coffee className="h-5 w-5" />,
    image: "/barista.jpg",
    colSpan: "md:col-span-2",
  },
  {
    title: "Chess",
    description: "Dive into deep chess analysis.",
    icon: <IconChessKnightFilled className="h-5 w-5" />,
    image: "/chess-board.png",
    url: "https://www.chess.com/home",
  },
  {
    title: "Music",
    description: "Discover new music.",
    icon: <Music className="h-5 w-5" />,
    image: "/men-i-trust.jpg", 
    url: "https://open.spotify.com/artist/3zmfs9cQwzJl575W1ZYXeT",
  },
  {
    title: "Films",
    description: "Read my movie reviews.",
    icon: <Film className="h-5 w-5" />,
    image: "/perfect-days-landscape.jpg",
    colSpan: "md:col-span-2",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-center text-3xl font-bold mb-20">some interests of mine include...</h2>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const CardComponent = (
              <Card className={`overflow-hidden h-full rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-none shadow-none`}>
                <CardHeader className="p-0 flex justify-center">
                  <div className="relative w-10/12 h-64 overflow-hidden rounded-lg">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 px-10">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold mb-1">
                    {item.icon}
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardContent>
              </Card>
            );

            return item.url ? (
              <AnimateOnScroll key={i} animation="fadeIn" delay={i * 0.1} className={item.colSpan || ""}>
                <a href={item.url} className="block h-full" target="_blank" rel="noopener noreferrer">
                  {CardComponent}
                </a>
              </AnimateOnScroll>
            ) : (
              <AnimateOnScroll key={i} animation="fadeIn" delay={i * 0.1} className={item.colSpan || ""}>
                <div className="h-full">
                  {CardComponent}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;