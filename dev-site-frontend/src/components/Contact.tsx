"use client"

import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin } from "lucide-react"
import { IconBrandTiktok } from '@tabler/icons-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mt-12">
          <h3 className="text-center text-lg font-medium mb-6">Connect with me</h3>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/shawnnygoh" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/shawnnygoh/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="https://www.instagram.com/shawnnygoh" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
            <a href="https://www.tiktok.com/@shawnnygoh" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900">
                <IconBrandTiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;