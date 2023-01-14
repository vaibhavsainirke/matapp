import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124, 2568 ],

      
      pointHitRadius: 16,
      pointHoverRadius: 8, 

      // ⤵️ Add these
      pointRadius: 2,
      borderColor: '#2D2F33',
      pointBackgroundColor: '#2D2F33',
      pointHoverBackgroundColor: '#2D2F33',
      borderWidth: 2, 
      hoverBorderWidth: 0, 
      pointBorderWidth: 0, 
      tension: 0.3,
    }
  ];

  chartLabels: string[] =  [ '2016 Revenue', '2017 Revenue', '2018 Revenue', '2019 Revenue', '2020 Revenue', '2021 Revenue','2022 Revenue'  ];

  chartOptions: ChartOptions = {
    // ⤵️ Fill the wrapper
    responsive: true,
    maintainAspectRatio: false,

    // ⤵️ Remove the grids
    scales: {
      xAxis: {
        display: false,
        grid: {
          drawBorder: false 
        }
      },
      yAxis: {
        display: false
      }
    },
      // ⤵️ Remove the main legend
      plugins: {
        legend: {
          display: false
        }
      }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
