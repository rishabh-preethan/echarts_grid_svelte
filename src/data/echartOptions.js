export let chartOptions = [
    {
      // Configuration for the first chart
      title: {
        text: 'Example 1', // Title of the chart
      },
      xAxis: {
        type: 'category', // X-axis is of category type
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Categories on the X-axis
      },
      yAxis: {
        type: 'value', // Y-axis is of value type
      },
      series: [
        {
          type: 'bar', // Series type is bar
          data: [120, 200, 150, 80, 70, 110, 130], // Data points for the series
        },
      ],
    },
    {
      // Configuration for the second chart
      title: {
        text: 'Example 2', // Title of the chart
      },
      xAxis: {
        type: 'category', // X-axis is of category type
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Categories on the X-axis
      },
      yAxis: {
        type: 'value', // Y-axis is of value type
      },
      series: [
        {
          type: 'line', // Series type is line
          smooth: true,
          data: [150, 230, 224, 218, 135, 147, 260], // Data points for the series
        },
      ],
    },
    {
      title: {
          text: ' Example 3', // Title of the chart
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
          type: 'shadow', // The tooltip will show a shadow pointer
          },
      },
      legend: {
          data: ['Series 1', 'Series 2'], // Legend entries for the series
      },
      xAxis: {
          type: 'category', // X-axis is of category type
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Categories on the X-axis
      },
      yAxis: {
          type: 'value', // Y-axis is of value type
      },
      series: [
          {
          name: 'Series 1', // Name of the first series
          type: 'bar', // Series type is bar
          stack: 'total', // Stack the bars
          data: [120, 200, 150, 80, 70, 110, 130], // Data points for the first series
          },
          {
          name: 'Series 2', // Name of the second series
          type: 'bar', // Series type is bar
          stack: 'total', // Stack the bars
          data: [60, 80, 90, 40, 50, 70, 60], // Data points for the second series
          },
      ],
    },
    {
      title: {
          text: 'Example 4', // Title of the chart
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
          type: 'cross', // The tooltip will show a cross pointer
          },
      },
      legend: {
          data: ['Series 1', 'Series 2'], // Legend entries for the series
      },
      xAxis: {
          type: 'category', // X-axis is of category type
          boundaryGap: false, // Boundary gap is set to false to align the area chart with the X-axis
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Extra dp1', 'Extra dp2'], // Categories on the X-axis
      },
      yAxis: {
          type: 'value', // Y-axis is of value type
      },
      series: [
          {
          name: 'Series 1', // Name of the first series
          type: 'line', // Series type is line
          smooth: true,
          stack: 'total', // Stack the lines
          areaStyle: {}, // This property fills the area under the line
          data: [120, 200, 150, 80, 70, 110, 130, 100, 200], // Data points for the first series
          },
          {
          name: 'Series 2', // Name of the second series
          type: 'line', // Series type is line
          smooth: true,
          stack: 'total', // Stack the lines
          areaStyle: {}, // This property fills the area under the line
          data: [60, 80, 90, 40, 50, 70, 60, 50, 90], // Data points for the second series
          },
      ],
    },
  ];