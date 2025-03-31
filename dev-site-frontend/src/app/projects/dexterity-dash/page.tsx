import ProjectPage from '@/components/ProjectPage';

export const metadata = {
  title: 'HealthHack 2025: Dexterity Dash',
  description: "A gamified hand exercise platform for elderly suffering from Parkinson's and Arthritis, integrated with a clinician dashboard utilizing LLMs and RAG pipelines with InterSystems IRIS Vector Search for clinicians to search for semantically similar patients."
};

export default function DexterityDashPage() {
  return <ProjectPage slug="dexterity-dash" />;
}