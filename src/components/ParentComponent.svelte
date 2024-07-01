<script>
    // Import the Layout component
    import Layout from './Layout.svelte';
  
    // Define chart options for multiple charts
    // Each object in the array represents the configuration for one chart
    let chartOptions = [
      {
        // Configuration for the first chart
        title: {
          text: 'ECharts Example 1', // Title of the chart
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
          text: 'ECharts Example 2', // Title of the chart
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
            data: [150, 230, 224, 218, 135, 147, 260], // Data points for the series
          },
        ],
      },
      {
        // Configuration for the third chart
        title: {
          text: 'ECharts Example 3', // Title of the chart
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
            type: 'pie', // Series type is pie
            data: [
              { value: 335, name: 'Mon' }, // Data point for Monday
              { value: 310, name: 'Tue' }, // Data point for Tuesday
              { value: 234, name: 'Wed' }, // Data point for Wednesday
              { value: 135, name: 'Thu' }, // Data point for Thursday
              { value: 1548, name: 'Fri' }, // Data point for Friday
            ],
          },
        ],
      }
    ];
  </script>
  
  <!-- Pass the chartOptions array to the Layout component -->
  <Layout {chartOptions} />
