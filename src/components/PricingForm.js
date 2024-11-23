import React, { useState } from 'react';
import { simulatePricing } from '../services/api';

const PricingForm = ({ setResults, setLoading, setError }) => {
    const [formData, setFormData] = useState({
        initial_price: '',
        initial_quantity: '',
        price_elasticity: '',
        fixed_costs: '',
        variable_costs: '',
        competitor_price: '',
        market_share: '0.5',
        seasonality_factor: '1.0',
        quality_index: '1.0'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await simulatePricing(formData);
            if (response.success) {
                setResults(response.data);
            } else {
                setError(response.error || 'Calculation failed');
            }
        } catch (error) {
            setError('Failed to calculate pricing');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="pricing-form">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="initial_price">Initial Price ($)</label>
                    <input
                        type="number"
                        id="initial_price"
                        name="initial_price"
                        value={formData.initial_price}
                        onChange={handleInputChange}
                        required
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="initial_quantity">Initial Quantity</label>
                    <input
                        type="number"
                        id="initial_quantity"
                        name="initial_quantity"
                        value={formData.initial_quantity}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="price_elasticity">Price Elasticity</label>
                    <input
                        type="number"
                        id="price_elasticity"
                        name="price_elasticity"
                        value={formData.price_elasticity}
                        onChange={handleInputChange}
                        required
                        step="0.1"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="competitor_price">Competitor Price ($)</label>
                    <input
                        type="number"
                        id="competitor_price"
                        name="competitor_price"
                        value={formData.competitor_price}
                        onChange={handleInputChange}
                        required
                        step="0.01"
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="fixed_costs">Fixed Costs ($)</label>
                    <input
                        type="number"
                        id="fixed_costs"
                        name="fixed_costs"
                        value={formData.fixed_costs}
                        onChange={handleInputChange}
                        required
                        step="0.01"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="variable_costs">Variable Costs ($)</label>
                    <input
                        type="number"
                        id="variable_costs"
                        name="variable_costs"
                        value={formData.variable_costs}
                        onChange={handleInputChange}
                        required
                        step="0.01"
                    />
                </div>
            </div>

            <button type="submit" className="submit-button">
                Calculate Optimal Price
            </button>
        </form>
    );
};

export default PricingForm; 