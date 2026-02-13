import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
  this.projects = [
    {
      id: 1,
      title: 'WikiHammer',
      description: 'Primera pagina web creada en el primer año sobre el universo de Warhammer40k',
      imageUrl: 'https://via.placeholder.com/400x250?text=WikiHammer',
      technologies: [],
      githubLink: 'https://max656plin.github.io/'
    },
    {
      id: 2,
      title: 'treefx',
      description: 'Aplicación del primer año sobre arboles y sus ramas idea de Tuesta',
      imageUrl: 'https://via.placeholder.com/400x250?text=treefx',
      technologies: [],
      githubLink: 'https://github.com/tuesta/treefx.git'
    },
    {
      id: 3,
      title: 'CIVIS',
      description: 'Civis aplicación de tramites futuro TFG de este segundo año junto a mis compañeros',
      imageUrl: 'https://via.placeholder.com/400x250?text=CIVIS',
      technologies: [],
      githubLink: 'https://github.com/Atm0027/CIVIS'
    }
  ];
}
}
