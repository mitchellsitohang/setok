import { Component, OnInit } from '@angular/core';
import { RegistrationDto } from 'src/app/api/models';
import { RegistrationService } from 'src/app/api/services';

interface Tijd {
  date: Date;
  title: string;
}

@Component({
  selector: 'app-registration-table',
  templateUrl: './registration-table.component.html',
  styleUrls: ['./registration-table.component.scss']
})
export class RegistrationTableComponent implements OnInit {
  dataSource: RegistrationDto[] = [];
  columnsToDisplay: string[] = ['email', 'city', 'streetname', 'zipcode', 'country', 'phone'];
  tableHeaders = [];

  constructor(
    public registrationService: RegistrationService,
  ) { }

  ngOnInit(): void {
    this.registrationService
      .registrationGet$Json()
      .subscribe(reg => { 
        this.dataSource = reg;
        console.log(this.dataSource);
        // this.tableHeaders = Object.keys(this.dataSource[0]);
      });
  }
}
