import { Component, Directive, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public navButtons = {};
  public menuOpen = false;
  constructor() {}

  ngOnInit(): void {
    const check = document.querySelector('#check') as HTMLInputElement;

    document.querySelectorAll('.nav-link').forEach((n) =>
      n.addEventListener('click', () => {
        check.checked = false;        
      })
    );
    this.setNavButtons();
  }

  public getNavEntries() {
    return Object.entries(this.navButtons);
  }

  public closeMenu(): void {
    this.menuOpen = false;    
  }
  
  private setNavButtons() {
    this.navButtons = {
      'Home': '/home',
      'Items': '/items',
      'Registration': '/registration'
    };
  }
}
