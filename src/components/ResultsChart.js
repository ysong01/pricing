import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ResultsChart = ({ data }) => {
  const generateChartData = () => {
    const optimalPrice = data.optimal_price;
    const priceRange = optimalPrice * 0.5;
    const points = 20;
    
    return Array.from({ length: points }, (_, i) => {
      const price = optimalPrice - priceRange + (i * (priceRange * 2) / (points - 1));
      return {
        price: Number(price.toFixed(2)),
        revenue: calculateRevenue(price)
      };
    });
  };

  const calculateRevenue = (price) => {
    const quantity = data.optimal_quantity * (data.optimal_price / price) ** 2;
    return price * quantity;
  };

  const chartData = generateChartData();

  return (
    <div className="results-chart">
      <h2>Price Analysis</h2>
      <p className="chart-description">
        This graph shows how total revenue changes with different price points, helping visualize the relationship between pricing decisions and potential earnings.
      </p>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart 
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 70,
              bottom: 20
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="price"
              label={{ 
                value: 'Price ($)', 
                position: 'insideBottom',
                offset: -10
              }}
              tickFormatter={(value) => `$${value}`}
            />
            <YAxis 
              label={{ 
                value: 'Amount ($)', 
                angle: -90, 
                position: 'insideLeft',
                offset: -5
              }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toFixed(2)}`, '']}
              labelFormatter={(label) => `Price: $${label}`}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10b981" 
              name="Revenue"
              dot={false}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultsChart; 