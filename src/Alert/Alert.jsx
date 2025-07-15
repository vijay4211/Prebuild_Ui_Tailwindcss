import React from "react";

const Alert = () => {
  return (
    <>
      <div>Alert</div>
      {/*  ----------------Success Toast Notification*/}
      {/* flex = flex ha purn width gheto */}
      {/* inline-flex = jewad contain aahe tewadi width gheto. inline flex hi parent la use keleli aahe */}
      <div className="bg-white border boder-gray-300/60 rounded p-3 text-sm inline-flex">
        {/* svg */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25"
            stroke="#22C55E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div className="ml-3">
          <h3 className="text-gray-300 font-medium">Successfull saved!</h3>
          <p className="text-gray-500">
            Anyone with a link can now view this file.
          </p>
        </div>

        {/* Button madhe inline flex cha use nahi kela tari chalto */}
        <button
          type="button"
          aria-label="close"
          className="inline-flex active:scale-95 transition p-2"
        >
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
              fill="#7d838b"
              fill-opacity=".7"
            />
            <rect
              x="12.531"
              y="13.914"
              width="17.498"
              height="2.1"
              rx="1.05"
              transform="rotate(-135.74 12.531 13.914)"
              fill="#7d838b"
              fill-opacity=".7"
            />
          </svg>
        </button>
      </div>

      {/* --------------Error Alert Light */}
      {/* main div */}
      {/* w-full = purn width gheto */}
      {/* max-w-80 = w-full la max-w-80 madhe convert karto */}
      <div className="bg-blue-600/10 flex items-center justify-between w-full max-w-80 h-10 px-3">
        {/* flex = eka samor ek yettat */}
        {/* items-center = vertically movement hoti */}
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14.167q.354 0 .593-.24.24-.24.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m-.834-3.334h1.667v-5H9.166zm.833 7.5a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.645-1.781 8.4 8.4 0 0 1-1.782-2.646A8.1 8.1 0 0 1 1.666 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.782-2.646 8.4 8.4 0 0 1 2.645-1.781A8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .657 3.25 8.1 8.1 0 0 1-.657 3.25 8.4 8.4 0 0 1-1.78 2.646 8.4 8.4 0 0 1-2.647 1.781 8.1 8.1 0 0 1-3.25.656"
              fill="currentColor"
            />
          </svg>
          <p class="text-sm ml-2">Oops! Something went terribly wrong.</p>
        </div>
        <button
          type="button"
          aria-label="close"
          className="active:scale-90 transition-all mr-3"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* -------------Success Alert Light Fill */}
      {/* main div */}
      {/* Main div la fix hight-10 deli aahe */}
      <div className="bg-blue-600/10 flex items-center justify-between w-full max-w-80 h-10">
        {/* main la h-10 aahe tar child la h-full keli aahe */}
        <div className="h-full bg-blue-600 w-1.5"></div>
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14.167q.354 0 .593-.24.24-.24.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m-.834-3.334h1.667v-5H9.166zm.833 7.5a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.645-1.781 8.4 8.4 0 0 1-1.782-2.646A8.1 8.1 0 0 1 1.666 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.782-2.646 8.4 8.4 0 0 1 2.645-1.781A8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .657 3.25 8.1 8.1 0 0 1-.657 3.25 8.4 8.4 0 0 1-1.78 2.646 8.4 8.4 0 0 1-2.647 1.781 8.1 8.1 0 0 1-3.25.656"
              fill="currentColor"
            />
          </svg>
          <p class="text-sm ml-2">Success! Your task is fully completed.</p>
        </div>
        <button
          type="button"
          aria-label="close"
          className="active:scale-90 transition-all mr-3"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {/*-------------------Error Alert Light Fill  */}
      {/* main */}
      <div className="bg-red-600/10 w-full max-w-80 h-10 flex items-center justify-between">
        <div className="h-full w-1.5 bg-yellow-600"></div>
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14.167q.354 0 .593-.24.24-.24.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m-.834-3.334h1.667v-5H9.166zm.833 7.5a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.645-1.781 8.4 8.4 0 0 1-1.782-2.646A8.1 8.1 0 0 1 1.666 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.782-2.646 8.4 8.4 0 0 1 2.645-1.781A8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .657 3.25 8.1 8.1 0 0 1-.657 3.25 8.4 8.4 0 0 1-1.78 2.646 8.4 8.4 0 0 1-2.647 1.781 8.1 8.1 0 0 1-3.25.656"
              fill="currentColor"
            />
          </svg>
          <p class="text-sm ml-2">Oops! Something went terribly wrong.</p>
        </div>
        <button className="mr-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* ------------------------Discussion Archived Notification */}
      {/* main */}
      <div className="flex items-center space-x-3 text-sm  border border-gray-300/60 p-3 rounded">
        <h3 className="text-gray-700 font-medium">Discussion archived</h3>
        <button
          type="button"
          className="text-indigo-500 font-medium active:scale-95 transition"
        >
          Undo
        </button>
        {/* hya button madhe inline-flex cha use nahi kela tari chalto */}
        <button type="button" className="border inline-flex">
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
              fill="#7d838b"
              fill-opacity=".7"
            />
            <rect
              x="12.531"
              y="13.914"
              width="17.498"
              height="2.1"
              rx="1.05"
              transform="rotate(-135.74 12.531 13.914)"
              fill="#7d838b"
              fill-opacity=".7"
            />
          </svg>
        </button>
      </div>

      {/* --------------------Notification */}
      {/*space-x-5 Two Div madhe Horizontally gap */}
      <div className="border border-gray-300/60 flex divide-gray-300/60 divide-x text-sm space-x-5">
        <div className="py-2.5 flex flex-col justify-center">
          <h3>Receive notification</h3>
          <p>Notifications may include alerts, sounds, and badges.</p>
        </div>
        <div className="flex flex-col items-center divide-y divide-gray-500/30">
          <button className="text-indigo-800 font-medium h-full w-28 hover:bg-indigo-500/10 transition-all">
            Reply
          </button>
          <button className="text-gray-500 font-medium h-full w-28 hover:bg-gray-300/10 transition-all">
            Don't allow
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;
