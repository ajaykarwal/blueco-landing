import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converting',
  templateUrl: './converting.component.html',
  styleUrls: ['./converting.component.css'],
})
export class ConvertingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  stats = [
    'Tried and tested store and product designs',
    'Keyword optimisation to outrank competitors',
    'Premium and mobile-friendly content',
    'Positioning and keyword research',
    'Listing copywriting',
    'Graphic optimization and A+ content',
    'Brandstore, product and category optimization',
  ];
}
