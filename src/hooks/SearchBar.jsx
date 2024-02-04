import React from "react";

const SearchBar = () => {
  return (
    <form>
      <input
        className="bg-gray-100 w-full py-4 px-2 rounded-md"
        type="search"
        placeholder="Cari Makanan disini"
      />
    </form>
  );
};

export default SearchBar;
