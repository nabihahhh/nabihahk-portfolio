import { Component, HostListener, signal } from '@angular/core';
import { education, profile, projects, roles, services, skills, stats } from './data/portfolio';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-root',
  imports: [RevealDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = profile;
  protected readonly stats = stats;
  protected readonly projects = projects;
  protected readonly services = services;
  protected readonly roles = roles;
  protected readonly skills = skills;
  protected readonly education = education;
  protected readonly year = new Date().getFullYear();

  protected readonly nav = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Toolbox', href: '#toolbox' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
