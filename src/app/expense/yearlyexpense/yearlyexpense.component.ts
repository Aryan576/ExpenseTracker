import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yearlyexpense',
  templateUrl: './yearlyexpense.component.html',
  styleUrls: ['./yearlyexpense.component.scss']
})
export class YearlyexpenseComponent implements OnInit {

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
