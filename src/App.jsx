import React from "react";
import Alert from "./Alert/Alert";
import Flex from "./Flex/Flex";
import Avatar from "./Avatar/Avatar";
import Badge from "./Badge/Badge";
import { Banner } from "./Banner/Banner";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Cart from "./Cart/Cart";
import FlexBasis from "./Flex/FlexBasis";
import FlexDirection from "./Flex/FlexDirection";
import FlexWrap from "./Flex/FlexWrap";

const App = () => {
  return (
    <div>
      <div className="bg-red-200 p-3 max-w-2xl">App Component</div>
      {/* <Alert /> */}
      {/* <Avatar /> */}
      {/* <Badge /> */}
      {/* <Banner /> */}
      {/* <Breadcrumbs /> */}
      {/* <Cart /> */}
      {/* -----------------------Flex */}
      {/* <Flex /> */}
      {/* <FlexBasis /> */}
      {/* <FlexDirection /> */}
      <FlexWrap />
    </div>
  );
};

export default App;
