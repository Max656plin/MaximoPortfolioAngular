import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly PROJECTS_KEY = 'portfolio-projects';
  private readonly THEME_KEY = 'user-theme';

  private projects: Project[] = [
    {
      id: 1,
      title: 'Mi Portfolio Angular',
      description: 'Proyecto desarrollado con Angular 18 y Bootstrap',
      imageUrl: 'https://via.placeholder.com/300',
      technologies: ['TypeScript', 'Angular', 'SCSS']
    },
    {
      id: 2,
      title: 'E-commerce App',
      description: 'Tienda online con gestión de estado',
      imageUrl: 'https://via.placeholder.com/300',
      technologies: ['Angular', 'Firebase']
    }
  ];

  // Retorna los proyectos y los guarda en caché (Punto 2.3)
  getProjects(): Project[] {
    try {
      sessionStorage.setItem(this.PROJECTS_KEY, JSON.stringify(this.projects));
      return this.projects;
    } catch (error) {
      console.error('Error accediendo a sessionStorage', error);
      return this.projects;
    }
  }

  // Gestión de Temas con LocalStorage (Punto 2.3 y 2.4)
  saveThemePreference(theme: Theme): void {
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (error) {
      console.error('Error al guardar el tema', error);
    }
  }

  getThemePreference(): Theme {
    const saved = localStorage.getItem(this.THEME_KEY) as Theme;
    return saved || Theme.Light;
  }

  // Puedes agregar métodos para agregar/editar proyectos si lo necesitas
}
