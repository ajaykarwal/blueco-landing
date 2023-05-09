import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css'],
})
export class CpfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  stats = [
    {
      title: 'Higher Search Listing',
    },
    {
      title: 'Improved Ad Conversion',
    },
    {
      title: 'Sustainable product recommendations',
    },
    {
      title: 'Dedicated product category',
    },
  ];
}
