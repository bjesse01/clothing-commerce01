import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [activeBtn, setActiveBtn] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://myserver-twng.onrender.com/api/clothings"
      );
      setProducts(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log("Error fetching data: ", error);
    }
  };

  const fetchByCategory = async (categoryName) => {
    try {
      const response = await axios.get(
        `https://myserver-twng.onrender.com/api/clothings/${categoryName}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("error fetching products: ", error);
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(
        "https://myserver-twng.onrender.com/api/clothings"
      );
      const filterData = response.data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filterData);
    } catch (error) {
      console.error("Error searching products: ", error);
    }
  };

  const handleShowAll = () => {
    fetchData();
  };

  const handleBtnClick = (btnName) => {
    setActiveBtn(btnName);
  };

  const displayProduct =
    filteredProducts.length > 0 ? filteredProducts : products;

  const allClick = (name) => {
    handleShowAll();
    handleBtnClick(name);
  };

  let category = [
    { name: "cloth", id: 1 },
    { name: "bags", id: 2 },
    { name: "accessory", id: 3 },
    { name: "Shoes", id: 4 },
  ];

  return (
    <div className="w-full px-10 py-3 bg-gray-200">
      <Searchbar onSearch={handleSearch} />
      <div style={{ borderBottom: "1px solid white" }} className="py-[3px]">
        <button
          className={`font-medium sm:text-lg text-sm sm:ml-5 ml-4 capitalize ${
            activeBtn === "All" ? "underline underline-offset-8" : ""
          }`}
          onClick={() => {
            allClick("All");
          }}
        >
          All
        </button>
        {category.map((cat) => (
          <button
            onClick={() => {
              fetchByCategory(cat.name);
              handleBtnClick(cat.name);
            }}
            className={`font-medium sm:text-lg text-sm sm:ml-5 ml-4 capitalize ${
              activeBtn === cat.name ? "underline underline-offset-8" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-9 gap-5 place-items-center my-6">
        {isLoading ? (
          <Loading />
        ) : (
          displayProduct.map((product) => (
            <Product data={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};
