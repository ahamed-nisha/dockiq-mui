# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# DockIQ UI | Updated MaterialUI Documentation

## Overview

DockIQ UI is a web interface counterpart for our DockIQ application. It displays container statistics including CPU usage, memory usage, network I/O, and other metrics in a clean, modern dashboard. This version utilizes Material UI's signature navy-based dark theme, providing a professional and accessible interface. The following details are comprehensive to ensure we all understand the involved components, and to ensure seamless integration with the remaining work to be done on the project.

## Technologies Used

### React

React is a JavaScript library for building user interfaces. Unlike vanilla JavaScript where you directly manipulate the webpage (DOM), React lets you build reusable components and manages webpage updates automatically.

Key concepts used in this project:

- Components (this entire UI is a single component called `DockIQ`)
- JSX (the HTML-like syntax in our JavaScript files)
- State management (for future data integration)

### Material UI (MUI)

Material UI is a comprehensive component library for React. Unlike Tailwind which provides utility classes, MUI provides pre-built components that we can customize. For example, instead of writing:

```jsx
<div className="p-4 bg-blue-500 rounded shadow">Content</div>
```

With MUI, we write:

```jsx
<Paper sx={{ p: 4 }}>Content</Paper>
```

In this project, MUI handles:

- Component styling through the `sx` prop
- Theme management (dark mode)
- Layout and spacing through MUI's spacing system
- Typography and colors through theme configuration
- Interactive states (hover, focus, etc.)

### MUI Icons

MUI provides its own icon library. There are two icons from it:

- `RefreshIcon` for the refresh button
- `KeyboardArrowDownIcon` for the expandable rows

## Setup Instructions

1. Clone repository and install dependencies:

```bash
git clone [repository-url]
cd dockiq-mui
npm install
```

2. Install required dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

3. Start the development server:

```bash
npm run dev
```

## Understanding the Code

### Component Structure

The UI is divided into several sections using MUI components:

1. Header with "DockIQ" title (`Typography` component)
2. Navigation tabs (`Tabs` and `Tab` components)
3. Refresh button (`Button` component with icon)
4. Data table (`Table` components) showing container metrics

### Key Features

- MUI's signature navy-based dark theme
- Responsive design using MUI's built-in responsive system
- Interactive elements with custom hover states
- Status indicators using MUI's `Chip` component
- Sortable columns (to be implemented)

## Placeholder Data

The following data in the code is currently placeholder content that will need to be connected to real data sources:

1. Container Information Object:

```javascript
const containers = [
  {
    name: "container-name", // Will be actual container name
    status: "Running", // Will be actual container status
    warning: true, // Will be based on metrics
    memUsage: "--", // Will show actual memory usage
    memLimit: "--", // Will show actual memory limit
    netIO: "--", // Will show actual network I/O
    blockIO: "--", // Will show actual block I/O
    pids: "--", // Will show actual number of processes
  },
  // More containers will be dynamically added
];
```

2. Status Indicators:

- The "Running" chip under CPU% will reflect actual CPU status
- The "Warning" chip under MEM% will reflect actual memory status

## Theme Configuration

The dark theme is configured in `src/theme.js`:

- Uses MUI's signature navy background (#0A1929)
- Darker navy (#001E3C) for surface elements
- Custom colors for status indicators
- Consistent spacing and typography

### Colors

- Background: Navy gradient (used MUI official docs for inspo/reference)
- Surface elements: Darker navy
- Text: White and rgba(255, 255, 255, 0.7) for secondary text
- Status indicators: Custom green for success, amber for warnings
- Table: Custom styled with themed borders and hover states

## Future Integration Points

The following areas are prepared for future integration:

1. Container data fetching from backend
2. Real-time updates via the refresh button
3. Sorting and filtering capabilities (easily implementable with MUI's DataGrid)
4. Detailed container information on row expansion
5. Integration with Grafana for metrics

## MUI-Specific Notes

Some key differences from traditional CSS approach:

1. Theme-based styling using the `sx` prop
2. Built-in dark mode support
3. Component-based architecture
4. Standardized spacing units (theme.spacing())
5. Automatic handling of focus and hover states

## Status Cards

TBD...
