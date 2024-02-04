import React from "react";
import HeadingTittle from "../hooks/HeadingTittle";
import SearchBar from "../hooks/SearchBar";
// import CardMenu from "../hooks/CardMenu";
import productStore from "../store/productStore";
import { useEffect } from "react";
// import CardDish from "../hooks/CardDish";
import CardProduct from "../hooks/CardProduct";
import Navbar from "../components/Navbar";

const Menu = () => {
  const { data, isLoading, isError, fetchData } = productStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container max-w-6xl mx-auto pt-16">
        <HeadingTittle head="Our Menu" tittle="Lets check all the dish" />
        <SearchBar />
        <div className="flex gap-x-2 py-2 text-gray-600 font-semibold">
          <button className="bg-gray-200 p-3 rounded-md">appetizer</button>
          <button className="bg-gray-200 p-3 rounded-md">Dish</button>
          <button className="bg-gray-200 p-3 rounded-md">Drink</button>
          <button className="bg-gray-200 p-3 rounded-md">Dessert</button>
        </div>

        <div className="pt-4 flex flex-wrap gap-y-8 gap-x-16 mx-auto">
          {data.map((product) => {
            return (
              <CardProduct
                key={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category.name}
                // product={product}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
