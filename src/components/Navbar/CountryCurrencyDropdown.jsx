import React, { useState } from 'react';

const countries = [
  { name: 'USA', currency: 'USD' ,currencyIcon:"$",multiple:1},
  { name: 'Uk', currency: 'GBP' ,currencyIcon:"#",multiple:1},
  { name: 'Canada', currency: 'CAD' ,currencyIcon:"%",multiple:1},
  { name: 'European Union', currency: 'EUR' ,currencyIcon:"&",multiple:1},
  { name: 'Japan', currency: 'JPY' ,currencyIcon:"%",multiple:1},
  { name: 'India', currency: 'INR' ,currencyIcon:"*",multiple:1},
  { name: 'Australia', currency: 'AUD' ,currencyIcon:"*",multiple:1},
  { name: 'China', currency: 'CNY' ,currencyIcon:"!",multiple:1},
];

const CountryCurrencyDropdown = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (country) => {
    setSelected(country);
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
