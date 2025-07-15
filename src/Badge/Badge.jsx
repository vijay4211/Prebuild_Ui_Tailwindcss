import React from "react";

const Badge = () => {
  return (
    <>
      <div>Badge</div>
      {/* Container */}
      <div className="space-y-5">
        {/*---------------Version Badge Tag */}
        {/* main*/}
        <div className="flex items-center space-x-2.5 border border-gray-500/30 rounded-full p-1 text-sm text-gray-800">
          <div className="border border-gray-500/30 rounded-2xl px-3 py-1">
            <p>Version 7.8</p>
          </div>
          {/* not use pr-3 */}
          <p className="pr-3">New feature is ready to use, let's try </p>
        </div>

        {/* ---------------------Update Badge Tag */}
        {/* main */}
        <div className="bg-green-500/20 p-1 text-sm flex items-center text-green-600 border border-green-500/30 rounded-full">
          <p className="pl-3">It will take approximate 2GB memory</p>
          <div className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-2xl">
            <p>Update</p>
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* -----------------------------Subscription Reminder Badge */}
        {/* main */}
        <div className="border border-blue-500/30 rounded-full bg-blue-500/20 text-sm text-blue-600 flex items-center space-x-2.5">
          <div className="border border-blue-500 rounded-3xl bg-blue-500 text-white px-3 py-1 pl-1 flex items-center space-x-1">
            <img
              class="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
              alt="userImage"
            ></img>
            <p>Richard</p>
          </div>
          <p className="pr-3">Your subscription renews on 22 March</p>
        </div>

        {/* ----------------------Gradient Text Badge */}
        {/* main */}
        <div className="text-sm border border-gray-300 py-1 rounded-full flex items-center divide-x divide-gray-300">
          <span className="text-xl pr-1 pl-3">🔥</span>
          <span className="pl-2 pr-5 bg-gradient-to-r from-rose-500 to-indigo-500 font-medium bg-clip-text text-transparent">
            PrebuiltUI - UI Components Library
          </span>
        </div>

        {/* ---------------------Growth Badge Tag */}
        {/* main */}
        <div className="border border-indigo-200 rounded-full px-4 py-1 text-sm bg-blue-400/10 text-blue-800 flex items-center gap-2">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.4 1H13v3.6"
              stroke="#1E4BAF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 1 7.9 6.1l-3-3L1 7"
              stroke="#1E4BAF"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>124 Application</span>
        </div>

        {/* ---------------Info Status Badge*/}
        {/* main */}
        <div className="border border-indigo-200 rounded-full px-4 py-1 bg-blue-400/10 text-sm flex items-center gap-2">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
              stroke="#1E4BAF"
              stroke-miterlimit="5.759"
              stroke-linecap="round"
            />
          </svg>
          <p>Responded to 99% applicants</p>
        </div>

        {/* ----------------More Information Badge */}
        {/* main */}

        <a
          href="#"
          className="border border-indigo-200 rounded-full text-indigo-500 bg-indigo-50 flex items-center gap-2 p-1 text-sm"
        >
          <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          {/* p = div, span = p same output */}
          <p className="flex items-center gap-1">
            <span>Click here for more information</span>
            <svg
              class="mt-1"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </a>

        {/* ----------------------Hiring Badge */}
        {/* main */}
        <div className="border border-indigo-200 rounded-full text-sm text-slate-500 flex items-center gap-2">
          <span className="text-indigo-600 font-medium pl-2 pr-1">
            We're hiring
          </span>
          <div className="bg-red-300 h-6 w-px"></div>
          <a href="#" className="flex items-center gap-1 px-1">
            See open positions
            <svg
              class="mt-1"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* -----------------New Update Badge */}
        {/* main */}
        <div className="text-slate-500 text-sm border border-indigo-500/60 p-1 flex items-center gap-1">
          <span className="text-indigo-600 font-medium border border-indigo-200 px-3 py-1 rounded-full">
            What's new?
          </span>
          <a href="#" className=" gap-1 px-1 flex items-center">
            Just released v4.3.1
            <svg
              class="mt-0.5"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* --------------------New Announcement Badge Gray */}
        {/* main */}
        <div className="border border-gray-300 rounded-full px-3 py-1 flex items-center gap-2 text-sm">
          {/* p or span */}
          <p className="text-slate-500">
            Announcing our next round of funding.
          </p>
          <a href="#" className="text-indigo-600 font-medium flex items-center">
            Read more
            <svg
              class="mt-0.5"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.959 9.5h11.083m0 0L9.501 3.96m5.541 5.54-5.541 5.542"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* ------------------Announcement Badge with Sparkle */}
        {/* main */}
        <div className="flex items-center border border-gray-200 py-1 text-sm gap-2">
          {/* span or p */}
          <span className="text-indigo-600 font-medium flex items-center gap-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4m7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1m-2 10a.75.75 0 0 1 .728.568.97.97 0 0 0 .704.704.75.75 0 0 1 0 1.456.97.97 0 0 0-.704.704.75.75 0 0 1-1.456 0 .97.97 0 0 0-.704-.704.75.75 0 0 1 0-1.456.97.97 0 0 0 .704-.704A.75.75 0 0 1 10 11"
                fill="#4F39F6"
              />
            </svg>
            Announcing our next round of funding.
          </span>
          <span className="text-gray-500 text-base">•</span>
          <a href="#" className="flex items-center text-gray-500 gap-1">
            Learn more
            <svg
              class="mt-1"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* -------------------Simple Badge */}
        {/* main */}
        <div className="flex items-center gap-2 border border-red-200 py-1 px-3 rounded-full bg-red-50">
          <div className="bg-red-500 size-1.5 rounded-full"></div>
          <span>Cutting-edge technology</span>
        </div>
      </div>
    </>
  );
};

export default Badge;
