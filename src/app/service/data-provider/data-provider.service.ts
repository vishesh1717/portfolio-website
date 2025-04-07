import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor() {}
  skills = [
    // {
    //   name: 'ReactJS',
    //   icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png',
    // },
    {
      name: 'Angular',
      icon: 'https://img.icons8.com/?size=100&id=71257&format=png&color=000000',
    },
    {
      name: 'TypeScript',
      icon: 'https://www.svgrepo.com/show/374144/typescript.svg',
    },
    {
      name: 'ExpressJS',
      icon: 'https://img.icons8.com/fluency/48/000000/node-js.png',
    },
    {
      name: 'NodeJS',
      icon: 'https://img.icons8.com/color/48/000000/nodejs.png',
    },
    {
      name: 'MongoDB',
      icon: 'https://img.icons8.com/color/48/000000/mongodb.png',
    },
    {
      name: 'Unit Testing',
      icon: 'https://cdn-icons-png.flaticon.com/128/1541/1541403.png',
    },
    {
      name: 'Ngrx',
      icon: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/ngrx-actions-11796935-9632846.png?f=webp&w=512',
    },
    {
      name: 'Rxjs',
      icon: 'https://cdn.worldvectorlogo.com/logos/rxjs-1.svg',
    },

    {
      name: 'MaterialUI',
      icon: 'https://img.icons8.com/color/48/000000/material-ui.png',
    },
    {
      name: 'Bootstrap',
      icon: 'https://img.icons8.com/color/48/000000/bootstrap.png',
    },
    {
      name: 'Sass',
      icon: 'https://img.icons8.com/color/48/000000/sass.png',
    },
    {
      name: 'HTML5',
      icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
    },
    {
      name: 'CSS3',
      icon: 'https://img.icons8.com/color/48/000000/css3.png',
    },
    {
      name: 'JavaScript',
      icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
    },

    {
      name: 'AWS',
      icon: 'data:image/jpeg;base64,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',
    },
    {
      name: 'GitHub',
      icon: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png',
    },
  ];
  projects = [
    {
      name: 'Hospital Management App',
      desc: 'Fully fledged WebApp based on different design patterns. Built using Angular,ExpressJs,MongoDB,NodeJs.',
      image: 'HospitalSystem3',
      category: 'web',
      links: {
        view: '',
        code: 'https://github.com/vishesh1717/Hospital-Management-System',
      },
    },
    {
      name: 'Task Manager App',
      desc: 'A Mean stack built for learning purpose ,implemented CRUD operation and angular advance concepts',
      image: 'TaskManager',
      category: 'web',
      links: {
        view: '',
        code: 'https://github.com/vishesh1717/Task-Manager',
      },
    },
    {
      name: 'Big Basket Clone',
      desc: 'A Angular stack built for learning purpose ,implemented basic and advance concepts of Angular.',
      image: 'project1',
      category: 'web',
      links: {
        view: '',
        code: 'https://github.com/vishesh1717/Big-Basket-Clone',
      },
    },
    // {
    //   name: 'Demo  App',
    //   desc: 'Working on th',
    //   image: 'project1',
    //   category: 'android',
    //   links: {
    //     view: '',
    //     code: '',
    //   },
    // },
  ];
}
