/**
 * Zuba Broadband Client Management System
 * Main JavaScript file
 */

// Import modules
import { initSidebar } from './navigation.js';
import { initDashboardCharts } from './charts.js';
import { setupPdfGenerator } from './pdf-generator.js';
import { clientData } from './client-data.js';

// DOM Elements
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const collapseBtn = document.getElementById('collapse-btn');
const expandBtn = document.getElementById('expand-btn');
const themeToggle = document.getElementById('theme-toggle');
const pageTitle = document.getElementById('page-title');
const dashboard = document.getElementById('dashboard');
const clientFrame = document.getElementById('client-frame');

/**
 * Initialize the application
 */
function initApp() {
    // Initialize components
    initSidebar();
    initDashboardCharts();
    setupPdfGenerator();
    setupEventListeners();
    loadThemePreference();
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
    // Toggle sidebar collapse
    collapseBtn.addEventListener('click', () => {
        sidebar.classList.add('collapsed');
        content.classList.add('expanded');
    });

    // Toggle sidebar expand
    expandBtn.addEventListener('click', () => {
        sidebar.classList.remove('collapsed');
        content.classList.remove('expanded');
    });

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        updateMermaidTheme();
    });

    // Return to dashboard when clicking on title
    pageTitle.addEventListener('click', function() {
        if (pageTitle.textContent !== 'Dashboard') {
            pageTitle.textContent = 'Dashboard';
            clientFrame.classList.add('hidden');
            dashboard.classList.remove('hidden');
        }
    });

    // Handle messages from iframes (for PDF generation)
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'download-pdf') {
            console.log('PDF download requested for:', event.data.client);
        }
    });
}

/**
 * Load theme preference from localStorage
 */
function loadThemePreference() {
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    updateMermaidTheme();
}

/**
 * Update Mermaid diagram theme
 */
function updateMermaidTheme() {
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: true,
            theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
            securityLevel: 'loose',
            flowchart: { useMaxWidth: true }
        });
    }
}

/**
 * Generate HTML for client placeholders
 * Used when actual client pages don't exist yet
 */
function generateClientPlaceholder(client, page) {
    const clientInfo = clientData[client];
    
    return `
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="../lib/tailwind.min.css" rel="stylesheet">
            <script src="../lib/html2pdf.bundle.min.js"></script>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    padding: 2rem;
                }
                .accent-text { color: #f97316; }
                @media print {
                    .no-print {
                        display: none;
                    }
                }
            </style>
        </head>
        <body class="bg-gray-50">
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-lg shadow p-6 mb-6">
                    <h1 class="text-2xl font-bold mb-4">${clientInfo.name} - ${page.charAt(0).toUpperCase() + page.slice(1)}</h1>
                    <p class="text-gray-600 mb-6">This is a placeholder for the ${clientInfo.name} ${page} page.</p>
                    <div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                        <p class="font-medium">In the actual implementation, this would load <code class="bg-gray-100 px-1 py-0.5 rounded">${client}-${page}.html</code></p>
                    </div>
                    <div class="mt-6 p-4 bg-gray-100 rounded">
                        <h3 class="font-semibold mb-2">Client Info</h3>
                        <p><strong>Package:</strong> <span class="accent-text">${clientInfo.package}</span></p>
                        <p><strong>Data Usage:</strong> ${clientInfo.dataUsage} TB / ${clientInfo.dataLimit} TB</p>
                        <p><strong>Status:</strong> ${clientInfo.status}</p>
                        <p><strong>Last Updated:</strong> ${clientInfo.lastUpdated}</p>
                    </div>
                </div>
                
                <button id="download-pdf" class="no-print fixed bottom-6 right-6 flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
                    </svg>
                    Download as PDF
                </button>
            </div>
            
            <script>
                document.getElementById('download-pdf').addEventListener('click', function() {
                    // Remove download button before PDF generation
                    this.style.display = 'none';
                    
                    // Configure PDF options
                    const options = {
                        margin: 10,
                        filename: '${clientInfo.name.toLowerCase().replace(/\s+/g, '-')}-${page}.pdf',
                        image: { type: 'jpeg', quality: 0.98 },
                        html2canvas: { scale: 2, useCORS: true },
                        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                    };
                    
                    // Generate PDF
                    html2pdf().set(options).from(document.body).save().then(() => {
                        this.style.display = 'flex';
                    });
                });
            </script>
        </body>
        </html>
    `;
}

/**
 * Load client page into iframe
 */
function loadClientPage(client, page) {
    // Hide dashboard and show client frame
    dashboard.classList.add('hidden');
    clientFrame.classList.remove('hidden');
    
    try {
        // Check if client page exists
        fetch(`clients/${client}/${page}.html`)
            .then(response => {
                if (response.ok) {
                    // Load actual client page
                    clientFrame.src = `clients/${client}/${page}.html`;
                } else {
                    // Load placeholder
                    clientFrame.srcdoc = generateClientPlaceholder(client, page);
                }
            })
            .catch(() => {
                // Load placeholder on error
                clientFrame.srcdoc = generateClientPlaceholder(client, page);
            });
    } catch (error) {
        console.error('Error loading client page:', error);
        clientFrame.srcdoc = generateClientPlaceholder(client, page);
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Export functions that might be needed by other modules
export {
    loadClientPage,
    updateMermaidTheme,
    generateClientPlaceholder
};