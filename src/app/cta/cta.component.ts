import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
})
export class CtaComponent implements OnInit {
  @Input() text: string = 'Book A Free Consultation';
  @Input() url: string = 'https://calendly.com/jade-blueco/30min';
  constructor() {}

  ngOnInit(): void {}
}
