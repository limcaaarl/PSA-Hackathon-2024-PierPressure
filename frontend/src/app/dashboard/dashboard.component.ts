import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Alert, TotalAlerts } from './model/alert.model';
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

  alerts!: Alert[];

  weeklyCases: { [weekNumber: string]: number } = {};

  totalAlerts!: TotalAlerts;

  ngOnInit() {
    this.loadData();
    this.countCasesPerWeek();
    this.prepareChartData();
    this.countAlertsByTimeRange();
    this.initChart();
  }

  loadData() {
    this.alerts = data;
  }

  getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
      (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  countCasesPerWeek() {
    const currentDate = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);

    data.forEach((element) => {
      const timestamp = new Date(element.timestamp);

      if (timestamp >= threeMonthsAgo && timestamp <= currentDate) {
        const weekNumber = this.getWeekNumber(timestamp);
        const year = timestamp.getFullYear();
        const weekKey = `${year}-W${weekNumber}`;

        // Initialize if the week entry doesn't exist
        if (!this.weeklyCases[weekKey]) {
          this.weeklyCases[weekKey] = 0;
        }

        // Increment the case count
        this.weeklyCases[weekKey]++;
      }
    });
  }

  countAlertsByTimeRange() {
    const currentDate = new Date();
    const oneDayAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);  // 24 hours ago
    const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);  // 7 days ago
    const oneMonthAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);  // 1 month ago
  
    let alertsLast24Hours = 0;
    let alertsLastWeek = 0;
    let alertsLastMonth = 0;
    let totalAlerts = 0;
  
    this.alerts.forEach(alert => {
      const alertDate = new Date(alert.timestamp);
  
      totalAlerts++;  // Count total alerts
  
      if (alertDate >= oneDayAgo) {
        alertsLast24Hours++;
      }
  
      if (alertDate >= oneWeekAgo) {
        alertsLastWeek++;
      }
  
      if (alertDate >= oneMonthAgo) {
        alertsLastMonth++;
      }
    });
  
    this.totalAlerts = {
      alertsLast24Hours,
      alertsLastWeek,
      alertsLastMonth,
      totalAlerts
    }
  }

  prepareChartData() {
    const weeks = Object.keys(this.weeklyCases);
    const caseData = weeks.map((week) => this.weeklyCases[week]);
  
    let documentStyle;
    // Ensure getComputedStyle is only called in browser context
    if (typeof window !== 'undefined') {
      documentStyle = getComputedStyle(document.documentElement);
    } else {
      // Fallback to some default values for server environments
      documentStyle = {
        getPropertyValue: (property: string) => {
          // Return default values or placeholders
          return '#000'; // fallback color
        }
      };
    }
  
    // Prepare the chart data structure
    this.chartData = {
      labels: weeks,
      datasets: [
        {
          type: 'line',
          label: 'Total Cases',
          fill: true,
          backgroundColor: '#8adcd2',
          borderColor: '#13b8a7',
          tension: 0.4,
          data: caseData,
        },
      ],
    };
  }
  
  initChart() {
    let documentStyle;
    // Ensure getComputedStyle is only called in browser context
    if (typeof window !== 'undefined') {
      documentStyle = getComputedStyle(document.documentElement);
    } else {
      // Fallback to some default values for server environments
      documentStyle = {
        getPropertyValue: (property: string) => {
          // Return default values or placeholders
          return '#000'; // fallback color
        }
      };
    }
  
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
  

  redirectLink(link: string) {
    console.log(link);
  }

  // getSeverity(status: string) {
  //   if (!status) return undefined;

  //   switch (status.toLowerCase()) {
  //     case 'red':
  //       return 'danger';

  //     case 'orange':
  //       return 'warning';

  //     case 'green':
  //       return 'success';
  //     default:
  //       return undefined;
  //   }
  // }

  // getValue(status: string) {
  //   if (!status) return undefined;

  //   switch (status.toLowerCase()) {
  //     case 'red':
  //       return 'High';

  //     case 'orange':
  //       return 'Medium';

  //     case 'green':
  //       return 'Low';
  //     default:
  //       return undefined;
  //   }
  // }
}
