import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { loadAll } from '@tsparticles/all';
import Typed from 'typed.js';

import { tsParticles } from '@tsparticles/engine';
import { FormsModule } from '@angular/forms';
import { DataProviderService } from '../service/data-provider/data-provider.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isLight: boolean;
  skills: { name: string; icon: string }[] | undefined;
  projects:
    | {
        name: string;
        desc: string;
        image: string;
        category: string;
        links: { view: string; code: string };
      }[]
    | undefined;
  activeReact: boolean = true;
  activeAngular: boolean = false;
  angularProjects: {
    name: string;
    desc: string;
    image: string;
    category: string;
    links: { code: string; view?: string };
  }[] = [];
  reactProjects: {
    name: string;
    desc: string;
    image: string;
    category: string;
    links: { code: string; view: string };
  }[] = [];
  constructor(
    private renderer: Renderer2,
    private dataProviderService: DataProviderService
  ) {
    this.isLight = false;
  }

  private typed!: Typed;
  activeSection: string = 'home';
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menuElement = document.getElementById('menu');
    const navElement = document.querySelector('nav');

    if (
      this.menuOpen &&
      navElement &&
      !navElement.contains(event.target as Node) &&
      !menuElement?.contains(event.target as Node)
    ) {
      this.menuOpen = false;
    }
  }
  // This is the only place we set activeSection
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = [
      'home',
      'about',
      'skills',
      'work',
      'experience',
      'education',
      'contact',
    ];
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
  projectButton(type: string) {
    if (type === 'react') {
      this.activeReact = true;
      this.activeAngular = false;
    } else {
      this.activeReact = false;
      this.activeAngular = true;
    }
  }
  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async toggleTheme() {
    this.isLight = !this.isLight;

    if (this.isLight) {
      this.renderer.addClass(document.body, 'light-theme');
    } else {
      this.renderer.removeClass(document.body, 'light-theme');
    }
    await tsParticles.load({
      id: 'tsparticles',
      options: this.getParticlesOptions(),
    });
  }
  onSubmit(form: any) {
    // emailjs.init('user_TTDmetQLYgWCLzHTDgqxm');

    emailjs
      .sendForm('contact_service', 'template_contact', '#contact-form')
      .then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Form Submitted Successfully');
          form.resetForm();
        },
        (error: any) => {
          console.error('FAILED...', error);
          alert('Form Submission Failed! Try Again');
        }
      );
  }
  async ngAfterViewInit() {
    await loadAll(tsParticles); // load all features
    await tsParticles.load({
      id: 'tsparticles',
      options: this.getParticlesOptions(),
    });
    this.typed = new Typed('.typing-text', {
      strings: [
        'frontend development',
        'Backend development',
        'Web development',
        'Web designing',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 500,
      loop: true,
    });
  }
  getParticlesOptions() {
    return {
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      background: {
        color: {
          value: this.isLight ? '#f9f9f9' : '#1f242d',
        },
      },
      particles: {
        number: { value: 50 },
        size: { value: 3 },
        move: { enable: true, speed: 2 },
        links: {
          enable: true,
          distance: 150,
          color: this.isLight ? '#000000' : '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        color: { value: this.isLight ? '#000000' : '#ffffff' },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
      },
      interactivity: {
        modes: {
          repulse: { distance: 100 },
          push: { quantity: 4 },
        },
      },
    };
  }

  ngOnInit() {
    this.skills = this.dataProviderService.skills;
    this.angularProjects = this.dataProviderService.angularProjects;

    this.reactProjects = this.dataProviderService.reactProjects;
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
