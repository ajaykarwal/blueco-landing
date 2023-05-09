import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css'],
})
export class PpcComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  stats = [
    'Higher Roas',
    'Amazon Advertising',
    'External Traffic Drivers',
    'Brand + Product Launch',
    'Improved Search Ranking',
  ];
}
