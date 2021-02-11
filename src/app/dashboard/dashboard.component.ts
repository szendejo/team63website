import { Component, OnInit } from '@angular/core';

interface County {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedCounty!: string;

  constructor() { }

  ngOnInit(): void {
  }


  counties: County[] = [
    {value: 'bexar', viewValue: 'Bexar'},
    {value: 'brazoria', viewValue: 'Brazoria'},
    {value: 'collin', viewValue: 'Collin'},
    {value: 'dallas', viewValue: 'Dallas'},
    {value: 'denton', viewValue: 'Denton'},
    {value: 'fort_bend', viewValue: 'Fort Bend'},
    {value: 'harris', viewValue: 'Harris'},
    {value: 'liberty', viewValue: 'Liberty'},
    {value: 'lubbock', viewValue: 'Lubbock'},
    {value: 'nueces', viewValue: 'Nueces'},
    {value: 'tarrant', viewValue: 'Tarrant'},
    {value: 'travis', viewValue: 'Travis'},
    {value: 'williamson', viewValue: 'Williamson'}
  ];


}
