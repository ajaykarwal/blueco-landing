import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  clients = [
    {
      id: 'tierra',
      name: 'Tierra by Maria',
    },
    {
      id: 'an',
      name: 'Au Naturale',
    },
    {
      id: 'drdana',
      name: 'Dr Dana',
    },
  ];
}
