<script>
  import Layout from './Layout.svelte';
  
  // Example ECharts options for multiple charts
  export let chartOptions = [
    {
      title: {
        text: 'ECharts Example 1',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: [120, 200, 150, 80, 70, 110, 130],
        },
      ],
    },
    {
      title: {
        text: 'ECharts Example 2',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    },
    {
      title: {
        text: 'ECharts Example 3',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    },
     {
      title: {
        text: 'ECharts Example 3',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          type: 'bar',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    },
    // Add more chart options as needed
  ];
</script>

<Layout {chartOptions} />
