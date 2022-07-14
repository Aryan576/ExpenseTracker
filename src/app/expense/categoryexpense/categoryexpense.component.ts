import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoryexpense',
  templateUrl: './categoryexpense.component.html',
  styleUrls: ['./categoryexpense.component.scss']
})
export class CategoryexpenseComponent implements OnInit {

  selectedYear: number;
  years: number[] = [];
  constructor() {
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 1950; year--) {
      this.years.push(year);
    }
   }

  ngOnInit(): void {
  }

}
