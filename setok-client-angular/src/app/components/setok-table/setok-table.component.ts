import { Component, Input, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-setok-table',
  templateUrl: './setok-table.component.html',
  styleUrls: ['./setok-table.component.css']
})
export class SetokTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit() {
    this.setDisplayedColumns();
    this.setDataSource();
  }

  private setDataSource() {
    if (this.data.length > 0) {
      this.dataSource = new MatTableDataSource<any>(this.data);
    }
  }

  private setDisplayedColumns() {
    if (this.displayedColumns.length === 0 && this.data.length > 0) {
      this.displayedColumns = Object.keys(this.data[0]);
    }
  }
}
