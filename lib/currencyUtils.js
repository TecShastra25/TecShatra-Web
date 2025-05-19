// Exchange rates (updated periodically)
const exchangeRates = {
  USD: {
    INR: 83,
    EUR: 0.91,
    GBP: 0.79,
  },
  INR: {
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095,
  }
};

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  if (fromCurrency === toCurrency) return amount;
  
  const rate = exchangeRates[fromCurrency]?.[toCurrency];
  if (!rate) throw new Error(`Exchange rate not found for ${fromCurrency} to ${toCurrency}`);
  
  return Math.round(amount * rate);
};

export const formatCurrency = (amount, currency) => {
  const formatters = {
    USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
    INR: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }),
    EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
    GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
  };

  return formatters[currency]?.format(amount) || `${currency} ${amount}`;
};

export const getLocalizedPrice = (basePrice, baseCurrency, userCurrency) => {
  try {
    const convertedAmount = convertCurrency(basePrice, baseCurrency, userCurrency);
    return {
      amount: convertedAmount,
      formatted: formatCurrency(convertedAmount, userCurrency),
      currency: userCurrency,
    };
  } catch (error) {
    console.error('Currency conversion error:', error);
    return {
      amount: basePrice,
      formatted: formatCurrency(basePrice, baseCurrency),
      currency: baseCurrency,
    };
  }
};