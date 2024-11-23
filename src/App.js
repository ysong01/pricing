import React, { useState } from 'react';
import Header from './components/Header';
import PricingForm from './components/PricingForm';
import SummaryPanel from './components/SummaryPanel';
import ResultsChart from './components/ResultsChart';
import Footer from './components/Footer';
import './App.css';
import { FiTarget, FiPieChart, FiTrendingUp } from 'react-icons/fi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  const [results, setResults] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={
              <div className="content-wrapper">
                <section className="intro-section">
                  <h1>Dynamic Pricing Simulator</h1>
                  <p className="tagline">Optimize your pricing strategy with advanced analytics</p>
                  <div className="feature-grid">
                    <div className="feature-card">
                      <div className="feature-header">
                        <FiTarget className="feature-icon" />
                        <h3>Demand Analysis</h3>
                      </div>
                      <p>Calculate optimal prices based on price elasticity and market demand patterns.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-header">
                        <FiPieChart className="feature-icon" />
                        <h3>Competitor Insights</h3>
                      </div>
                      <p>Factor in competitor pricing and market share dynamics for strategic positioning.</p>
                    </div>
                    <div className="feature-card">
                      <div className="feature-header">
                        <FiTrendingUp className="feature-icon" />
                        <h3>Profit Optimization</h3>
                      </div>
                      <p>Maximize profitability by balancing costs, demand, and market factors.</p>
                    </div>
                  </div>
                </section>

                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}

                <div className="simulator-container">
                  <PricingForm 
                    setResults={setResults}
                    setLoading={setLoading}
                    setError={setError}
                    setFormData={setFormData}
                  />
                  
                  {loading ? (
                    <div className="loading-spinner">
                      Calculating optimal price...
                    </div>
                  ) : results && (
                    <div className="results-container fade-in">
                      <SummaryPanel results={results} formData={formData} />
                      <ResultsChart data={results} />
                    </div>
                  )}
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
