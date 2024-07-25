import React, { useState, useEffect, useCallback } from 'react';
import { BarChart } from '../components/Chart';
import { useToastContext } from '../providers/toast';

// structure of chartdata
interface ChartData {
  datasetOne: number[];
  datasetTwo: number[];
}

// expected structure of the API response
interface ApiResponse {
  status: 'success' | 'error';
  message: string;
  data?: ChartData;
}

export function ChartBlock() {
  const [originalChartData, setOriginalChartData] = useState<ChartData | null>(null);
  const [filteredChartData, setFilteredChartData] = useState<ChartData | null>(null);
  
  // manage loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const [minValue, setMinValue] = useState<number | ''>('');
  const [maxValue, setMaxValue] = useState<number | ''>('');
  
  // access the toast functionality
  const { renderToast } = useToastContext();

  // fetch chart data from the API
  const fetchChartData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/data/chart-data');
      const responseData: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (responseData.status === 'error') {
        throw new Error(responseData.message || 'Failed to fetch chart data');
      }

      if (responseData.status === 'success' && responseData.data) {
        // Set both original and filtered data to the fetched data initially
        setOriginalChartData(responseData.data);
        setFilteredChartData(responseData.data);
        renderToast('success', 'Chart data loaded successfully');
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load chart data';
      renderToast('error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [renderToast]);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  // filter the chart data based on min and max values
  const filterData = useCallback(() => {
    if (!originalChartData) return;

    const min = minValue === '' ? -Infinity : Number(minValue);
    const max = maxValue === '' ? Infinity : Number(maxValue);

    // Filter out values that are outside the min-max range
    const filteredData: ChartData = {
      datasetOne: originalChartData.datasetOne.filter(value => value >= min && value <= max),
      datasetTwo: originalChartData.datasetTwo.filter(value => value >= min && value <= max),
    };

    setFilteredChartData(filteredData);
  }, [originalChartData, minValue, maxValue]);

  // filtering when min or max values change
  useEffect(() => {
    filterData();
  }, [filterData]);

  // min value input changes
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setMinValue(value);
  };

  //  max value input changes
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : Number(e.target.value);
    setMaxValue(value);
  };

  // resetting the chart to its original state
  const handleReset = () => {
    setMinValue('');
    setMaxValue('');
    setFilteredChartData(originalChartData);
    renderToast('success', 'Chart data reset to original state');
  };

  return (
    <div>
      <div className='mb-12 flex items-center'>
        <div className='flex flex-col mx-4'>
          <span className='text-sm'>Min</span>
          <input type='number' className='w-24 h-8 text-sm' value={minValue} onChange={handleMinChange} />
        </div>
        <div className='flex flex-col mx-4'>
          <span className='text-sm'>Max</span>
          <input type='number' className='w-24 h-8 text-sm' value={maxValue} onChange={handleMaxChange} />
        </div>
        <div className='flex flex-col mx-4 pt-4 w-100'>
          <button
            className='bg-blue-600 flex justify-center items-center h-10 text-center text-white border focus:outline-none focus:ring-4 font-sm rounded-lg text-sm px-5 py-1.9'
            onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : filteredChartData ? (
          <BarChart
            width={600}
            height={300}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  label: 'Dataset 1',
                  data: filteredChartData.datasetOne,
                  backgroundColor: 'rgb(255, 99, 132)',
                },
                {
                  label: 'Dataset 2',
                  data: filteredChartData.datasetTwo,
                  backgroundColor: 'rgb(54, 162, 235)',
                },
              ],
            }}
          />
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}