import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function downloadPDF() {
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
