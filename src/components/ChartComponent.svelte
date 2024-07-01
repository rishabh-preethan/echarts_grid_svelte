<script>
    // Import necessary functions from 'svelte' and 'echarts'
    import { onMount, onDestroy } from 'svelte';
    import * as echarts from 'echarts';
  
    // Export 'option' prop to receive chart configuration from parent component
    export let option;
  
    // Declare variables for the chart container and chart instance
    let chartDiv;
    let chart;
  
    // Create a ResizeObserver to handle chart resizing when the container size changes
    const resizeObserver = new ResizeObserver(() => {
      if (chart) {
        chart.resize(); // Resize the chart if it exists
      }
    });
  
    // Lifecycle function that runs when the component is mounted
    onMount(() => {
      if (chartDiv && option) {
        chart = echarts.init(chartDiv); // Initialize the ECharts instance
        chart.setOption(option); // Set the chart options
        resizeObserver.observe(chartDiv); // Start observing the chart container for resize events
      }
    });
  
    // Lifecycle function that runs when the component is destroyed
    onDestroy(() => {
      if (chart) {
        resizeObserver.unobserve(chartDiv); // Stop observing the chart container for resize events
        chart.dispose(); // Dispose of the ECharts instance to free up resources
      }
    });
  </script>
  
  <!-- Chart container element with width and height set to 100% -->
  <div bind:this={chartDiv} style="width: 100%; height: 100%;"></div>
