import React from "react";

export const Banner = () => {
  return (
    <>
      <p className="mb-6">Banner</p>
      {/* Container */}
      <div className="space-y-6">
        {/*------------------Gradient Banner Offer  */}
        {/* main */}
        {/* w-full is not mendatory here. because by default div width-full */}
        <div className="text-sm font-medium text-center bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] text-white py-2.5 w-full">
          <p>
            Special Deal: Free Shipping on Orders Above $50! | 20% OFF on First
            Purchase
          </p>
        </div>

        {/* --------------------Banner With 3 Offers */}
        {/* main */}
        <div>
          {/* sm and above element flex zale pahije. sm chya below he by flex-col zale pahije */}
          {/* text-center = parent madhale child he center la shift kele aahe */}
          <div className="border p-3 max-w-screen-xl mx-auto text-center flex justify-center items-center flex-col sm:flex-row gap-2">
            <p>🚚 Free Shipping on Orders Above $50</p>
            {/* mobile size hidden sm and above inline(show zale pahije) */}
            <span class="hidden sm:inline">|</span>
            <p>🎁 20% OFF on First Purchase</p>
            <span class="hidden sm:inline">|</span>
            <p>
              🔐 Use Code: <strong>WELCOME10</strong>
            </p>
          </div>
        </div>

        {/* ------------------Gradient Action Banner */}
        {/* main */}
        {/* md and above size will px-14 */}
        <div className="bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] text-sm font-medium text-center flex  items-center justify-between py-1 px-4 md:px-14 text-white">
          <p>Get 20% OFF on Your First Order!</p>
          <div className="flex items-center space-x-6">
            <button className="text-gray-800 bg-white px-7 py-2 rounded-full">
              Claim Offer
            </button>
            <button type="button">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="12.532"
                  width="17.498"
                  height="2.1"
                  rx="1.05"
                  transform="rotate(-45.74 0 12.532)"
                  fill="#fff"
                />
                <rect
                  x="12.533"
                  y="13.915"
                  width="17.498"
                  height="2.1"
                  rx="1.05"
                  transform="rotate(-135.74 12.533 13.915)"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ---------------------Dark Banner */}
        {/* main */}
        {/* w-full(optional) */}
        {/* text-center */}
        <div className="w-full bg-gray-800 text-white py-2.5 font-medium text-sm text-center">
          <p>
            Special Deal: Free Shipping on Orders Above $50! | 20% OFF on First
            Purchase
          </p>
        </div>

        {/* ---------------------Dark Action Banner */}
        {/* main */}
        {/* w-full is optional */}
        {/* md:14 meanse md to above size  */}
        <div className="w-full text-sm font-medium text-white bg-gray-800 px-4 py-1 flex items-center justify-between md:px-14">
          <p>Get 20% OFF on Your First Order!</p>
          {/* space-x-6 or gap-6 */}
          <div className="flex items-center gap-6">
            {/* font-normal is not working */}
            <button
              type="button"
              className="font-normal text-gray-800 bg-white px-7 py-2 rounded-full"
            >
              Claim offer
            </button>
            <button type="button">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="12.532"
                  width="17.498"
                  height="2.1"
                  rx="1.05"
                  transform="rotate(-45.74 0 12.532)"
                  fill="#fff"
                />
                <rect
                  x="12.533"
                  y="13.915"
                  width="17.498"
                  height="2.1"
                  rx="1.05"
                  transform="rotate(-135.74 12.533 13.915)"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* -----------------------Gradient Ticket Banner */}
        {/* main */}
        {/* w-full is optional */}
        {/* w-full and max-w-md */}
        <div className="w-full text-sm flex justify-center items-center space-x-2 max-w-md py-2.5 rounded-lg font-medium bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] text-white">
          <p>
            Get 20% OFF on Your First Ticket!{" "}
            <span className="underline">Get your ticket</span>
          </p>
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/*--------------------Dark Ticket Banner  */}
        {/* main */}
        <div className="w-full bg-gray-800 text-white py-2.5 max-w-md rounded-lg flex justify-center items-center text-sm gap-2 font-medium">
          <p>
            Get 20% OFF on Your First Ticket!{" "}
            <span class="underline">Get your ticket</span>
          </p>
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
