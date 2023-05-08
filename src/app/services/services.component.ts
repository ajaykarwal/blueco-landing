import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  services = [
    {
      id: 'get-more-business',
      title: 'Get More Business',
      description:
        'Leverage our extensive experience in ecommerce and category analysis to unlock new opportunities for your business on Amazon.',
    },
    {
      id: 'optimize-store',
      title: 'Optimize Your Store',
      description:
        "Our SEO and copywriting services for Amazon are designed to increase your brand's visibility and drive conversions on the platform.",
    },
    {
      id: 'stand-out',
      title: 'Stand Out From The Crowd',
      description:
        'Upgrade your product listings with engaging visuals, videos, and A+ content to differentiate your product and drive more sales.',
    },
    {
      id: 'scale-revenue',
      title: 'Scale Your Revenue',
      description:
        'Our team of experts can help you create advertising strategies that deliver high-impact results and increase your sales on Amazon.',
    },
    {
      id: 'automate-operations',
      title: 'Automate Operations',
      description:
        "From inventory management to customer service and order fulfilment, we're here to make Amazon FBA seamless.",
    },
    {
      id: 'data-driven',
      title: 'Make Data-Driven Decisions',
      description:
        "Get comprehensive insights into your brand's performance on Amazon, with clean visualisations to make better decisions.",
    },
  ];
}
