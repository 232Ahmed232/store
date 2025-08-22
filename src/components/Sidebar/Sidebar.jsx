// Sidebar.jsx
import React, { useState,useContext } from "react";
import CurrencyContext from "../../context/context";

import RangeSlider from "./Range";

function Sidebar({ onCategoryChange,onBrandChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const {multiple} = useContext(CurrencyContext)

  const handleCategory = (e, cat) => {
    let updatedCategories;
    if (e.target.checked) {
      updatedCategories = [...selectedCategories, cat];
    } else {
      updatedCategories = selectedCategories.filter((item) => item !== cat);
    }

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories); // send to parent
  };


  const handlebrand = (e, bra) => {
    let updatedBrands;
    if (e.target.checked) {
      updatedBrands = [...selectedBrands, bra];
    } else {
      updatedBrands = selectedBrands.filter((item) => item !== bra);
    }

    setSelectedBrands(updatedBrands);
    onBrandChange(updatedBrands); // send to parent
  };

  return (
    <div className="flex flex-col bg-slate-300 h-screen mt-4 w-max px-16">
      <div className="ml-4 my-4">
        <h2 className="text-xl font-bold">Categories</h2>

        {["Electronics", "Cosmetics", "Beauty", "Perfumes"].map((cat) => (
          <div className="flex gap-2 items-center" key={cat}>
            <input
              type="checkbox"
              onChange={(e) => handleCategory(e, cat)}
              checked={selectedCategories.includes(cat)}
            />
            <label>{cat}</label>
          </div>
        ))}
      </div>

      <div className="ml-4 my-4">
        <h2 className="text-xl font-bold">Price</h2>
        <RangeSlider min={0} max={Math.floor(5000 *multiple)} step={50} />
      </div>

      <div className="ml-4 my-4">
        <h2 className="text-xl font-bold">Brands</h2>

        {["Hubabay", "Xpure", "Champa", "Alley"].map((bra) => (
          <div className="flex gap-2 items-center" key={bra}>
            <input
              type="checkbox"
              onChange={(e) => handlebrand(e, bra)}
              checked={selectedBrands.includes(bra)}
            />
            <label>{bra}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
