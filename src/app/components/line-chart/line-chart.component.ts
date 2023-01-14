import { Component } from '@angular/core';
import { BubbleController, ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  chartData: ChartDataset[] = [
    {
      label: 'work',
      data: [23, 54, 67, 54, 74, 85, 49],

      tension: 0.2,
      pointRadius: 2,
      borderWidth: 2,
      pointHitRadius: 15,
      pointHoverRadius: 8,
      pointBorderWidth: 0,
      hoverBorderWidth: 0,
      borderColor: 'rgb(23, 253, 4)',
      pointBackgroundColor: 'rgb(15, 82, 7)',
      pointHoverBackgroundColor: 'rgb(22, 156, 7)',
    },
    {
      label: 'working',
      data: [33, 24, 47, 64, 44, 95, 39],
      tension: 0.2,
      pointRadius: 2,
      borderWidth: 2,
      pointHitRadius: 15,
      pointHoverRadius: 8,
      pointBorderWidth: 0,
      hoverBorderWidth: 0,
      borderColor: 'rgb(123, 136, 212)',
      pointBackgroundColor: 'rgb(14, 37, 168)',
      pointHoverBackgroundColor: 'rgb(14, 37, 168)',
    },
  ];

  chartLable: string[] = [
    'week-1',
    'week-2',
    'week-3',
    'week-4',
    'week-5',
    'week-6',
    'week-7',
  ];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
}
