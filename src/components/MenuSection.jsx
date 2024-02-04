import React from "react";
import HeadingTittle from "../hooks/HeadingTittle";
import CardMenu from "../hooks/CardMenu";
import { menus } from "../data/data";
import { FaArrowRightLong } from "react-icons/fa6";

const MenuSection = () => {
  return (
    <section className="container max-w-6xl mx-auto my-36 px-4 py-16">
      <HeadingTittle
        head="Our Menu 🍳"
        tittle="some of the customer's favorite dish "
      />
      <div className="flex flex-wrap gap-8 justify-center">
        {menus.slice(1, 4).map((data) => {
          return (
            <CardMenu
              tittle={data.name}
              price={data.price}
              image={data.image}
              key={data.id}
            />
          );
        })}
      </div>
      <button className="flex items-center gap-x-2 bg-primary px-3 py-1 rounded-full text-lg font-semibold mt-8 mx-28 float-right">
        See all Dish <FaArrowRightLong />
      </button>
    </section>
  );
};

export default MenuSection;
