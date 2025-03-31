import ProjectPage from '@/components/ProjectPage';

export const metadata = {
  title: 'Clover',
  description: 'A mental wellness buddy built with Llama and RAG, utilizing LlamaGuard for screening potentially harmful content and Qdrant as a vector database for the RAG pipeline.'
};

export default function CloverPage() {
  return <ProjectPage slug="clover" />;
}