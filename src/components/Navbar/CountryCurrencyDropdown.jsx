import React, { useState,useContext } from 'react';
import CurrencyContext from '../../context/context';


const countries = [
  { name: 'USA', currency: 'USD', currencyIcon: '$', multiple: 1 },
  { name: 'UK', currency: 'GBP', currencyIcon: '£', multiple: 1.3523 },
  { name: 'Canada', currency: 'CAD', currencyIcon: 'C$', multiple: 1.38 },
  { name: 'European Union', currency: 'EUR', currencyIcon: '€', multiple: 1.1682 },
  { name: 'Japan', currency: 'JPY', currencyIcon: '¥', multiple: 147.83 },
  { name: 'India', currency: 'INR', currencyIcon: '₹', multiple: 83 },          // approximate
  { name: 'Australia', currency: 'AUD', currencyIcon: 'A$', multiple: 0.6479 },
  { name: 'China', currency: 'CNY', currencyIcon: '¥', multiple: 7.1824 },
];


const CountryCurrencyDropdown = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const {SetMultiple,SetIcon} = useContext(CurrencyContext)

  const handleSelect = (country) => {
    setSelected(country);
    // console.log(country);
    SetIcon(country.currencyIcon)
    SetMultiple(country.multiple)
    
    if (onSelect) onSelect(country);
  };

  return (
    <div className="w-72">
      <label className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
      <select
        className="w-full border rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => {
          const selectedCountry = countries.find(
            (c) => c.currency === e.target.value
          );
          handleSelect(selectedCountry);
        }}
        value={selected?.currency || ''}
      >
        {countries.map((country) => (
          <option key={country.currency} value={country.currency}>
            {country.name} ({country.currency})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryCurrencyDropdown;
