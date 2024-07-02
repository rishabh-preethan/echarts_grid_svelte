<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import * as echarts from 'echarts';

  export let option;
  let chartDiv;
  let chart;

  const resizeObserver = new ResizeObserver(() => {
      if (chart) {
          chart.resize();
      }
  });

  // Create an event dispatcher
  const dispatch = createEventDispatcher();

  onMount(() => {
      if (chartDiv && option) {
          chart = echarts.init(chartDiv);
          chart.setOption(option);
          resizeObserver.observe(chartDiv);

          // Dispatch click event
          chartDiv.addEventListener('click', () => {
              dispatch('click');
          });
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
