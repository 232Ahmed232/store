import React from 'react';

const CartIcon = ({ count = 0 }) => {
  return (
    <div className="relative inline-block">
      {/* Cart SVG */}
      <svg
        className="w-8 h-8 text-gray-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10m-5 4a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>

      {/* Badge */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
