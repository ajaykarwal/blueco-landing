import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fba',
  templateUrl: './fba.component.html',
  styleUrls: ['./fba.component.css'],
})
export class FbaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  stats = [
    'Inventory + Catalogue Management',
    'Account Launch & Management For Seller Central',
    'Customer Service + Resolving Issues',
    'Logistics And Fulfilment - Fba + Prime',
    'Profitability Analysis',
    'Live Dashboard',
  ];
}
