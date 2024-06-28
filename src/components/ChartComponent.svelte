<script>
    import { onMount, onDestroy } from 'svelte';
    import * as echarts from 'echarts';

    export let option = {};

    let chartDiv;
    let chart;

    onMount(() => {
      chart = echarts.init(chartDiv);
      chart.setOption(option);

      const resizeObserver = new ResizeObserver(() => {
        if (chart) {
          chart.resize();
        }
      });
      resizeObserver.observe(chartDiv);

      return () => {
        resizeObserver.disconnect();
        if (chart) {
          chart.dispose();
        }
      };
    });

    onDestroy(() => {
      if (chart) {
        chart.dispose();
      }
    });
</script>

<style>
  .chart {
    width: 100%;
    height: 100%;
  }
</style>

<div bind:this={chartDiv} class="chart"></div>
