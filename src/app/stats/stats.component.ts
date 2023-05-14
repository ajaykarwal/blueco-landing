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
      icon: 'icon-access.svg',
      title: 'Exclusive Access',
      content:
        'Unprecedented direct access to the Amazon Climate-Pledge Friendly internal team to fast-track listing.',
    },
    {
      icon: 'icon-manage.svg',
      title: '$50m',
      content: 'Managed and optimized over $50 million in ad spend on Amazon.',
    },
    {
      icon: 'icon-percent.svg',
      title: 'Top 1%',
      content:
        'Top 1% of Amazon agencies in the world with expertise in SEO, A+ content, Ad Ops and more.',
    },
  ];
}
