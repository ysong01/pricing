import React from 'react';
import { FiCpu, FiTrendingUp, FiBarChart2, FiTarget } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About the Pricing Simulator</h1>
        <p className="about-subtitle">Understanding how the price optimizer works</p>
      </section>

      <section className="about-section">
        <h2>Core Calculations</h2>
        <div className="technical-details">
          <h3>Demand Prediction</h3>
          <ul>
            <li><strong>Base Demand:</strong> Uses constant elasticity demand function: Q = Q₀(P₀/P)ᵉ
              <ul>
                <li>Q₀: Your current sales volume</li>
                <li>P₀: Your current price</li>
                <li>P: New price point</li>
                <li>e: Price elasticity (how much demand changes with price)</li>
              </ul>
            </li>
            <li><strong>Seasonal Adjustment:</strong> Adjusts demand using sine wave function based on current month</li>
            <li><strong>Market Share:</strong> Adjusts based on your price relative to competitors</li>
          </ul>

          <h3>Price Optimization</h3>
          <ul>
            <li><strong>Price Bounds:</strong>
              <ul>
                <li>Minimum: Variable costs + 10% margin</li>
                <li>Maximum: 3× current price</li>
              </ul>
            </li>
            <li><strong>Optimization Method:</strong> Uses L-BFGS-B algorithm to find the price that maximizes profit</li>
            <li><strong>Profit Function:</strong> Revenue - (Fixed Costs + Variable Costs × Units)</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Market Factors</h2>
        <div className="technical-details">
          <h3>Competitor Impact</h3>
          <ul>
            <li><strong>Market Share Calculation:</strong> Adjusts your market share based on price ratio with competitors</li>
            <li><strong>Price Quality Index:</strong> Adjusts price perception based on product quality</li>
          </ul>

          <h3>Seasonal Effects</h3>
          <ul>
            <li><strong>Monthly Adjustment:</strong> Uses sine wave to model seasonal demand variations</li>
            <li><strong>Impact Range:</strong> Varies based on your seasonality factor</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Output Metrics</h2>
        <div className="technical-details">
          <h3>Key Results</h3>
          <ul>
            <li><strong>Optimal Price:</strong> Price point that maximizes profit</li>
            <li><strong>Expected Sales:</strong> Predicted units sold at optimal price</li>
            <li><strong>Revenue:</strong> Price × Expected Sales</li>
            <li><strong>Profit:</strong> Revenue - Total Costs</li>
            <li><strong>Break-even Point:</strong> Fixed Costs ÷ (Price - Variable Costs)</li>
            <li><strong>Market Share:</strong> Your expected share at optimal price</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Limitations & Assumptions</h2>
        <div className="technical-details">
          <ul>
            <li>Assumes constant price elasticity across all price points</li>
            <li>Competitor prices are treated as fixed in the short term</li>
            <li>Seasonal patterns follow a simple sine wave model</li>
            <li>Market share response to price is assumed linear</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About; 