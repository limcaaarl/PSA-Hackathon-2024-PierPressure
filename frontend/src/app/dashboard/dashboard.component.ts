import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Alert } from './model/alert.model';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import data from './model/dummy.json';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartModule,
    ButtonModule,
    TagModule,
    MenuModule,
    CommonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  chartData: any;

  chartOptions: any;

  items!: MenuItem[];

  alerts: Alert[] = data;

  ngOnInit() {
    // this.initChart();

    this.items = [
      { label: 'Add New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' },
    ];
  }

  redirectLink(link: string) {
    console.log(link);
  }

  getSeverity(status: string) {
    if (!status) return undefined;

    switch (status.toLowerCase()) {
      case 'red':
        return 'danger';

      case 'orange':
        return 'warning';

      case 'green':
        return 'success';
      default:
        return undefined;
    }
  }

  getValue(status: string){
    if (!status) return undefined;

    switch (status.toLowerCase()) {
      case 'red':
        return 'High';

      case 'orange':
        return 'Medium';

      case 'green':
        return 'Low';
      default:
        return undefined;
    }
  }
}
