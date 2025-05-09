# Zuba Broadband Client Management System

A minimalist, responsive client management system for Zuba Broadband with collapsible sidebar navigation, client profiles, quotations, and PDF generation capabilities.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Minimalist UI**: Clean interface inspired by Claude AI's design
- **Client Management**: View and manage client profiles and quotations
- **PDF Generation**: Download client profiles and quotations as PDF files
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modular Design**: Easy to add new clients and customize pages
- **Interactive Dashboard**: Get a quick overview of all clients and their status

## File Structure

```
zuba-broadband-website/
│
├── index.html                    # Main dashboard page with sidebar
├── css/
│   ├── style.css                 # Main stylesheet
│   ├── dark-mode.css             # Dark mode styles
│   └── print.css                 # Print-specific styles
│
├── js/
│   ├── main.js                   # Main JavaScript functionalities
│   ├── pdf-generator.js          # PDF generation functionality
│   ├── client-data.js            # Client data module
│   ├── navigation.js             # Navigation handling
│   └── charts.js                 # Dashboard chart configurations
│
├── img/
│   ├── logo.svg                  # Zuba Broadband logo
│   ├── client-logos/             # Client logo images
│   │   ├── old-mutual.png
│   │   ├── virunga-lodge.png
│   │   ├── bk.png
│   │   └── ...
│   └── icons/                    # Custom icons
│
├── clients/
│   ├── old-mutual/               # Example client folder
│   │   ├── profile.html          # Client profile page
│   │   └── quotation.html        # Client quotation page
│   ├── virunga-lodge/
│   │   ├── profile.html
│   │   └── quotation.html
│   └── ...                       # Other client folders
│
├── templates/                    # Templates for new clients
│   ├── profile-template.html     # Template for client profiles
│   └── quotation-template.html   # Template for client quotations
│
├── lib/                          # Third-party libraries
│   ├── mermaid.min.js            # For network diagrams
│   ├── html2pdf.bundle.min.js    # For PDF generation
│   └── tailwind.min.css          # CSS framework
│
└── README.md                     # Project documentation
```

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. The dashboard with client list will be displayed
4. Click on a client name to expand the dropdown menu
5. Click on "Profile" or "Quotation" to view the respective page

## Adding a New Client

Adding a new client to the system involves several steps:

### 1. Create Client Data Entry

Add a new entry to the `clientData` object in `js/client-data.js`:

```javascript
'client-id': {
    name: 'CLIENT NAME', // All caps for sidebar display
    fullName: 'Full Client Name', // Complete name
    package: '1 TB Package', // Package type
    packageType: '1TB', // Used for filtering
    monthlyRate: 675000, // Monthly rate in RWF
    currency: 'RWF', // Currency code
    dataUsage: 0.0, // Current data usage in TB
    dataLimit: 1, // Data limit in TB
    status: 'active', // active, warning, or inactive
    location: 'City, Country',
    address: 'Street Address, City',
    contactPerson: 'Contact Name',
    contactEmail: 'contact@example.com',
    contactPhone: '+250 XXX XXX XXX',
    contractStart: 'Month DD, YYYY', // Contract start date
    contractEnd: 'Month DD, YYYY', // Contract end date
    contractLength: 36, // Contract length in months
    installDate: 'Month DD, YYYY', // Installation date
    deviceSerials: {
        gateway: 'ZUBA-XXXXXXXXX', // Gateway serial number
        router: 'RT-XXXXXXXXX' // Router serial number
    },
    performance: {
        download: 000, // Average download speed in Mbps
        upload: 00, // Average upload speed in Mbps
        latency: 00 // Average latency in ms
    },
    connectedDevices: 00, // Number of connected devices
    lastUpdated: 'Month DD, YYYY', // Last update date
    hasCustomQuotation: false, // Set to true if custom quotation exists
    hasCustomProfile: false // Set to true if custom profile exists
}
```

### 2. Create Client Folder

Create a new folder for the client in the `clients/` directory:

```
clients/client-id/
```

### 3. Create Client Profile

1. Copy `templates/profile-template.html` to `clients/client-id/profile.html`
2. Replace all placeholders (text enclosed in `{{PLACEHOLDER}}`) with the client's information
3. Update the network architecture diagram as needed
4. Add client-specific notes and information

### 4. Create Client Quotation

1. Copy `templates/quotation-template.html` to `clients/client-id/quotation.html`
2. Replace all placeholders with the client's information
3. Update the package options and pricing as needed
4. Customize the notes section as required

### 5. Add Client Logo

Add the client's logo to `img/client-logos/` directory with the filename `client-id.png`.

### 6. Update Navigation

The client will automatically appear in the sidebar navigation since it reads from the `clientData` object.

## Template Placeholders

The templates use placeholder text that needs to be replaced with client-specific information. Here are the common placeholders:

### Profile Template Placeholders

