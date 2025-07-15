import React from "react";

const Cart = () => {
  return (
    <>
      <h2 className="mb-6">Cart</h2>
      {/* Container */}
      <div className="space-y-10">
        {/* --------------------Music Card */}
        {/* main */}
        <div className="bg-white p-4 shadow rounded-lg max-w-80 border border-gray-500">
          <p className="text-gray-900 text-xl font-semibold uppercase">
            Daily mix
          </p>
          <p className="text-gray-500 text-sm">12 Tracks</p>
          <p className="text-gray-900 font-semibold text-sm mb-3">
            Fronted Radio
          </p>
          <img
            class="rounded-md"
            src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=700&auto=format&fit=crop"
            alt=""
          ></img>
        </div>

        {/* -------------------------------Notify Card with Glass Effect */}
        {/* main */}
        <div className="max-w-80  text-sm text-white/80 flex justify-center items-center relative">
          <div className="flex items-center justify-around w-full max-w-72 py-2 border border-white/20 bg-white/10 backdrop-blur-sm absolute bottom-2">
            <p className="text-center">Available soon.</p>
            <button className="bg-black/50 px-6 py-1.5 rounded-full cursor-pointer">
              Notify me
            </button>
          </div>
          <img
            class="rounded-md"
            src="https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=600&auto=format&fit=crop"
            alt=""
          ></img>
        </div>

        {/* ---------------------Simple Card with Button */}
        {/* main */}
        <div className="border max-w-80 p-4 rounded-lg shadow text-sm">
          <img
            class="rounded-md max-h-40 w-full object-cover"
            src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400"
            alt="officeImage"
          ></img>
          <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
            Your Card Title
          </p>
          <p className="text-gray-500 ml-2 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore..
          </p>
          <button
            type="button"
            className="bg-indigo-600 px-6 py-2 text-white font-medium rounded ml-2 mt-4 mb-3"
          >
            Learn More
          </button>
        </div>

        {/* ----------------------------User Profile Card */}
        {/* main */}
        <div className="flex">
            {/* One */}
            <div className="bg-red-500 p-4"></div>
            {/* Two */}
            <div className="bg-blue-500 p-4"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
