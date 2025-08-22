import React, { useContext, useEffect, useState, useMemo } from "react";
import CurrencyContext from "../../context/context";
import productList from "../Data";

function Mainpage({ selectedCategories, selectedBrands }) {

  const { multiple, icon, min, max, setCart, searchVal } = useContext(CurrencyContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const showProducts = useMemo(() => {
    let filtered = productList;

    // filter by categories
    if (selectedCategories.length) {
      filtered = filtered.filter((ele) =>
        selectedCategories.includes(ele.category)
      );
    }

    // filter by brands
    if (selectedBrands.length) {
      filtered = filtered.filter((ele) =>
        selectedBrands.includes(ele.brand)
      );
    }

    // convert price according to currency and filter by price range
    filtered = filtered
      .map((ele) => ({
        ...ele,
        convertedPrice: Math.floor(ele.price * multiple),
      }))
      .filter((ele) => ele.convertedPrice > min && ele.convertedPrice < max);
    

    if (searchVal.length>0) {

      filtered = filtered.filter((ele) => {
        const value = searchVal.toLowerCase()
        let name = ele.name.toLowerCase()

        return searchVal && name.includes(value)
      })
    }

    return filtered;
  }, [selectedCategories, selectedBrands, multiple, min, max,searchVal]);

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(showProducts.length / itemsPerPage);



  return (
    <div className="h-auto">
      <div className="bg-slate-300 flex gap-16 p-4 flex-wrap w-4/5 justify-center h-auto">
        {currentItems.map((ele, index) => (
          <div key={index} className="text-center w-1/4">
            <img src={ele.image} alt="" />
            <h1>{ele.name}</h1>
            <h1>
              {Math.floor(ele.price * multiple)} {icon}
            </h1>
            <button
              onClick={() => setCart((prev) => [...prev, ele])}
              className=" bg-slate-400 px-4 py-1 rounded-xl hover:bg-black hover:text-white"
            >
              Add to Cart</button>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex gap-2 m-auto my-4 w-96">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Mainpage;