- `{{CLIENT_NAME}}` - Short client name (all caps)
- `{{CLIENT_FULL_NAME}}` - Complete client name
- `{{CLIENT_ID}}` - Client ID (used in file paths)
- `{{CLIENT_ID_NUM}}` - Numeric client ID
- `{{CONTRACT_START_YEAR}}` - Year when contract started
- `{{LAST_UPDATED}}` - Last update date
- `{{CONTACT_PERSON}}` - Contact person's name
- `{{CONTACT_POSITION}}` - Contact person's position
- `{{CONTACT_EMAIL}}` - Contact email
- `{{CONTACT_PHONE}}` - Contact phone number
- `{{CLIENT_ADDRESS}}` - Client's address
- `{{GPS_COORDINATES}}` - GPS coordinates
- `{{SERVICE_PLAN}}` - Service plan name
- `{{DATA_LIMIT}}` - Data limit in TB
- `{{CONTRACT_START}}` - Contract start date
- `{{CONTRACT_END}}` - Contract end date
- `{{CONTRACT_LENGTH}}` - Contract length in months
- `{{PAYMENT_METHOD}}` - Payment method
- `{{SERVICE_STATUS}}` - Service status
- `{{MONTHLY_RATE}}` - Monthly rate
- `{{CURRENCY}}` - Currency code
- `{{GATEWAY_SERIAL}}` - Gateway serial number
- `{{GATEWAY_MODEL}}` - Gateway model
- `{{ROUTER_SERIAL}}` - Router serial number
- `{{INSTALL_DATE}}` - Installation date
- `{{INSTALL_TYPE}}` - Installation type
- `{{INSTALLER_NAME}}` - Installer's name
- `{{OBSTRUCTION_STATUS}}` - Obstruction status
- `{{DEVICE_TYPE_1}}` through `{{DEVICE_TYPE_4}}` - Connected device types
- `{{DEVICE_COUNT_1}}` through `{{DEVICE_COUNT_4}}` - Number of each device type
- `{{AVG_DOWNLOAD}}` - Average download speed
- `{{AVG_UPLOAD}}` - Average upload speed
- `{{AVG_LATENCY}}` - Average latency
- `{{DATA_USAGE}}` - Current data usage
- `{{DATA_USAGE_PERCENT}}` - Data usage as percentage of limit
- `{{LAST_SERVICE_CHECK}}` - Date of last service check
- `{{SUPPORT_TIER}}` - Support tier
- `{{SUPPORT_CONTACT}}` - Support contact
- `{{NEXT_MAINTENANCE}}` - Next scheduled maintenance
- `{{NOTE_1}}` through `{{NOTE_5}}` - Client-specific notes
- `{{DOCUMENT_DATE}}` - Document date in YYYYMMDD format
- `{{CREATED_BY}}` - Document creator
- `{{APPROVED_BY}}` - Document approver

### Quotation Template Placeholders

- `{{CLIENT_NAME}}` - Short client name (all caps)
- `{{CLIENT_FULL_NAME}}` - Complete client name
- `{{CLIENT_ID}}` - Client ID (used in file paths)
- `{{CLIENT_ADDRESS}}` - Client's address
- `{{CONTACT_PERSON}}` - Contact person's name
- `{{QUOTATION_NUMBER}}` - Quotation reference number
- `{{QUOTATION_DATE}}` - Quotation date
- `{{VALIDITY_PERIOD}}` - Validity period (e.g., "30 Days")
- `{{SALES_MANAGER}}` - Sales manager's name
- `{{SALES_PHONE}}` - Sales manager's phone number
- `{{SALES_EMAIL}}` - Sales manager's email
- `{{CURRENCY}}` - Currency code
- `{{CONTRACT_LENGTH}}` - Contract length in months
- `{{OVERAGE_RATE}}` - Rate for data overage
- `{{QUOTATION_REFERENCE}}` - Quotation reference

## PDF Generation

The system uses html2pdf.js to generate PDF files from HTML content. PDF generation is triggered by clicking the "Download as PDF" button on client profile and quotation pages.

## Customization

### Theme Customization

The system's colors and styles can be customized by modifying the CSS variables in `css/style.css`.

### Logo Customization

Replace `img/logo.svg` with your own logo to customize the branding.

### Adding Custom Fields

To add custom fields to client profiles or quotations:

1. Add the new field to the `clientData` object in `js/client-data.js`
2. Add the field to the appropriate template in `templates/` 
3. Update existing client pages as needed

## Browser Compatibility

The system works best in modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Mermaid.js](https://mermaid-js.github.io/mermaid/) - For network diagrams
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - For PDF generation
- [Font Awesome](https://fontawesome.com/) - For icons
- [Recharts](https://recharts.org/) - For charts and graphs
- [React](https://reactjs.org/) - For interactive components

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For support or questions, contact: 
- Email: support@zubabroadband.com 
- Phone: +250 790 099 777