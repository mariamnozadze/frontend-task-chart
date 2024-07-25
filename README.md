I ran into an issue:
# Both error and success toasts are being displayed on page reload
1.added a type for the API response (ApiResponse) to better handle the structure of the data returned by the server. 
fetchChartData function now checks both the HTTP status (response.ok) and the API status in the response body. This handles cases where the server might return a 200 OK status with an error in the body.

after googling:
The useEffect hook is still being called twice, which is likely due to React's StrictMode in development. This is normal behavior and helps catch certain types of bugs. In production, it should only run once.

### Prerequisites
- [pnpm >= 9.5](https://pnpm.io/installation)
- [node >= 20](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

### Run locally
- `pnpm i`
- `pnpm dev`

## Instructions
1. Chart Data Integration
  - Replace the mock data currently used by the BarChart component.
  - Fetch data from the `/api/data/chart-data endpoint` served from http://localhost:3001.
  - Ensure that the BarChart component displays this data.

2. Toast Notifications 
  - Implement the `renderToast` method for the `ToastProvider` in `src/ui/providers/toast/toast.tsx`.
  - Display a toast message using the existing Toast component in `src/ui/components/Toast`. 
  - Show a success message if the request to `/api/data/chart-data` succeeds. 
  - Show a failure message if the request fails.

3.Hook Up Controls 
  - Connect the "Min", "Max", and "Reset" controls to filter the chart data accordingly. 
  - Ensure that the "Min" and "Max" controls filter the chart data based on their values. 
  - Ensure that the "Reset" control resets the chart data to its original state.

## API Endpoint Details

- Endpoint: /api/data/chart-data
- Method: GET
- Response: JSON object with chart data.

## UI Components

- BarChart Component: Displays the chart.
- Toast Component: Displays toast notifications. Located in `src/ui/components/Toast`.

## Controls

- Min Control: Filters chart data to only show values greater than or equal to the specified minimum.
- Max Control: Filters chart data to only show values less than or equal to the specified maximum.
- Reset Control: Resets the chart data to its original state.

