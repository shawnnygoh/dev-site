'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/data/Projects';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function ProjectPage({ slug }: { slug: string }) {
  const project = projectsData.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="mb-8">Sorry, the project you&apos;re looking for doesn&apos;t exist.</p>
        <Button asChild>
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/#projects" className="flex items-center text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
      
      <AnimateOnScroll animation="slideUp">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          {project.wip && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
              Work in Progress
            </span>
          )}
        </div>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="fadeIn" delay={0.2}>
        {project.fullImage && (
          <div className="relative w-full aspect-video mb-12 overflow-hidden rounded-lg shadow-md">
            <Image
              src={project.fullImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <div className="space-y-12">
          {/* Overview Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Overview</h2>
            <p className="text-lg leading-relaxed mt-6">{project.description}</p>
          </section>
          
          {/* Project Details Section */}
          {project.details && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Project Details</h2>
              <p className="text-lg leading-relaxed mt-6">{project.details}</p>
            </section>
          )}
          
          {/* Technologies Section */}
          {project.technologies && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {project.techstack.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="relative h-12 w-12 flex items-center justify-center bg-muted rounded-md p-1.5"
                  >
                    <Image 
                      src={tech} 
                      alt={`Technology ${idx}`} 
                      width={36} 
                      height={36} 
                      className={`object-contain ${
                        tech.includes('nextjs.png') || tech.includes('groq.png') 
                          ? 'dark:invert' 
                          : ''
                      }`}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Links Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Links</h2>
            <div className="flex flex-wrap gap-4 mt-6">
              {project.externalUrl && (
                <Button asChild>
                  <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              
              {project.videoUrl && (
                <Button variant="outline" asChild>
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Watch Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    GitHub Repository
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </section>
        </div>
      </AnimateOnScroll>
    </main>
  );
}