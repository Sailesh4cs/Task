import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentApiService } from '../_service/component-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA = [
  { "firstName": "Amit", "lastName": "Kumar", "class": "10th", "marks": ["88", "88"], "subjectName": ["Math", "Science"] },
  { "firstName": "Shubham", "lastName": "Kumar", "class": "11th", "marks": ["33", "33"], "subjectName": ["English", "Science"] }];

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['firstName', 'lastName', 'class', 'marks', 'subjectName', 'action'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private comp: ComponentApiService) {
    // Create 100 users

  }

  async ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    await this.comp.getStudent().then((res: any) => {
      debugger
      // Assign the data to the data source for the table to render
    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    debugger
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

