/**
 * Zuba Broadband Client Management System
 * Charts Module
 * 
 * Handles data visualization for the dashboard
 */

import { clientData, getDashboardStats, getTopClientsByUsage, getClientsByPackage } from './client-data.js';

/**
 * Initialize dashboard charts
 */
export function initDashboardCharts() {
    createPackageDistributionChart();
    createDataUsageChart();
    updateDashboardStats();
}

/**
 * Update dashboard stats with current data
 */
function updateDashboardStats() {
    const stats = getDashboardStats();
    
    // Update stats cards
    document.getElementById('total-clients').textContent = stats.totalClients;
    document.getElementById('active-clients').textContent = stats.activeClients;
    
    // Format revenue with thousands separator
    const formattedRevenue = stats.totalRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('monthly-revenue').textContent = `${formattedRevenue} RWF`;
    
    // Update data usage percentage
    document.getElementById('avg-usage').textContent = `${Math.round(stats.avgUsagePercentage)}%`;
    
    // Update service status
    if (stats.warningClients > 0) {
        document.getElementById('service-status').textContent = `${stats.warningClients} clients need attention`;
        document.getElementById('service-status').className = 'text-yellow-500';
    } else {
        document.getElementById('service-status').textContent = 'All systems normal';
        document.getElementById('service-status').className = 'text-green-500';
    }
}

/**
 * Create package distribution chart
 */
function createPackageDistributionChart() {
    // Prepare data
    const stats = getDashboardStats();
    const data = [
        { name: '1 TB Package', value: stats.packageDistribution['1TB'], color: '#f97316' },
        { name: '3 TB Package', value: stats.packageDistribution['3TB'], color: '#3b82f6' },
        { name: '5 TB Package', value: stats.packageDistribution['5TB'], color: '#10b981' },
    ];
    
    // Get chart container
    const chartContainer = document.getElementById('package-chart');
    if (!chartContainer) return;
    
    // Create chart using Recharts
    const { PieChart, Pie, Cell, Legend, ResponsiveContainer } = window.Recharts;
    
    // Render chart
    const chart = (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
    
    // Render chart to container
    ReactDOM.render(chart, chartContainer);
}

/**
 * Create data usage chart
 */
function createDataUsageChart() {
    // Get top clients by usage
    const topClients = getTopClientsByUsage(5);
    
    // Prepare data for chart
    const data = topClients.map(client => ({
        name: client.name,
        usage: client.dataUsage,
        limit: client.dataLimit
    }));
    
    // Get chart container
    const chartContainer = document.getElementById('usage-chart');
    if (!chartContainer) return;
    
    // Create chart using Recharts
    const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = window.Recharts;
    
    // Render chart
    const chart = (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis label={{ value: 'TB', angle: -90, position: 'insideLeft', fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar name="Current Usage (TB)" dataKey="usage" fill="#f97316" />
                <Bar name="Package Limit (TB)" dataKey="limit" fill="#cbd5e1" />
            </BarChart>
        </ResponsiveContainer>
    );
    
    // Render chart to container
    ReactDOM.render(chart, chartContainer);
}

/**
 * Create client data usage history chart
 * @param {string} clientId - The client ID
 * @param {HTMLElement} container - The container element
 */
export function createClientUsageHistoryChart(clientId, container) {
    // In a real application, this would retrieve historical data
    // For this demo, we'll generate some sample data
    const client = clientData[clientId];
    if (!client || !container) return;
    
    // Generate sample historical data
    const months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const data = months.map((month, index) => {
        // Generate random usage between 40-90% of limit, with an upward trend
        const basePercentage = 0.4 + (index * 0.1);
        const randomVariation = Math.random() * 0.15;
        const percentage = Math.min(basePercentage + randomVariation, 0.95);
        
        return {
            name: month,
            usage: +(client.dataLimit * percentage).toFixed(2)
        };
    });
    
    // Create chart using Recharts
    const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } = window.Recharts;
    
    // Render chart
    const chart = (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                    formatter={(value) => [`${value} TB`, 'Usage']}
                    labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <ReferenceLine y={client.dataLimit} stroke="#f97316" strokeDasharray="3 3" label="Limit" />
                <Line 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#f97316" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
    
    // Render chart to container
    ReactDOM.render(chart, container);
}

/**
 * Update all dashboard charts
 */
export function updateDashboardCharts() {
    createPackageDistributionChart();
    createDataUsageChart();
    updateDashboardStats();
}

/**
 * Create performance metrics chart for a client
 * @param {string} clientId - The client ID
 * @param {HTMLElement} container - The container element
 */
export function createClientPerformanceChart(clientId, container) {
    const client = clientData[clientId];
    if (!client || !container) return;
    
    // Generate sample data for last 7 days
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = days.map(day => {
        // Generate random performance metrics
        const downloadVariation = Math.random() * 30 - 15; // +/- 15 Mbps
        const uploadVariation = Math.random() * 5 - 2.5;   // +/- 2.5 Mbps
        const latencyVariation = Math.random() * 10 - 5;   // +/- 5 ms
        
        return {
            name: day,
            download: Math.max(10, Math.round(client.performance.download + downloadVariation)),
            upload: Math.max(5, Math.round(client.performance.upload + uploadVariation)),
            latency: Math.max(10, Math.round(client.performance.latency + latencyVariation))
        };
    });
    
    // Create chart using Recharts
    const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = window.Recharts;
    
    // Render chart
    const chart = (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="speed" label={{ value: 'Mbps', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="latency" orientation="right" label={{ value: 'ms', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <Line 
                    yAxisId="speed"
                    type="monotone" 
                    dataKey="download" 
                    name="Download (Mbps)"
                    stroke="#f97316" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                />
                <Line 
                    yAxisId="speed"
                    type="monotone" 
                    dataKey="upload" 
                    name="Upload (Mbps)"
                    stroke="#3b82f6" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                />
                <Line 
                    yAxisId="latency"
                    type="monotone" 
                    dataKey="latency" 
                    name="Latency (ms)"
                    stroke="#10b981" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
    
    // Render chart to container
    ReactDOM.render(chart, container);
}