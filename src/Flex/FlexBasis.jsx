import React from "react";

const FlexBasis = () => {
  return (
    <div>
      {/* --------------------Flex Basis------------------- */}
      <div className=" bg-red-300 p-3 ">
        {/* ------flex-basis */}
        <div className="flex flex-row">
          <div className="border p-3 basis-full">01</div>
          <div className="border p-3 basis-auto">02</div>
          <div className="border p-3 basis-3xs">03</div>
          <div className="border p-3 basis-2xs">04</div>
          <div className="border p-3 basis-xs">05</div>
          <div className="border p-3 basis-sm">06</div>
          <div className="border p-3 basis-md">07</div>
          <div className="border p-3 basis-lg">08</div>
          <div className="border p-3 basis-xl">09</div>
          <div className="border p-3 basis-xl">10</div>
          <div className="border p-3 basis-2xl">11</div>
          <div className="border p-3 basis-3xl">12</div>
          <div className="border p-3 basis-4xl">13</div>
          <div className="border p-3 basis-5xl">14</div>
          <div className="border p-3 basis-6xl">15</div>
          <div className="border p-3 basis-7xl">16</div>
          <div className="border p-3 basis-64">17</div>
          <div className="border p-3 basis-128">18</div>
        </div>
      </div>

      {/* ✅ Real-life Small Example of flex-basis (with Tailwind CSS and Explanation): */}
      {/* 📱 Suppose you're building a row of product cards, and you want each to take equal width at first (like 200px), and then adjust if space allows. */}

      {/* 🔍 Tailwind Explanation:
flex-[0_0_200px] means:

flex-grow: 0 → Don’t grow

flex-shrink: 0 → Don’t shrink

flex-basis: 200px → Start at 200px width
 */}
      <div className="mt-12">
        <div class="flex flex-wrap gap-4">
          <div class="flex-[0_0_200px] bg-green-100 p-4 rounded shadow">
            Product 1
          </div>
          <div class="flex-[0_0_200px] bg-green-200 p-4 rounded shadow">
            Product 2
          </div>
          <div class="flex-[0_0_200px] bg-green-300 p-4 rounded shadow">
            Product 3
          </div>
        </div>
      </div>

      {/*  ✅ 1. Sidebar + Content Layout*/}
      {/* A sidebar takes fixed width (250px), content takes the rest. */}
      {/* flex-[0_0_250px] = Sidebar has fixed 250px
         flex-1 = Main content grows to fill the rest */}
      {/* ✅ Code: */}
      <div class="flex h-60 border mt-12">
        <div class="flex-[0_0_250px] bg-gray-200 p-4">Sidebar</div>
        <div class="flex-1 bg-white p-4">Main Content</div>
      </div>

      {/* ✅ 3. Label + Input Field (Form Row) */}
      {/* Label ला flex-basis: 100px दिले आणि input field ला flex-grow: 1 म्हणजे ती उरलेली space घेते. */}
      {/* ✅ Code: */}
      <div class="flex items-center w-full mb-4 mt-14">
        <label class="flex-[0_0_100px] text-gray-700 border">Email:</label>
        <input type="email" class="flex-1 border p-2 rounded" />
      </div>
    </div>
  );
};

export default FlexBasis;

/*

🧠 What is flex-basis?
flex-basis sets the initial main size of a flex item before space is distributed. It works like width, but only inside flex layout.

*/
