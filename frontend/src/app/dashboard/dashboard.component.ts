import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule, MenuModule, CommonModule, TableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  chartData: any;

  chartOptions: any;

  items!: MenuItem[];

  ngOnInit() {
    // this.initChart();

    this.items = [
      { label: 'Add New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' },
    ];
  }

  // initChart() {
  //   const documentStyle = getComputedStyle(document.documentElement);
  //   const textColor = documentStyle.getPropertyValue('--text-color');
  //   const textColorSecondary = documentStyle.getPropertyValue(
  //     '--text-color-secondary'
  //   );
  //   const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  //   this.chartData = {
  //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //     datasets: [
  //       {
  //         label: 'First Dataset',
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
  //         borderColor: documentStyle.getPropertyValue('--bluegray-700'),
  //         tension: 0.4,
  //       },
  //       {
  //         label: 'Second Dataset',
  //         data: [28, 48, 40, 19, 86, 27, 90],
  //         fill: false,
  //         backgroundColor: documentStyle.getPropertyValue('--green-600'),
  //         borderColor: documentStyle.getPropertyValue('--green-600'),
  //         tension: 0.4,
  //       },
  //     ],
  //   };

  //   this.chartOptions = {
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: textColor,
  //         },
  //       },
  //     },
  //     scales: {
  //       x: {
  //         ticks: {
  //           color: textColorSecondary,
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //           drawBorder: false,
  //         },
  //       },
  //       y: {
  //         ticks: {
  //           color: textColorSecondary,
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //           drawBorder: false,
  //         },
  //       },
  //     },
  //   };
  // }
}
