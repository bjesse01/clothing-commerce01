import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <div className="w-full flex items-center my-2 bg-white rounded shadow-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Product"
          className="w-full outline-none px-3 py-1 text-lg bg-transparent font-medium placeholder:font-medium "
        />
        <AiOutlineSearch
          onClick={handleSearch}
          className="text-3xl mr-4 cursor-pointer"
        />
      </div>
    </>
  );
};

export default Searchbar;
