<script>
    import ChartComponent from './ChartComponent.svelte';
    import Grid from "svelte-grid";
    import gridHelp from "svelte-grid/build/helper/index.mjs";
    import { downloadPDF } from '../helper/pdfHelper.js'; // Import the downloadPDF function
    import MarkdownRenderer from './MarkdownRenderer.svelte'; // Import the MarkdownRenderer component
    import { chartTexts } from '../data/echartDescriptions.js'; // Import the chart texts
    import "./style/Layout.css"; // Import the CSS file

    export let chartOptions = [];

    const id = () => "_" + Math.random().toString(36).substr(2, 9);

    function calculateHeight(data) {
        const baseHeight = 1;
        const dataPointFactor = 0.1;
        return Math.ceil(baseHeight + data.length * dataPointFactor);
    }

    function generateLayout(options) {
        const rowLimit = 16;
        const chartsPerRow = options.length <= 3 ? options.length : Math.ceil(options.length / 2);
        let widthPerChart = Math.floor(rowLimit / chartsPerRow);
        let xPosition = 0;
        let yPosition = 0;
        let maxHeightInRow = 0;
        let layoutItems = [];

        options.forEach((option, i) => {
            const data = option.series[0].data;
            const height = calculateHeight(data);

            // Adjust for the last row if it has an odd number of items
            if (i === options.length - 1 && options.length % 2 === 1) {
                widthPerChart = rowLimit; // Make the last single chart full width
            }

            const item = {
                id: id(),
                option,
                selected: false,
                16: gridHelp.item({
                    x: xPosition,
                    y: yPosition,
                    w: widthPerChart,
                    h: height
                })
            };

            layoutItems.push(item);
            maxHeightInRow = Math.max(maxHeightInRow, height);

            if (xPosition + widthPerChart >= rowLimit) {
                xPosition = 0;
                yPosition += maxHeightInRow;
                maxHeightInRow = 0;
            } else {
                xPosition += widthPerChart;
            }

            // Reset xPosition for the next row
            if (xPosition >= rowLimit) {
                xPosition = 0;
                yPosition += maxHeightInRow;
                maxHeightInRow = 0;
            }
        });

        return layoutItems;
    }

    let cols = [[1287, 16]];
    let items = gridHelp.adjust(generateLayout(chartOptions), 16);

    let selectedText = "Click on a chart to see details";

    // Function to update the text based on the clicked chart
    function handleChartClick(chartIndex) {
        // Unselect all items
        items.forEach(item => item.selected = false);
        // Select the clicked item
        items[chartIndex].selected = true;
        // Update the selected text
        selectedText = chartTexts[chartIndex] || "No description available for this chart.";
    }
</script>

<div>
    <!-- Download button with Material Icon -->
    <button on:click={downloadPDF}>
        <span class="material-icons">file_download</span>
    </button>
</div>

<div class="container">
    <div class="demo-container">
        <Grid bind:items={items} rowHeight={150} let:dataItem {cols}>
            <div class="demo-widget" class:selected={dataItem.selected}>
                <ChartComponent option={dataItem.option} on:click={() => handleChartClick(items.indexOf(dataItem))} />
            </div>
        </Grid>
    </div>

    <!-- Add a new fixed container for the text tile -->
    <div class="text-container">
        <MarkdownRenderer content={selectedText} />
    </div>
</div>
