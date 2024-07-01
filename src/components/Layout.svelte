<script>
    // Import the ChartComponent for rendering ECharts instances
    import ChartComponent from './ChartComponent.svelte';
  
    // Import Grid and helper functions from svelte-grid
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
  
    // Receive the chartOptions array as a prop
    export let chartOptions = [];
  
    // Function to generate a unique ID
    const id = () => "_" + Math.random().toString(36).substr(2, 9);
  
    // Function to calculate the height based on data points
    function calculateHeight(data) {
      const baseHeight = 3;
      const dataPointFactor = 0.2;
      return Math.ceil(baseHeight + data.length * dataPointFactor);
    }
  
    // Function to calculate the width based on data points
    function calculateWidth(data) {
      const baseWidth = 4;
      const dataPointFactor = 0.5;
      return Math.ceil(baseWidth + data.length * dataPointFactor);
    }
  
    // Function to generate the layout for each chart option
    function generateLayout(options) {
      return options.map((option, i) => {
        const data = option.series[0].data;
        const height = calculateHeight(data);
        const width = calculateWidth(data);
        return {
          16: gridHelp.item({ x: (i * width) % 16, y: Math.floor(i / 4) * height, w: width, h: height }),
          id: id(), // Assign a unique ID
          option, // Include the chart option
        };
      });
    }
  
    // Define the number of columns for different screen widths
    let cols = [[1287, 16]];
    // Adjust the layout based on the number of columns
    let items = gridHelp.adjust(generateLayout(chartOptions), 16);
  </script>
  
  <style>
    /* Styling for the widget container */
    .demo-widget {
      background: #f1f1f1; /* Light gray background */
      height: 100%; /* Full height */
      width: 100%; /* Full width */
      display: flex; /* Flexbox for centering */
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
    }
  
    /* Styling for the demo container */
    .demo-container {
      max-width: 800px; /* Maximum width */
      width: 100%; /* Full width */
    }
  </style>
  
  <!-- Container for the grid -->
  <div class="demo-container">
    <!-- Svelte Grid component binding items and setting row height and columns -->
    <Grid bind:items={items} rowHeight={100} let:dataItem {cols}>
      <!-- Each grid item containing a ChartComponent -->
      <div class="demo-widget">
        <ChartComponent option={dataItem.option} />
      </div>
    </Grid>
  </div>
  