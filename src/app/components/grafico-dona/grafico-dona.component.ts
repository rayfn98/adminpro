import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() data: SingleDataSet = [
    12, 23, 42
  ];
  @Input() chartType: ChartType = 'doughnut';
  @Input() leyenda:string;

  constructor() { }

  ngOnInit() {
  }

}
