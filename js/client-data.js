/**
 * Zuba Broadband Client Management System
 * Client Data Module
 * 
 * This file contains data for all clients in the system.
 * When adding a new client, add their entry here to ensure
 * the dashboard and navigation work correctly.
 */

export const clientData = {
    'old-mutual': {
        name: 'OLD MUTUAL',
        fullName: 'Old Mutual Insurance Rwanda',
        package: '1 TB Package',
        packageType: '1TB',
        monthlyRate: 675000,
        currency: 'RWF',
        dataUsage: 0.8,
        dataLimit: 1,
        status: 'active',
        location: 'Kigali, Rwanda',
        address: '2 KN 3 Ave, Kigali',
        contactPerson: 'Jean Marie Gashonga',
        contactEmail: 'jgashonga@oldmutualrw.com',
        contactPhone: '+250 788 123 456',
        contractStart: 'January 15, 2025',
        contractEnd: 'January 14, 2028',
        contractLength: 36, // months
        installDate: 'January 18, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST37F928D5',
            router: 'RT-XR5487A32E'
        },
        performance: {
            download: 185, // Mbps
            upload: 22,    // Mbps
            latency: 42    // ms
        },
        connectedDevices: 94,
        lastUpdated: 'May 7, 2025',
        hasCustomQuotation: true,
        hasCustomProfile: true
    },
    'virunga-lodge': {
        name: 'VIRUNGA LODGE HP',
        fullName: 'Virunga Lodge',
        package: '3 TB Package',
        packageType: '3TB',
        monthlyRate: 1050000,
        currency: 'RWF',
        dataUsage: 2.7,
        dataLimit: 3,
        status: 'active',
        location: 'Musanze, Rwanda',
        address: 'Virunga Mountain Range, Musanze',
        contactPerson: 'David Wilson',
        contactEmail: 'operations@virungalodge.com',
        contactPhone: '+250 782 456 789',
        contractStart: 'December 5, 2024',
        contractEnd: 'December 4, 2027',
        contractLength: 36, // months
        installDate: 'December 10, 2024',
        deviceSerials: {
            gateway: 'ZUBA-ST41C835A7',
            router: 'RT-VB6592C41D'
        },
        performance: {
            download: 175, // Mbps
            upload: 20,    // Mbps
            latency: 45    // ms
        },
        connectedDevices: 32,
        lastUpdated: 'May 5, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'bk-hq': {
        name: 'BK HQ',
        fullName: 'Bank of Kigali Headquarters',
        package: '5 TB Package',
        packageType: '5TB',
        monthlyRate: 1350000,
        currency: 'RWF',
        dataUsage: 4.2,
        dataLimit: 5,
        status: 'active',
        location: 'Kigali, Rwanda',
        address: 'KN 4 Ave, Kigali',
        contactPerson: 'Jean Paul Murenzi',
        contactEmail: 'jmurenzi@bk.rw',
        contactPhone: '+250 788 987 654',
        contractStart: 'February 1, 2025',
        contractEnd: 'January 31, 2028',
        contractLength: 36, // months
        installDate: 'February 5, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST55D947B1',
            router: 'RT-ZK7891D25E'
        },
        performance: {
            download: 210, // Mbps
            upload: 25,    // Mbps
            latency: 38    // ms
        },
        connectedDevices: 156,
        lastUpdated: 'May 6, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'mille-collines': {
        name: 'MILLE COLLINES',
        fullName: 'Hotel des Mille Collines',
        package: '1 TB Package',
        packageType: '1TB',
        monthlyRate: 675000,
        currency: 'RWF',
        dataUsage: 0.9,
        dataLimit: 1,
        status: 'active',
        location: 'Kigali, Rwanda',
        address: '2 KN 6 Ave, Kigali',
        contactPerson: 'Marie Claire Ingabire',
        contactEmail: 'it@millecollines.rw',
        contactPhone: '+250 783 321 654',
        contractStart: 'January 20, 2025',
        contractEnd: 'January 19, 2028',
        contractLength: 36, // months
        installDate: 'January 25, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST39E765C8',
            router: 'RT-MC4721F36E'
        },
        performance: {
            download: 180, // Mbps
            upload: 21,    // Mbps
            latency: 40    // ms
        },
        connectedDevices: 87,
        lastUpdated: 'May 4, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'akagera-aviation': {
        name: 'AKAGERA AVIATION',
        fullName: 'Akagera Aviation Services',
        package: '1 TB Package',
        packageType: '1TB',
        monthlyRate: 675000,
        currency: 'RWF',
        dataUsage: 0.4,
        dataLimit: 1,
        status: 'active',
        location: 'Kigali, Rwanda',
        address: 'Kigali International Airport',
        contactPerson: 'Eric Mutabazi',
        contactEmail: 'operations@akageraaviation.rw',
        contactPhone: '+250 788 432 198',
        contractStart: 'March 1, 2025',
        contractEnd: 'February 28, 2028',
        contractLength: 36, // months
        installDate: 'March 5, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST43G129F5',
            router: 'RT-AV5821H47K'
        },
        performance: {
            download: 190, // Mbps
            upload: 22,    // Mbps
            latency: 39    // ms
        },
        connectedDevices: 28,
        lastUpdated: 'May 3, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'prime-insurance': {
        name: 'PRIME INSURANCE HQ',
        fullName: 'Prime Insurance Headquarters',
        package: '3 TB Package',
        packageType: '3TB',
        monthlyRate: 1050000,
        currency: 'RWF',
        dataUsage: 2.1,
        dataLimit: 3,
        status: 'active',
        location: 'Kigali, Rwanda',
        address: 'KG 548 St, Kacyiru, Kigali',
        contactPerson: 'Frank Kamanzi',
        contactEmail: 'it@primeinsurance.rw',
        contactPhone: '+250 786 543 219',
        contractStart: 'February 15, 2025',
        contractEnd: 'February 14, 2028',
        contractLength: 36, // months
        installDate: 'February 20, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST47H238G6',
            router: 'RT-PI6932J58L'
        },
        performance: {
            download: 185, // Mbps
            upload: 21,    // Mbps
            latency: 41    // ms
        },
        connectedDevices: 53,
        lastUpdated: 'May 2, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'bk': {
        name: 'BK',
        fullName: 'Bank of Kigali (Branch)',
        package: '3 TB Package',
        packageType: '3TB',
        monthlyRate: 1050000,
        currency: 'RWF',
        dataUsage: 2.8,
        dataLimit: 3,
        status: 'warning',
        location: 'Musanze, Rwanda',
        address: 'Main St, Musanze',
        contactPerson: 'Claude Mugabo',
        contactEmail: 'cmugabo@bk.rw',
        contactPhone: '+250 788 654 321',
        contractStart: 'January 25, 2025',
        contractEnd: 'January 24, 2028',
        contractLength: 36, // months
        installDate: 'January 30, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST42I347H7',
            router: 'RT-BK7043K69M'
        },
        performance: {
            download: 175, // Mbps
            upload: 20,    // Mbps
            latency: 43    // ms
        },
        connectedDevices: 42,
        lastUpdated: 'May 1, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'royal-fm': {
        name: 'ROYAL FM',
        fullName: 'Royal FM Radio Station',
        package: '3 TB Package',
        packageType: '3TB',
        monthlyRate: 1050000,
        currency: 'RWF',
        dataUsage: 1.9,
        dataLimit: 3,
        status: 'active',
        location: 'Kigali, Rwanda',
        address: 'KK 15 Ave, Kigali',
        contactPerson: 'Joseph Ndayisenga',
        contactEmail: 'tech@royalfm.rw',
        contactPhone: '+250 785 765 432',
        contractStart: 'March 10, 2025',
        contractEnd: 'March 9, 2028',
        contractLength: 36, // months
        installDate: 'March 15, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST44J456I8',
            router: 'RT-RF8154L70N'
        },
        performance: {
            download: 182, // Mbps
            upload: 21,    // Mbps
            latency: 40    // ms
        },
        connectedDevices: 25,
        lastUpdated: 'April 30, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'avipro-rwanda': {
        name: 'AVIPRO RWANDA',
        fullName: 'Avipro Rwanda Ltd',
        package: '1 TB Package',
        packageType: '1TB',
        monthlyRate: 675000,
        currency: 'RWF',
        dataUsage: 0.6,
        dataLimit: 1,
        status: 'active',
        location: 'Huye, Rwanda',
        address: 'Industrial Zone, Huye',
        contactPerson: 'Alice Uwimana',
        contactEmail: 'it@avipro.rw',
        contactPhone: '+250 787 876 543',
        contractStart: 'February 20, 2025',
        contractEnd: 'February 19, 2028',
        contractLength: 36, // months
        installDate: 'February 25, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST45K567J9',
            router: 'RT-AP9265M81P'
        },
        performance: {
            download: 175, // Mbps
            upload: 19,    // Mbps
            latency: 45    // ms
        },
        connectedDevices: 34,
        lastUpdated: 'April 29, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    },
    'kivu-noir': {
        name: 'KIVU NOIR CAFE',
        fullName: 'Kivu Noir Coffee',
        package: '5 TB Package',
        packageType: '5TB',
        monthlyRate: 1350000,
        currency: 'RWF',
        dataUsage: 3.5,
        dataLimit: 5,
        status: 'warning',
        location: 'Rubavu, Rwanda',
        address: 'Lake Kivu Rd, Rubavu',
        contactPerson: 'Simon Nzabonimpa',
        contactEmail: 'operations@kivunoir.com',
        contactPhone: '+250 789 987 654',
        contractStart: 'January 5, 2025',
        contractEnd: 'January 4, 2028',
        contractLength: 36, // months
        installDate: 'January 10, 2025',
        deviceSerials: {
            gateway: 'ZUBA-ST46L678K0',
            router: 'RT-KN0376N92Q'
        },
        performance: {
            download: 165, // Mbps
            upload: 18,    // Mbps
            latency: 50    // ms
        },
        connectedDevices: 47,
        lastUpdated: 'April 28, 2025',
        hasCustomQuotation: false,
        hasCustomProfile: false
    }
};

