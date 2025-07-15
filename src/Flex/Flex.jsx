import React from "react";

const Flex = () => {
  return (
    <>
      <div className="mb-5">Flex</div>
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
