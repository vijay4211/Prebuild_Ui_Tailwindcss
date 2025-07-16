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
        <div className="flex justify-center items-center flex-wrap gap-4">
          {/* overflow-hidden = hyacha jar use nahi kela tar image hi parent overflow hote aani baher thodi show hote. */}
          <div className="border border-gray-500/30 rounded-2xl pb-4 overflow-hidden">
            <img
              class="w-64 h-52 object-cover object-top"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400"
              alt="userImage2"
            ></img>
            {/* flex + flex-col = by default childe will left side */}
            {/* flex + flex-col + justify-center = childe will left side */}
            {/* flex + flex-col + items-center = childe will center */}
            <div className="flex flex-col items-center">
              <p className="font-medium mt-3">Kelvin John</p>
              <p className="text-gray-500 text-sm">kelvin.john@gmail.com</p>
              <button className="text-sm text-gray-500 border border-gray-500/30 w-28 h-8 rounded-full mt-5">
                <p className="mb-1">message</p>
              </button>
            </div>
          </div>
          <div className="border border-gray-500/30 rounded-2xl pb-4 overflow-hidden">
            <img
              class="w-64 h-52 object-cover object-top"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400"
              alt="userImage2"
            ></img>
            {/* flex + flex-col = by default childe will left side */}
            {/* flex + flex-col + justify-center = childe will left side */}
            {/* flex + flex-col + items-center = childe will center */}
            <div className="flex flex-col items-center">
              <p className="font-medium mt-3">Kelvin John</p>
              <p className="text-gray-500 text-sm">kelvin.john@gmail.com</p>
              {/* w-0 keli tar border chi property yethe disanar nahi */}
              {/* h-8 and w-28 alternative is padding px-5 py-0.5*/}
              <button className="text-sm text-gray-500 border border-gray-500/30 px-5 py-0.5 rounded-full mt-5 flex justify-center items-center gap-1">
                <svg
                  class="mt-0.5"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m7.107 11.684.31-.521-.736-.436-.309.522zm-2.28-.521.308.521.735-.435-.309-.522zm1.545.086a.297.297 0 0 1-.502 0l-.735.435a1.15 1.15 0 0 0 1.972 0zM5.267.854h1.708V0H5.267zm6.121 4.413v.57h.854v-.57zm-10.534.57v-.57H0v.57zm-.854 0c0 .657 0 1.171.028 1.586.029.42.088.768.221 1.09l.79-.327c-.084-.2-.133-.446-.159-.82-.026-.38-.026-.86-.026-1.53zm3.731 3.838c-.715-.012-1.09-.058-1.383-.18l-.327.79c.459.19.98.232 1.695.244zM.249 8.513c.333.802.97 1.44 1.772 1.772l.327-.79a2.42 2.42 0 0 1-1.31-1.309zm11.14-2.677c0 .67-.001 1.15-.027 1.53-.026.374-.075.62-.158.82l.79.327c.133-.322.192-.67.22-1.09.028-.415.028-.93.028-1.587zM8.525 10.53c.715-.012 1.237-.054 1.695-.244l-.327-.79c-.293.122-.668.168-1.383.18zm2.678-2.343a2.42 2.42 0 0 1-1.31 1.31l.327.789a3.27 3.27 0 0 0 1.772-1.772zM6.975.854c.94 0 1.616 0 2.142.05.52.05.852.145 1.116.307l.446-.729C10.259.225 9.78.11 9.199.054 8.621 0 7.898 0 6.974 0zm5.267 4.413c0-.924 0-1.646-.054-2.223-.056-.583-.17-1.06-.428-1.48l-.728.446c.161.264.256.595.306 1.115.05.527.05 1.202.05 2.142zm-2.01-4.056c.326.2.6.473.8.799l.728-.447c-.27-.44-.64-.81-1.081-1.08zM5.268 0c-.924 0-1.646 0-2.223.054-.583.056-1.06.17-1.48.428l.446.729c.264-.162.595-.257 1.115-.306.527-.05 1.202-.05 2.142-.05zM.854 5.267c0-.94 0-1.615.05-2.142.05-.52.145-.851.307-1.115l-.729-.447c-.257.421-.372.898-.428 1.481C0 3.621 0 4.344 0 5.267zm.71-4.785A3.3 3.3 0 0 0 .482 1.563l.729.447c.2-.326.473-.6.799-.8zM5.56 10.728a6 6 0 0 0-.316-.503 1.3 1.3 0 0 0-.388-.368l-.43.739a.4.4 0 0 1 .128.131c.07.095.147.226.271.436zm-1.845-.199c.25.004.409.008.53.02a.45.45 0 0 1 .182.047l.429-.739a1.3 1.3 0 0 0-.518-.156c-.169-.019-.374-.022-.608-.026zm3.7.634c.124-.21.202-.34.271-.436a.4.4 0 0 1 .128-.131l-.43-.739a1.3 1.3 0 0 0-.388.368c-.099.135-.2.307-.316.502zM8.51 9.675c-.234.004-.439.007-.608.026-.178.02-.351.06-.518.156l.43.739a.45.45 0 0 1 .182-.046 6 6 0 0 1 .529-.02z"
                    fill="#6B7280"
                  />
                  <path
                    d="M3.844 5.552h.005m2.268 0h.005m2.272 0H8.4"
                    stroke="#6B7280"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="mb-1">message</p>
              </button>
            </div>
          </div>
        </div>

        {/* -------------------------User Profile Card */}
        {/* main */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="border border-red-300 p-3 bg-white rounded-2xl pb-4">
            <div className="border pt-10 w-64 flex justify-center">
              {/* overflow-hidden = image ji baher aali hoti ti parent madhe fit zali */}
              <div className="border w-28 h-28 rounded-full overflow-hidden">
                {/* h-full or h-28 */}
                {/* img's parend div chi h-28 aahe tar image chi height sudha h-auto or h-28 theu shakto */}
                <img
                  // object-top = image move on from top
                  //   object-cover = parent div chi w-28 aahe tya nusar image ha aapli jaga gheto
                  class="h-28 object-cover object-top"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="userImage2"
                ></img>
              </div>
            </div>
            <div className="border mt-1 flex flex-col items-center">
              <p className="font-medium mt-3">Kalvin John</p>
              <p className="text-gray-500 text-sm">kelvin.john@gmail.com</p>
              <button className="border border-gray-500/30 w-28 h-8 rounded-full mt-5 text-sm">
                <p className="mb-1">message</p>
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------Receipt Card */}
        {/* main */}
        <div class="flex items-center justify-center flex-wrap gap-10 w-full">
          {/* no need flex and flex-col items-center here */}
          {/* w-80 */}
          <div class="bg-indigo-500/5  text-sm text-gray-500 flex flex-col items-center w-80 rounded-lg">
            {/* w-full */}
            <div class="flex items-center justify-between w-full px-4 py-2">
              {/* no need to justify-between here */}
              <div class="flex items-center justify-between gap-3 border">
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

          <div class="bg-indigo-500/5 border border-gray-500/20 text-sm text-gray-500 flex flex-col items-center w-80 rounded-lg">
            <div class="flex items-center justify-between w-full px-4 py-2">
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
              <button type="button" aria-label="more">
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
            <div class="flex flex-col items-center gap-2 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-gray-500/20">
              <div class="flex items-center w-full justify-between">
                <p>Last invoice</p>
                <p>December 24, 2023</p>
              </div>
              <div class="w-full h-px bg-gray-300/60"></div>
              <div class="flex items-center w-full justify-between">
                <p>Amount</p>
                <div class="flex items-center gap-2">
                  <p>$800.00</p>
                  <p class="bg-red-500/20 px-3 py-0.5 rounded border border-red-500/30 text-red-600">
                    Overdue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
