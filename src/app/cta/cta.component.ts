import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent implements OnInit {
  @Input() text: string = 'Book A Free Conultation';
  @Input() url: string = 'https://calendly.com/blueco-sales/30min';
  constructor() {}

  ngOnInit(): void {}
}
