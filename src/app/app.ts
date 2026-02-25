import { Component, HostListener, OnInit, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Portfolio');
  protected readonly showSecret = signal(false);
  private keys: string[] = [];
  private readonly konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    // Inicializar el servicio al iniciar la aplicación
    this.themeService.loadUserPreferences();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keys.push(event.key);
    this.keys = this.keys.slice(-10);

    if (this.keys.join('').toLowerCase() === this.konamiCode.join('').toLowerCase()) {
      this.showSecret.set(true);
      // Ocultar automáticamente después de 10 segundos
      setTimeout(() => this.showSecret.set(false), 10000);
    }
  }

  closeSecret() {
    this.showSecret.set(false);
  }
}
