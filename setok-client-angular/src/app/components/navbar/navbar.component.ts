import { Component, Directive, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor() {}

  ngOnInit(): void {
    const check = document.querySelector('#check') as HTMLInputElement;

    document.querySelectorAll('.nav-link').forEach((n) =>
      n.addEventListener('click', () => {
        check.checked = false;
      })
    );
  }
}
