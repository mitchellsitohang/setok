import { Component, Directive, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor() {}

  ngOnInit(): void {
    this.menuAppear();
  }

  menuAppear(): void {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger?.addEventListener('click', () => {
      hamburger?.classList.toggle('active');
      navList?.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((n) =>
      n.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navList?.classList.remove('active');
      })
    );
  }
}
