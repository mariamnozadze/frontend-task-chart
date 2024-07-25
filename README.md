# Take Home Coding Exercise

## Getting Started

### Prerequisites
- [pnpm >= 9.5](https://pnpm.io/installation)
- [node >= 20](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

### Run locally
- `pnpm i`
- `pnpm dev`

## Instructions

1. Fork the Repository
  - Fork this repository to your own GitHub account.
  - Clone the forked repository to your local machine.

2. Time Limit
  - Please limit the time spent on this exercise to no more than 3 hours.

3. Chart Data Integration
  - Replace the mock data currently used by the BarChart component.
  - Fetch data from the `/api/data/chart-data endpoint` served from http://localhost:3001.
  - Ensure that the BarChart component displays this data.
4. Toast Notifications 
  - Implement the `renderToast` method for the `ToastProvider` in `src/ui/providers/toast/toast.tsx`.
  - Display a toast message using the existing Toast component in `src/ui/components/Toast`. 
  - Show a success message if the request to `/api/data/chart-data` succeeds. 
  - Show a failure message if the request fails.

5.Hook Up Controls 
  - Connect the "Min", "Max", and "Reset" controls to filter the chart data accordingly. 
  - Ensure that the "Min" and "Max" controls filter the chart data based on their values. 
  - Ensure that the "Reset" control resets the chart data to its original state.

## Submission

- Push your changes to your forked repository.
- Email a link to your forked repository to frank@8flow.com.

## Additional Notes

- Focus on completing the main requirements within the 2-hour limit.
- Write clean, maintainable code.
- Comment your code where necessary to explain your logic.
- You may use any libraries or tools you are comfortable with, but ensure all dependencies are included and documented.

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

Happy coding!
