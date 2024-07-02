<script>
    import ChartComponent from './ChartComponent.svelte';
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
    import html2canvas from 'html2canvas';
    import jsPDF from 'jspdf';
    import { marked } from 'marked';

    export let chartOptions = [];

    const id = () => "_" + Math.random().toString(36).substr(2, 9);

    function calculateHeight(data) {
        const baseHeight = 1;
        const dataPointFactor = 0.1;
        return Math.ceil(baseHeight + data.length * dataPointFactor);
    }

    function calculateWidth(data) {
        const baseWidth = 4;
        const dataPointFactor = 0.4;
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

    let selectedText = "Click on a chart to see details";

    // Function to update the text based on the clicked chart
    function handleChartClick(chartIndex) {
        const markdownContent = `## Chart ${chartIndex + 1}\n\nThis is the detailed description of **Chart ${chartIndex + 1}** with some markdown formatting.`;
        selectedText = markdownContent;
    }

    // Function to download the charts as PDF
    async function downloadPDF() {
        const gridContainer = document.querySelector('.demo-container');
        const canvas = await html2canvas(gridContainer, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#f3f4f6' // Explicitly set the background color
        });
        const pdf = new jsPDF('landscape', 'pt', [canvas.width, canvas.height]);
        const imgData = canvas.toDataURL('image/png');

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('charts.pdf');
    }

    // Function to render markdown content
    function renderMarkdown(content) {
        return marked(content);
    }
</script>

<style>
    :global(body) {
        background-color: #f3f4f6; /* Set background color here */
        margin: 0;
        font-family: sans-serif;
    }

    .demo-widget {
        background: rgb(255, 255, 255);
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 15px;
        padding-left: 15px;
    }

    .container {
        display: flex;
        height: 100vh;
    }

    .demo-container {
        flex: 1;
        max-width: 80%;
        width: 80%;
    }

    .text-container {
        width: 20%;
        display: flex;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        align-items: center;
        justify-content: start;
        background-color: #fff;
        border-left: 1px solid #ddd;
        padding: 20px;
        overflow-y: auto;
        margin-left: 25px;
        margin-right: 30px;
        margin-top: 10px;
    }

    .markdown-content {
        width: 100%;
        max-width: 100%;
    }

    button {
        margin-bottom: 10px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 10px;
        color: #333;
    }

    button:hover {
        color: #000;
    }

    .material-icons {
        font-size: 25px;
    }
</style>

<div>
    <!-- Download button with Material Icon -->
    <button on:click={downloadPDF}>
        <span class="material-icons">file_download</span>
    </button>
</div>

<div class="container">
    <div class="demo-container">
        <Grid bind:items={items} rowHeight={150} let:dataItem {cols}>
            <div class="demo-widget">
                <ChartComponent option={dataItem.option} on:click={() => handleChartClick(items.indexOf(dataItem))} />
            </div>
        </Grid>
    </div>

    <!-- Add a new fixed container for the text tile -->
    <div class="text-container">
        <div class="markdown-content">
            {@html renderMarkdown(selectedText)}
        </div>
    </div>
</div>
