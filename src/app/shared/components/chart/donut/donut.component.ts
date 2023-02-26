import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { arc } from 'd3';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
  @ViewChild("donutChart") donutChart: ElementRef | undefined
  data: any = [
    { name: "USA", value: 40 },
    { name: "UK", value: 20 },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.creatChart()
  }

  creatChart() {
    var colorCode: any = "000"
    var dataAr = this.data;
    var text = "";
    var width = 200;
    var height = 200;
    var thickness = 40;
    var duration = 750;

    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var svg = d3.select(this.donutChart?.nativeElement)
      .append('svg')
      .attr('class', 'pie')
      .attr('width', width)
      .attr('height', height);

    var g = svg.append('g')
      .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    var arc: any = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    var pie = d3.pie()
      .value(function (d: any) { return d.value; })
      .sort(null);

    var path = g.selectAll('path')
      .data(pie(dataAr))
      .enter()
      .append("g")
      .on("mouseover", function (d: any) {
        let g = d3.select(this)
          .style("cursor", "pointer")
          .style("fill", "black")
          .append("g")
          .attr("class", "text-group");
        console.log(`${d?.dataAr?.value}`)
        g.append("text")
          .attr("class", "name-text")
          .text(`${d.dataAr?.value}`)
          .attr('text-anchor', 'middle')
          .attr('dy', '-1.2em');

        g.append("text")
          .attr("class", "value-text")
          .text(`${d?.dataAr?.value}`)
          .attr('text-anchor', 'middle')
          .attr('dy', '.6em');
      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("cursor", "none")
          .style("fill", color(colorCode))
          .select(".text-group").remove();
      })
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i: any) => color(i))
      .on("mouseover", function (d) {
        d3.select(this)
          .style("cursor", "pointer")

      })
      .on("mouseout", function (d) {
        d3.select(this)
          .style("cursor", "none")

      })
      .each(function (d, i) { colorCode = i; });


    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(text);
  }

}
