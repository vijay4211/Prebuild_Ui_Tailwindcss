import React from "react";

const Avatar = () => {
  return (
    <>
      <div>Avatar</div>
      <div className="space-y-10">
        {/*-----------------------Avatar Square  */}
        <div>
          <div className="relative mb-5">
            <img
              className="h-20 w-20 rounded"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="userImage1"
            />
            <div className="absolute -top-3 left-16 h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center ">
              <p className="text-xs text-white">01</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            class="h-20 w-20 rounded"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
            alt="userImage2"
          />
          <div className="bg-red-500 h-5 w-5 rounded-full flex justify-center items-center absolute -top-2 left-0">
            <p className="text-xs text-white">02</p>
          </div>
        </div>

        {/* --------------------Avatar Square Circle */}
        {/* main */}
        {/* flex =  childs come side by side*/}
        {/* justify-center = childs move horizontally center */}
        <div className="flex justify-center gap-10 bg-blue-500/10">
          {/* One */}
          <div className="relative">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="userImage1"
            />
            <div className="absolute -top-1 -right-1 bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center">
              <p className="text-xs text-white">03</p>
            </div>
          </div>
          {/* Two */}
          <div className="relative">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="userImage2"
            />
            <div className="bg-red-500 text-white h-5 w-5 rounded-full flex justify-center items-center absolute top-0 right-0">
              <p class="text-xs">04</p>
            </div>
          </div>
          {/* Three */}
          <div class="relative">
            <img
              class="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="userImage3"
            />
            <div class="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 bg-yellow-500 rounded-full">
              <p class="text-white text-xs">09</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
