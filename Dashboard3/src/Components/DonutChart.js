import React, { useEffect,useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const DonutChart = ({name}) => {
  useEffect(() => {
    let chart = am4core.create(name, am4charts.PieChart);
    if(chart.logo){
      chart.logo.disabled = true;
    }
    chart.data = [
      {
        country: 'Lithuania',
        value: 501.9,
      },
      {
        country: 'Czechia',
        value: 301.9,
      },
      {
        country: 'Ireland',
        value: 201.1,
      },
      {
        country: 'Germany',
        value: 165.8,
      },
      {
        country: 'Australia',
        value: 139.9,
      },
      {
        country: 'Austria',
        value: 128.3,
      },
    ];

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'country';
    // pieSeries.slices.template.tooltipText = '{category}: {value.value}';
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;


    // pieSeries.tooltipText = am4core.color('#ffffff');
    pieSeries.tooltip.stroke = am4core.color(pieSeries.categoryColor);

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.useDefaultMarker = true;
    chart.legend.valueLabels.template.text = '{value}';


    chart.innerRadius = am4core.percent(25);
    pieSeries.radius = am4core.percent(100);

    // let label = pieSeries.createChild(am4core.Label);
    // label.text = '${values.value.sum}';
    // label.horizontalCenter = 'middle';
    // label.verticalCenter = 'middle';
    // label.fontSize = 40;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <div id={name} style={{ width: '100%', height: '200px' }}></div>
    </div>
  );
};

export default DonutChart;
