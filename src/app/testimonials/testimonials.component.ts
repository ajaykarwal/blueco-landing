import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  testimonials = [
    {
      name: 'Ashley Prange',
      position: 'CEO of Au Naturale Cosmetics',
      rating: 5,
      review:
        "Great work from the team at Blueco. We're excited about the growth we've seen after just one month with climate-pledge friendly.",
      logo: 'client-an-dark',
    },
    // {
    //   name: 'Maria de Faria',
    //   position: 'CEO of Tierra by Maria',
    //   rating: 5,
    //   review:
    //     "So good.",
    //   logo: 'client-tierra-dark',
    // },
  ];
}
