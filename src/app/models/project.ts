export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  technologies: string[];
}