/**
 * Get clients filtered by package type
 * @param {string} packageType - The package type to filter by
 * @returns {Object} Filtered client data
 */
export function getClientsByPackage(packageType) {
    const result = {};
    
    Object.keys(clientData).forEach(clientId => {
        if (clientData[clientId].packageType === packageType) {
            result[clientId] = clientData[clientId];
        }
    });
    
    return result;
}

/**
 * Get clients filtered by status
 * @param {string} status - The status to filter by
 * @returns {Object} Filtered client data
 */
export function getClientsByStatus(status) {
    const result = {};
    
    Object.keys(clientData).forEach(clientId => {
        if (clientData[clientId].status === status) {
            result[clientId] = clientData[clientId];
        }
    });
    
    return result;
}

/**
 * Get total monthly revenue
 * @returns {number} Total monthly revenue
 */
export function getTotalMonthlyRevenue() {
    let total = 0;
    
    Object.keys(clientData).forEach(clientId => {
        total += clientData[clientId].monthlyRate;
    });
    
    return total;
}

/**
 * Calculate statistics for dashboard
 * @returns {Object} Dashboard statistics
 */
export function getDashboardStats() {
    const total = Object.keys(clientData).length;
    const activeClients = Object.keys(getClientsByStatus('active')).length;
    const warningClients = Object.keys(getClientsByStatus('warning')).length;
    const tb1Clients = Object.keys(getClientsByPackage('1TB')).length;
    const tb3Clients = Object.keys(getClientsByPackage('3TB')).length;
    const tb5Clients = Object.keys(getClientsByPackage('5TB')).length;
    const totalRevenue = getTotalMonthlyRevenue();
    
    return {
        totalClients: total,
        activeClients,
        warningClients,
        packageDistribution: {
            '1TB': tb1Clients,
            '3TB': tb3Clients,
            '5TB': tb5Clients
        },
        totalRevenue,
        avgUsagePercentage: calculateAverageUsagePercentage()
    };
}

/**
 * Calculate average data usage percentage across all clients
 * @returns {number} Average usage percentage
 */
function calculateAverageUsagePercentage() {
    let totalPercentage = 0;
    const clientCount = Object.keys(clientData).length;
    
    Object.keys(clientData).forEach(clientId => {
        const client = clientData[clientId];
        totalPercentage += (client.dataUsage / client.dataLimit) * 100;
    });
    
    return totalPercentage / clientCount;
}

/**
 * Get top clients by data usage
 * @param {number} limit - Number of clients to return
 * @returns {Array} Top clients by data usage
 */
export function getTopClientsByUsage(limit = 5) {
    const clients = Object.keys(clientData).map(id => ({
        id,
        ...clientData[id]
    }));
    
    clients.sort((a, b) => b.dataUsage - a.dataUsage);
    
    return clients.slice(0, limit);
}

/**
 * Add a new client
 * @param {string} id - Client ID
 * @param {Object} data - Client data
 */
export function addClient(id, data) {
    clientData[id] = {
        ...data,
        hasCustomQuotation: false,
        hasCustomProfile: false
    };
}