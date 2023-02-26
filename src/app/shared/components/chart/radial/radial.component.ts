import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { arc } from 'd3';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.scss']
})
export class RadialComponent implements OnInit {
  @ViewChild("element") element: ElementRef | undefined;
  @Input() progress:number = 0;
  @Input() totalCount:number = 0;
  @Input() colorCode:string = "000";

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.renderProgressBar(this.progress, this.totalCount)
  }
  renderProgressBar(progress: number, totalCount:number) {
    const count = totalCount
    const width = 40
    const height = 40
    const svg = d3.select(this.element?.nativeElement).append("svg").attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    svg.append("text")
      .style("text-anchor", "middle")
      .style("font-size", "12")
      .attr("dy", ".35em")
      .text(count);
    const radius = Math.min(width, height) / 2;
    const tau = 2 * Math.PI; 
    const arc: any = d3.arc()
      .innerRadius(radius - 3)
      .outerRadius(radius)
      .startAngle(0);

    const background = svg.append("path")
      .datum({ endAngle: tau })
      .style("fill", "#ddd")
      .attr("d", arc);

    const foreground = svg.append("path")
      .datum({ endAngle: 0.01 })
      .style("fill", this.colorCode)
      .attr("d", arc);

    foreground.transition()
      .duration(750)
      .attrTween("d", arcTween((progress / 100) * tau));

    function arcTween(newAngle: number) {
      return function (d: any) {
        const interpolate = d3.interpolate(d.endAngle, newAngle);
        return function (t: number) {
          d.endAngle = interpolate(t);
          return arc(d);
        };
      };
    }
  }
} 