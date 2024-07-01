<script>
    import ChartComponent from './ChartComponent.svelte';
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
    import html2canvas from 'html2canvas';
    import jsPDF from 'jspdf';

    export let chartOptions = [];

    const id = () => "_" + Math.random().toString(36).substr(2, 9);

    function calculateHeight(data) {
        const baseHeight = 3;
        const dataPointFactor = 0.2;
        return Math.ceil(baseHeight + data.length * dataPointFactor);
    }

    function calculateWidth(data) {
        const baseWidth = 4;
        const dataPointFactor = 0.5;
        return Math.ceil(baseWidth + data.length * dataPointFactor);
    }

    function generateLayout(options) {
        return options.map((option, i) => {
            const data = option.series[0].data;
            const height = calculateHeight(data);
            const width = calculateWidth(data);
            return {
                16: gridHelp.item({ x: (i * width) % 16, y: Math.floor(i / 4) * height, w: width, h: height }),
                id: id(),
                option,
            };
        });
    }

    let cols = [[1287, 16]];
    let items = gridHelp.adjust(generateLayout(chartOptions), 16);

    // Function to download the charts as PDF
    async function downloadPDF() {
        const gridContainer = document.querySelector('.demo-container');
        const canvas = await html2canvas(gridContainer, { scale: 2 });
        const pdf = new jsPDF('landscape', 'pt', [canvas.width, canvas.height]);
        const imgData = canvas.toDataURL('image/png');

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('charts.pdf');
    }
</script>

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
        max-width: 100%;
        width: 100%;
    }
</style>

<div>
    <!-- Download button -->
    <button on:click={downloadPDF}>Download as PDF</button>
</div>

<div class="demo-container">
    <Grid bind:items={items} rowHeight={100} let:dataItem {cols}>
        <div class="demo-widget">
            <ChartComponent option={dataItem.option} />
        </div>
    </Grid>
</div>
