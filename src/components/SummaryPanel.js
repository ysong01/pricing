import React from 'react';
import { FiDollarSign, FiPieChart, FiTrendingUp, FiTarget, FiBox, FiPercent, FiActivity, FiBarChart2 } from 'react-icons/fi';

const SummaryPanel = ({ results, formData }) => {
  const calculatePriceChange = () => {
    const change = ((results.optimal_price / results.initial_price - 1) * 100);
    return isNaN(change) ? null : change.toFixed(1);
  };

  const metrics = [
    {
      label: 'Optimal Price',
      value: `$${Number(results.optimal_price).toFixed(2)}`,
      icon: <FiDollarSign />,
      description: 'Recommended price point that maximizes profit based on market conditions',
      change: calculatePriceChange()
    },
    {
      label: 'Expected Profit',
      value: `$${Number(results.profit).toFixed(2)}`,
      icon: <FiPieChart />,
      description: 'Projected profit at the optimal price point',
      change: null
    },
    {
      label: 'Market Share',
      value: `${(Number(results.market_share) * 100).toFixed(1)}%`,
      icon: <FiBarChart2 />,
      description: 'Expected market share at optimal price point',
      change: null
    },
    {
      label: 'Revenue',
      value: `$${Number(results.revenue).toFixed(2)}`,
      icon: <FiTrendingUp />,
      description: 'Expected revenue at optimal price point',
      change: null
    },
    {
      label: 'Unit Sales',
      value: Number(results.optimal_quantity).toFixed(0),
      icon: <FiBox />,
      description: 'Predicted number of units sold at optimal price',
      change: null
    },
    {
      label: 'Profit Margin',
      value: `${((results.profit / results.revenue) * 100).toFixed(1)}%`,
      icon: <FiPercent />,
      description: 'Profit as a percentage of revenue at optimal price',
      change: null
    },
    {
      label: 'Break-even Point',
      value: Number(results.break_even_point).toFixed(0),
      icon: <FiActivity />,
      description: 'Number of units needed to sell to cover fixed costs',
      change: null
    },
,
    {
      label: 'Price Change',
      value: `${((Number(results.optimal_price) / Number(formData.initial_price) - 1) * 100).toFixed(1)}%`,
      icon: <FiTrendingUp />,
      description: 'Percentage change from initial to optimal price',
      change: null
    }
  ];

  return (
    <div className="summary-panel">
      <h2>Optimization Results</h2>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-header">
              <span className="metric-icon">{metric.icon}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
            <div className="metric-value">{metric.value}</div>
            {metric.change && (
              <div className={`metric-change ${metric.change > 0 ? 'positive' : 'negative'}`}>
                {metric.change > 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
              </div>
            )}
            <div className="metric-description">{metric.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPanel;