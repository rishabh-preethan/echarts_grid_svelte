<script>
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
    import ChartComponent from "./ChartComponent.svelte";
  
    export let chartOptions = [];
  
    let fillFree = true;
  
    const id = () => "_" + Math.random().toString(36).substr(2, 9);
  
    function generateLayout(col) {
        return new Array(1).fill(null).map(function (item, i) {
        const y = 2;
        return {
          16: gridHelp.item({
            x: (i * 4) % col,
            y: Math.floor(i / 4) * y,
            w: 4,
            h: y,
          }),
          id: id(),
        };
      });
    }
  
    let cols = [[1287, 16]];
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
          <ChartComponent {option} style="width: 100%; height: 100%;" />
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
  