import React from "react";

const FlexWrap = () => {
  return (
    <>
      <p className="text-red-600">flex</p>
      <div class="flex">
        <div className="w-1/2 border">01</div>
        <div className="w-1/2 border">02</div>
        <div className="w-1/2 border">03</div>
      </div>
      <p className="text-red-600">flex-nowrap</p>
      <div class="flex flex-nowrap">
        <div className="w-1/2 border">01</div>
        <div className="w-1/2 border">02</div>
        <div className="w-1/2 border">03</div>
      </div>
      <p className="text-red-600">flex flex-wrap</p>
      <div class="flex flex-wrap">
        <div className="w-1/2 border">01</div>
        <div className="w-1/2 border">02</div>
        <div className="w-1/2 border">03</div>
      </div>
      <p className="text-red-600">flex flex-wrap-reverse</p>
      <div class="flex flex-wrap-reverse">
        <div className="w-1/2 border">01</div>
        <div className="w-1/2 border">02</div>
        <div className="w-1/2 border">03</div>
      </div>
      <p className="text-red-600">Responsive design</p>
      {/* md and above size... */}
      {/* flex-wrap is mobile size */}
      <div class="flex flex-wrap md:flex-wrap-reverse">
        <div className="w-1/2 border">01</div>
        <div className="w-1/2 border">02</div>
        <div className="w-1/2 border">03</div>
      </div>
    </>
  );
};

export default FlexWrap;
