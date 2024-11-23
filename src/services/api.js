const API_BASE_URL = 'https://urchin-app-4qp93.ondigitalocean.app/api';

export const simulatePricing = async (data) => {
    // Ensure all required fields are present and properly formatted
    const formattedData = {
        initial_price: parseFloat(data.initial_price),
        initial_quantity: parseFloat(data.initial_quantity),
        price_elasticity: parseFloat(data.price_elasticity),
        fixed_costs: parseFloat(data.fixed_costs),
        variable_costs: parseFloat(data.variable_costs),
        competitor_price: parseFloat(data.competitor_price),
        market_share: parseFloat(data.market_share || 0.5),
        seasonality_factor: parseFloat(data.seasonality_factor || 1.0),
        quality_index: parseFloat(data.quality_index || 1.0)
    };

    try {
        const response = await fetch(`${API_BASE_URL}/simulate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData)
        });
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        return await response.json();
    } catch (error) {
        throw new Error('Failed to simulate pricing');
    }
};