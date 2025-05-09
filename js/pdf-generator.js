/**
 * Zuba Broadband Client Management System
 * PDF Generator Module
 * 
 * Handles PDF generation for client profiles and quotations
 */

import { clientData } from './client-data.js';

/**
 * Set up PDF generator
 */
export function setupPdfGenerator() {
    // Add message listener for PDF requests from iframes
    window.addEventListener('message', handlePdfMessage);
}

/**
 * Handle messages from iframes
 * @param {MessageEvent} event - Message event
 */
function handlePdfMessage(event) {
    if (event.data && event.data.type === 'download-pdf') {
        console.log('PDF download requested for:', event.data.client, event.data.page);
    }
}

/**
 * Generate PDF from content
 * @param {HTMLElement} content - The content to convert to PDF
 * @param {string} filename - The filename for the PDF
 */
export function generatePdf(content, filename) {
    // Clone content to avoid modifying the original
    const clonedContent = content.cloneNode(true);
    
    // Remove elements with no-print class
    const noPrintElements = clonedContent.querySelectorAll('.no-print');
    noPrintElements.forEach(el => el.remove());
    
    // Configure PDF options
    const options = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // Generate PDF
    return html2pdf().set(options).from(clonedContent).save();
}

/**
 * Download client profile as PDF
 * @param {string} clientId - The client ID
 */
export function downloadClientProfile(clientId) {
    const client = clientData[clientId];
    if (!client) {
        console.error(`Client data not found for ID: ${clientId}`);
        return;
    }
    
    const iframe = document.getElementById('client-frame');
    if (!iframe || !iframe.contentDocument) {
        console.error('Client frame not found or cannot access content');
        return;
    }
    
    const content = iframe.contentDocument.body;
    const filename = `${client.name.toLowerCase().replace(/\s+/g, '-')}-profile.pdf`;
    
    generatePdf(content, filename);
}

/**
 * Download client quotation as PDF
 * @param {string} clientId - The client ID
 */
export function downloadClientQuotation(clientId) {
    const client = clientData[clientId];
    if (!client) {
        console.error(`Client data not found for ID: ${clientId}`);
        return;
    }
    
    const iframe = document.getElementById('client-frame');
    if (!iframe || !iframe.contentDocument) {
        console.error('Client frame not found or cannot access content');
        return;
    }
    
    const content = iframe.contentDocument.body;
    const filename = `${client.name.toLowerCase().replace(/\s+/g, '-')}-quotation.pdf`;
    
    generatePdf(content, filename);
}

/**
 * Add PDF download button to client page
 * @param {Document} doc - The document to add the button to
 * @param {string} clientId - The client ID
 * @param {string} pageType - The page type (profile/quotation)
 */
export function addPdfButton(doc, clientId, pageType) {
    // Check if button already exists
    if (doc.getElementById('download-pdf')) {
        return;
    }
    
    // Create button
    const button = doc.createElement('button');
    button.id = 'download-pdf';
    button.className = 'fixed bottom-6 right-6 flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md z-50 no-print';
    button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
        </svg>
        Download as PDF
    `;
    
    // Add click event
    button.addEventListener('click', () => {
        const client = clientData[clientId];
        if (!client) return;
        
        // Hide button during PDF generation
        button.style.display = 'none';
        
        // Get content and filename
        const content = doc.body;
        const filename = `${client.name.toLowerCase().replace(/\s+/g, '-')}-${pageType}.pdf`;
        
        // Generate PDF
        generatePdf(content, filename).then(() => {
            // Show button again
            button.style.display = 'flex';
        });
    });
    
    // Add button to document
    doc.body.appendChild(button);
}

/**
 * Create print stylesheet
 * @param {Document} doc - The document to add the stylesheet to
 */
export function addPrintStyles(doc) {
    // Check if stylesheet already exists
    if (doc.getElementById('print-styles')) {
        return;
    }
    
    // Create stylesheet
    const style = doc.createElement('style');
    style.id = 'print-styles';
    style.textContent = `
        @media print {
            .no-print {
                display: none !important;
            }
            
            body {
                padding: 0;
                margin: 0;
            }
            
            .container {
                max-width: 100%;
                margin: 0;
                padding: 15px;
            }
            
            .section {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    `;
    
    // Add stylesheet to document head
    doc.head.appendChild(style);
}