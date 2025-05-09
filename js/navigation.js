/**
 * Zuba Broadband Client Management System
 * Fixed Navigation Module
 */

// DOM elements
document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary DOM elements
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const collapseBtn = document.getElementById('collapse-btn');
    const expandBtn = document.getElementById('expand-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const clientItems = document.querySelectorAll('.client-item');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const pageTitle = document.getElementById('page-title');
    const dashboard = document.getElementById('dashboard');
    const clientFrame = document.getElementById('client-frame');

    // Toggle sidebar collapse
    collapseBtn.addEventListener('click', function() {
        sidebar.classList.add('collapsed');
        content.classList.add('expanded');
    });

    // Toggle sidebar expand
    expandBtn.addEventListener('click', function() {
        sidebar.classList.remove('collapsed');
        content.classList.remove('expanded');
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });

    // Load theme preference from localStorage
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    // Toggle client dropdowns
    clientItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            // Find the toggle button and dropdown
            const toggleBtn = this.querySelector('.toggle-btn');
            const dropdown = this.nextElementSibling;
            const isActive = dropdown.classList.contains('active');
            
            // Close all dropdowns first
            document.querySelectorAll('.client-dropdown').forEach(function(el) {
                el.classList.remove('active');
            });
            
            document.querySelectorAll('.toggle-btn').forEach(function(btn) {
                btn.classList.remove('rotated');
            });
            
            // Toggle current dropdown if it wasn't active
            if (!isActive) {
                dropdown.classList.add('active');
                toggleBtn.classList.add('rotated');
            }
        });
    });

    // Handle client page navigation
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            
            const client = this.getAttribute('data-client');
            const page = this.getAttribute('data-page');
            
            // Update page title
            const clientName = this.closest('.client-container').querySelector('.client-item span').textContent;
            pageTitle.textContent = `${clientName} - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
            
            // Hide dashboard and show client frame
            dashboard.classList.add('hidden');
            clientFrame.classList.remove('hidden');
            
            // Load client page
            clientFrame.src = `clients/${client}/${page}.html`;
            
            // On mobile, collapse sidebar after selection
            if (window.innerWidth < 1024) {
                sidebar.classList.add('collapsed');
                content.classList.add('expanded');
            }
        });
    });

    // Return to dashboard when clicking on title
    pageTitle.addEventListener('click', function() {
        if (pageTitle.textContent !== 'Dashboard') {
            pageTitle.textContent = 'Dashboard';
            clientFrame.classList.add('hidden');
            dashboard.classList.remove('hidden');
        }
    });

    // Initialize Mermaid for diagrams
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
            securityLevel: 'loose',
            flowchart: { useMaxWidth: true }
        });
    }

    // Add responsive behavior for sidebar
    window.addEventListener('resize', function() {
        if (window.innerWidth < 1024) {
            sidebar.classList.add('collapsed');
            content.classList.add('expanded');
        } else {
            sidebar.classList.remove('collapsed');
            content.classList.remove('expanded');
        }
    });

    // Trigger resize event to set initial state
    if (window.innerWidth < 1024) {
        sidebar.classList.add('collapsed');
        content.classList.add('expanded');
    }
});