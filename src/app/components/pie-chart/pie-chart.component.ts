import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  pieChartData = {
    datasets: [
      {
        data: [12, 31, 22, 43, 32, 35, 56],
        label: 'sales',
        backgroundColor: [
          'rgba(36,44,44,0.7)',
          'rgba(76, 120, 187, 0.616)',
          'rgba(63, 184, 133, 0.616)',
          'rgba(209, 123, 43, 0.616)',
          'rgba(214, 54, 219, 0.616)',
          'rgba(145, 27, 199, 0.616)',
          'rgba(180, 23, 57, 0.616)',
        ],
        tension: 0.3,
        pointRadius: 2,
        borderWidth: 0,
        pointHitRadius: 15,
        pointHoverRadius: 8,
        pointBorderWidth: 0,
        hoverBorderWidth: 1,
      },
    ],

    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };
  pieChartOptions = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
}
