import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ling',
  templateUrl: './ling.component.html',
  styleUrls: ['./ling.component.scss']
})
export class LingComponent implements OnInit {
  public name: string = 'ling';

  constructor() { }

  ngOnInit(): void {
  }

}
