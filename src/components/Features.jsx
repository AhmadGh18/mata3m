import React from "react";
import {
  FastFood,
  FoodBank,
  Location,
  MDiscount,
  MReviews,
  User,
} from "./icons";

const Features = () => {
  return (
    <div>
      <div className="w-[80%] m-auto p-10">
        <p className="font-bold text-2xl text-center text-orange font-Acme">
          Services
        </p>
        <div className="flex items-center justify-center flex-wrap gap-4 p-4 mt-4">
          <div className="h-52 w-52 bg-white border-b-4 border-orange p-6 shadow-xl">
            <span className="text-5xl text-orange">
              <FastFood />
            </span>
            <p className="font-bold mt-2 text-lg">Seamless Ordering</p>
            <p className="text-xs font-semibold text-gray mt-3">
              Experience easy ordering with simple navigation and live order
              updates.
            </p>
          </div>

          <div className="h-52 w-52 bg-white border-b-4 border-orange p-6 shadow-xl">
            <span className="text-5xl text-orange">
              <Location />
            </span>
            <p className="font-bold mt-2 text-lg">Local Restaurants</p>
            <p className="text-xs font-semibold text-gray mt-3">
              Discover nearby restaurants available for convenient online
              ordering.
            </p>
          </div>

          <div className="h-52 w-52 bg-white border-b-4 border-orange p-6 shadow-xl">
            <span className="text-5xl text-orange">
              <MDiscount />
            </span>
            <p className="font-bold mt-2 text-lg">Offers / Discounts</p>
            <p className="text-xs font-semibold text-gray mt-3">
              Benefit from exclusive promotions and discounts offerred by Bites.
            </p>
          </div>

          <div className="h-52 w-52 bg-white border-b-4 border-orange p-6 shadow-xl">
            <span className="text-5xl text-orange">
              <MReviews />
            </span>
            <p className="font-bold mt-2 text-lg">Reviews / Ratings</p>
            <p className="text-xs font-semibold text-gray mt-3">
              Read genuine user reviews and ratings for informed dining choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
