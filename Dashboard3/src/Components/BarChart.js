import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const BarChart = () => {
  useEffect(() => {
    // Enable the theme
    am4core.useTheme(am4themes_animated);

    // Create a chart instance
    const chart = am4core.create('barChart', am4charts.XYChart);
    if (chart.logo) {
      chart.logo.disabled = true;
    }

    // Add data
    chart.data = [
      {
        'category': 'DEFAULT BANK',
        value: 0,
      },
      {
        'category': 'Malayan Banking Berhad',
        value: 162432.00,
      },

    ];

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 60;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;        
    valueAxis.stepSize = 20000; 

    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    series.name = 'Value';

    series.columns.template.width = am4core.percent(15); // Adjust the percentage as needed


    // Customize tooltips
    series.columns.template.tooltipText = 'Category: {category}\nValue: [bold]{valueY}[/]';
    series.columns.template.tooltipPosition = 'pointer';
    series.columns.template.tooltipX = am4core.percent(50);
    series.columns.template.tooltipY = am4core.percent(0);
    series.columns.template.tooltipYValue = am4core.percent(100);

    // Add cursor
    const cursor = new am4charts.XYCursor();
    cursor.behavior = 'zoomX';
    cursor.lineY.disabled = true; // Hide the vertical line
    chart.cursor = cursor;

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    // Clean up on unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <div id="barChart" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default BarChart;
