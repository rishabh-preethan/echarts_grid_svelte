<script>
    import { onMount, onDestroy } from 'svelte';
    import * as echarts from 'echarts';
  
    export let option;
  
    let chartDiv;
    let chart;
  
    const resizeObserver = new ResizeObserver(() => {
      if (chart) {
        chart.resize();
      }
    });
  
    onMount(() => {
      if (chartDiv && option) {
        chart = echarts.init(chartDiv);
        chart.setOption(option);
        resizeObserver.observe(chartDiv);
      }
    });
  
    onDestroy(() => {
      if (chart) {
        resizeObserver.unobserve(chartDiv);
        chart.dispose();
      }
    });
  </script>
  
  <div bind:this={chartDiv} style="width: 100%; height: 100%;"></div>
  