<script>
    // Import necessary components and helpers
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
    import ChartComponent from "./ChartComponent.svelte";
  
    // Define a prop to receive chart options
    export let chartOptions = [];
  
    // State variable for toggling fill space option
    let fillFree = true;
  
    // Function to generate unique IDs for grid items
    const id = () => "_" + Math.random().toString(36).substr(2, 9);
  
    // Function to generate grid layout
    function generateLayout(col) {
        return new Array(1).fill(null).map(function (item, i) {
        const y = 2; // Height of each grid item
        return {
          16: gridHelp.item({
            x: (i * 4) % col, // Calculate x position based on column width
            y: Math.floor(i / 4) * y, // Calculate y position based on row height
            w: 4, // Width of the grid item
            h: y, // Height of the grid item
          }),
          id: id(), // Generate unique ID for the grid item
        };
      });
    }
  
    // Initial columns configuration
    let cols = [[1287, 16]]; // Example columns configuration
  
    // Generate layouts for each chart option using the helper function
    let layouts = chartOptions.map(() => gridHelp.adjust(generateLayout(16), 16));
</script>
  
<label>
  <input type="checkbox" bind:checked={fillFree} />
  'Fill space' is {fillFree ? "enabled" : "disabled"}
</label>
  
<div class="demo-container">
  {#each chartOptions as option, index}
    <Grid
      bind:items={layouts[index]} 
      rowHeight={100} 
      let:item 
      let:dataItem 
      {cols} 
      fillSpace={fillFree}
    >
      <div class="demo-widget" key={index}>
        <ChartComponent {option} style="width: 100%; height: 100%;" /> <!-- Render ChartComponent with full width and height -->
      </div>
    </Grid>
  {/each}
</div>
  
<style>
  .demo-widget {
    background: #f1f1f1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .demo-container {
    max-width: 1200px;
    width: 100%;
  }
</style>
