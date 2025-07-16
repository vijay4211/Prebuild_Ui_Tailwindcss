import React from "react";

const Flex = () => {
  return (
    <>
      <div className="mb-10 ">Flex</div>
      <div className="space-y-10 mb-10">
        {/* inline */}
        <span className="bg-blue-200 p-2 inline">Inline Element</span>
        <div>
          {/* flex */}
          <div className="flex space-x-2 bg-pink-200 p-2">
            <div class="bg-red-300 p-2">Flex A</div>
            <div class="bg-green-300 p-2">Flex B</div>
          </div>
          <div>
            {/* inline-flex */}
            <span className="inline-flex space-x-2 bg-yellow-200 p-2 border">
              <div class="bg-orange-300 p-2">InlineFlex X</div>
              <div class="bg-purple-300 p-2">InlineFlex Y</div>
            </span>
          </div>
        </div>
        {/* Without flex*/}
        <div className="border">
          <div className="bg-red-500 p-4"></div>
          <div className="bg-blue-500 p-4"></div>
        </div>

        {/*flex */}
        <div className="border flex">
          <div className="bg-red-500 p-4"></div>
          <div className="bg-blue-500 p-4"></div>
        </div>

        {/* flex + justify-center */}
        <div className="border flex justify-center">
          <div className="bg-red-500 p-4"></div>
          <div className="bg-blue-500 p-4"></div>
        </div>

        {/*  flex + justify-center + items-center */}
        {/* items-center = sathi height must aahe */}
        <div className="border flex justify-center items-center">
          <div className="bg-red-500 p-4"></div>
          <div className="bg-blue-500 p-4"></div>
        </div>

        {/* flex + height */}
        {/* parent ni flex dilya mule child cha behaviour change zal aahe */}
        <div className="flex border h-44">
          <div className="bg-red-500 p-4"></div>
          <div className="bg-blue-500 p-4"></div>
        </div>

        {/* Flex + Justify-center + height */}
        <div className="flex justify-center border h-44">
          <div className="bg-red-500 p-4"></div>
          <div className="bg-blue-500 p-4"></div>
        </div>

        {/* flex + justify-center + items-center + height */}
        <div className="flex justify-center items-center border h-44">
          <div className="bg-red-500 p-4"></div>
          <div className="bg-blue-500 p-4"></div>
        </div>

        {/* ----------------------flex + items-center + justify-center = no need */}
        <div class="max-w-lg p-4 pb-2  border-t border-green-500 space-y-2">
          <div class="flex items-center w-full justify-between">
            <p>Last invoice</p>
            <p>January 18, 2024</p>
          </div>
          <div class="w-full h-px bg-gray-300/60"></div>
          <div class="flex items-center w-full justify-between">
            <p>Amount</p>
            <div class="flex items-center gap-2">
              <p>$500.00</p>
              <p class="bg-green-500/20 px-3 py-0.5 rounded border border-green-500/30 text-green-600">
                Paid
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------flex + items-center + justify-center + flex-col + gap */}
        <div class="flex flex-col items-center gap-2 max-w-lg p-4 pb-2  border-t border-red-500">
          <div class="flex items-center w-full justify-between">
            <p>Last invoice</p>
            <p>January 18, 2024</p>
          </div>
          <div class="w-full h-px bg-gray-300/60"></div>
          <div class="flex items-center w-full justify-between">
            <p>Amount</p>
            <div class="flex items-center gap-2">
              <p>$500.00</p>
              <p class="bg-green-500/20 px-3 py-0.5 rounded border border-green-500/30 text-green-600">
                Paid
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}
        {/* flex + flex-col + items-center */}
        {/* w-80 */}
        <div class="bg-indigo-500/5  text-sm text-gray-500 flex flex-col items-center w-80 rounded-lg">
          {/* w-full */}
          <div class="flex items-center justify-between w-full px-4 py-2">
            {/* no need to justify-between here */}
            <div class="flex items-center justify-between gap-3">
              <div class="bg-white p-1.5 rounded border border-gray-500/30">
                <img
                  class="h-9"
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyFavicon.svg"
                  alt="dummyFavicon"
                />
              </div>
              <p class="text-lg text-gray-800">Router</p>
            </div>
            <button type="button" aria-label="more" className="border">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 11.917a.917.917 0 1 0 0-1.833.917.917 0 0 0 0 1.833M11 5.5a.917.917 0 1 0 0-1.833.917.917 0 0 0 0 1.833m0 12.834a.917.917 0 1 0 0-1.834.917.917 0 0 0 0 1.834"
                  stroke="#6B7280"
                  stroke-opacity=".8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* w-full */}
          <div class="flex flex-col items-center gap-2 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-green-500">
            <div class="flex items-center w-full justify-between">
              <p>Last invoice</p>
              <p>January 18, 2024</p>
            </div>
            <div class="w-full h-px bg-gray-300/60"></div>
            <div class="flex items-center w-full justify-between">
              <p>Amount</p>
              <div class="flex items-center gap-2">
                <p>$500.00</p>
                <p class="bg-green-500/20 px-3 py-0.5 rounded border border-green-500/30 text-green-600">
                  Paid
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flex;

/*
📌 Tailwind Keywords:
inline → display: inline

flex → display: flex

inline-flex → display: inline-flex

space-x-2 → horizontal space between children

p-2, bg-* → padding and background color


✅ inline in Tailwind
🔹 Appears inline like text
🔹 Cannot easily control width/height


✅ flex in Tailwind
🔹 Flex container
🔹 Items A and B are aligned horizontally


✅ inline-flex in Tailwind
🔹 Behaves like inline (flows with text)
🔹 But child items are flexed like row (horizontally aligned)




*/
