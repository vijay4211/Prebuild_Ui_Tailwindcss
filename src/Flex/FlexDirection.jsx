import React from "react";

const FlexDirection = () => {
  return (
    <>
      <h2>FlexDirection</h2>
      {/* without flex */}
      <p className="text-red-600">Without flex</p>
      <div className="">
        <div className="border">01</div>
        <div className="border">02</div>
        <div className="border">03</div>
      </div>
      {/* flex */}
      <p className="text-red-600">Flex</p>
      <div className=" flex">
        <div className="border">01</div>
        <div className="border">02</div>
        <div className="border">03</div>
      </div>
      {/* flex-row */}
      <p className="text-red-600">flex-row</p>
      <div className=" flex flex-row">
        <div className="border">01</div>
        <div className="border">02</div>
        <div className="border">03</div>
      </div>
      {/* flex-row-reverse */}
      <p className="text-red-600">flex-row-reverse</p>
      <div className=" flex flex-row-reverse">
        <div className="border">01</div>
        <div className="border">02</div>
        <div className="border">03</div>
      </div>
      {/* flex-col */}
      <p className="text-red-600">flex-col</p>
      <div className=" flex flex-col">
        <div className="border">01</div>
        <div className="border">02</div>
        <div className="border">03</div>
      </div>
      {/* flex-col-reverse  */}
      <p className="text-red-600">flex-col-reverse</p>
      <div className=" flex flex-col-reverse">
        <div className="border">01</div>
        <div className="border">02</div>
        <div className="border">03</div>
      </div>
      {/* Responsive design */}
      <p className="text-red-600">Responsive design</p>
      <div className=" flex flex-col md:flex-row">
        <div className="border">01</div>
        <div className="border">02</div>
        <div className="border">03</div>
      </div>
    </>
  );
};

export default FlexDirection;
