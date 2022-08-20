import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taury',
  templateUrl: './taury.component.html',
  styleUrls: ['./taury.component.scss']
})
export class TauryComponent implements OnInit {
  public name: string = 'Tau';

  constructor() { }

  ngOnInit(): void {
  }


}
