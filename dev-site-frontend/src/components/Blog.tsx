import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const posts = [
  {
    id: 1,
    title: 'GitHub Basics',
    href: 'https://medium.com/@shawnnygoh/github-basics-469cdceb0c3b',
    description: 'Explore the basics of GitHub with me!',
    date: 'May 21, 2024',
    category: { title: 'GitHub', href: 'https://medium.com/@shawnnygoh/github-basics-469cdceb0c3b' },
    author: {
      name: 'shawnnygoh',
      role: 'Developer',
      href: 'https://medium.com/@shawnnygoh/github-basics-469cdceb0c3b',
      imageUrl: '/shawnnygoh.png',
    },
  },
  {
    id: 2,
    title: 'Rusty Dev',
    href: 'https://github.com/shawnnygoh/rusty-dev',
    description: 'Embarking on some rusty experiments...',
    date: 'May 21, 2024',
    category: { title: 'Rust', href: 'https://github.com/shawnnygoh/rusty-dev' },
    author: {
      name: 'shawnnygoh',
      role: 'Rustacean',
      href: 'https://github.com/shawnnygoh/rusty-dev',
      imageUrl: '/shawnnygoh.png',
    },
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll animation="slideInLeft">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">blog</h2>
            <p className="text-base text-muted-foreground tracking-wide">
              Learn with me.
            </p>
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mx-auto mt-4 mb-10"></div>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <AnimateOnScroll 
              key={post.id} 
              animation="slideUp" 
              delay={i * 0.2}
            >
              <Card className="flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      <a href={post.category.href} target="_blank" rel="noopener noreferrer">
                        {post.category.title}
                      </a>
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                  <CardDescription className="text-sm">{post.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2">
                  {/* Content could go here */}
                </CardContent>
                <CardFooter className="border-t pt-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                      <Image
                        src={post.author.imageUrl}
                        alt={`${post.author.name}'s profile`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium">{post.author.name}</p>
                      <p className="text-xs text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href={post.href} target="_blank" rel="noopener noreferrer" className="text-xs">
                      Read <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
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

export default Blog;