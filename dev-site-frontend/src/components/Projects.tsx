import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from './AnimateOnScroll';
import { projectsData } from '@/data/Projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/40 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll animation="slideInLeft">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">projects</h2>
            <p className="text-base text-muted-foreground tracking-wide">
              View my past works.
            </p>
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mx-auto mt-4 mb-10"></div>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <AnimateOnScroll 
              key={project.id} 
              animation="slideUp" 
              delay={i * 0.2}
            >
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                {project.fullImage && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image 
                      src={project.fullImage} 
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-start text-lg font-semibold">
                    {project.title}
                    {project.wip && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        WIP
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2">
                  {/* Specially handled technology icons */}
                  <div className="h-10 flex items-center gap-4 mt-2">
                    {project.techstack.map((tech, idx) => {
                      const isIntersystems = tech.includes('intersystems');
                      const needsInversion = tech.includes('nextjs') || tech.includes('groq');
                      
                      return (
                        <div 
                          key={idx} 
                          className={`relative flex items-center justify-center ${
                            isIntersystems ? 'h-10 w-14' : 'h-8 w-8'
                          }`}
                        >
                          <Image 
                            src={tech} 
                            alt={`Technology ${idx}`} 
                            width={isIntersystems ? 64 : 28}
                            height={isIntersystems ? 64 : 28}
                            className={`object-contain ${
                              needsInversion ? 'dark:invert' : ''
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.href} className="inline-flex items-center text-sm">
                      View Project
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;