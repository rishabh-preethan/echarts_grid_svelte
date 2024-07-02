<script>
  // Import the Layout component
  import Layout from './Layout.svelte';
  // Import the chartOptions from the separate file
  import { chartOptions } from '../data/echartOptions';
</script>

<!-- Pass the chartOptions array to the Layout component -->
<Layout {chartOptions} />
