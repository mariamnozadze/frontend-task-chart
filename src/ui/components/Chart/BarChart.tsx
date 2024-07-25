'use client';

import { useRef, useEffect } from 'react';
import { Chart, BarController, BarElement, LinearScale, Tooltip, Legend, CategoryScale } from 'chart.js';
import type { ChartData } from 'chart.js';
import 'chartjs-adapter-moment';
import { chartColors } from './chartjs-config';

Chart.register(BarController, BarElement, LinearScale, Tooltip, Legend, CategoryScale);

interface BarChartProps {
  data: ChartData;
  width: number;
  height: number;
}

function BarChart({ data, width, height }: BarChartProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { textColor, gridColor, tooltipBodyColor, tooltipBgColor, tooltipBorderColor } = chartColors;

  useEffect(() => {
    const ctx = canvas.current;
    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            stacked: true,
            border: {
              display: false,
            },
            beginAtZero: true,
            grid: {
              color: gridColor.light,
            },
          },
          x: {
            stacked: true,
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 200,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });

    return () => newChart.destroy();
  }, [data, gridColor.light, textColor.light, tooltipBgColor.light, tooltipBodyColor.light, tooltipBorderColor.light]);

  return <canvas ref={canvas} width={width} height={height}></canvas>;
}

export { BarChart };
