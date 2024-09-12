# COVID-19 Dashboard

This project is a simple dashboard that displays COVID-19 data using a line graph for case fluctuations and a map with country-specific data.

## Features

- Line graph showing global COVID-19 case fluctuations over time
- Interactive map with markers for each country, displaying:
  - Total number of active cases
  - Total number of recovered cases
  - Total number of deaths

## Technologies Used

- React with TypeScript
- Vite for project setup and bundling
- React Query for API data fetching and caching
- Recharts for the line graph
- React Leaflet for the map
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/covid-dashboard.git
   cd covid-dashboard

2. Install dependencies:
   ```bash
   npm install

## Running the App

To start the development server:
   ```bash
   npm run dev
```

The app will be available at http://localhost:5173 (or another port if 5173 is in use).

## API Endpoints

This dashboard uses the following API endpoints from the disease.sh API:

### Worldwide COVID-19 data:

- **Endpoint:** `https://disease.sh/v3/covid-19/all`
- **Used for:** Fetching global statistics

### Country-specific COVID-19 data:

- **Endpoint:** `https://disease.sh/v3/covid-19/countries`
- **Used for:** Fetching data for map markers

### Historical data for case fluctuations:

- **Endpoint:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
- **Used for:** Generating the line graph of case fluctuations over time



