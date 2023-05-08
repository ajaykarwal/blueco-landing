import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  stats = [
    {
      title: 'Exclusive Access',
      content:
        'Unprecedented direct access to the Amazon Climate-Pledge Friendly internal team to fast-track listing.',
    },
    {
      title: '$50m',
      content: 'Managed and optimized over $50 million in ad spend on Amazon.',
    },
    {
      title: 'Top 1%',
      content:
        'Top 1% of Amazon agencies in the world with expertise in SEO, A+ content, Ad Ops and more.',
    },
  ];
}
