import React from "react";
import Alert from "./Alert/Alert";
import Flex from "./Flex/Flex";
import Avatar from "./Avatar/Avatar";
import Badge from "./Badge/Badge";
import { Banner } from "./Banner/Banner";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const App = () => {
  return (
    <div>
      <div className="bg-red-200 p-3 max-w-2xl">App Component</div>
      {/* <Alert /> */}
      {/* <Flex /> */}
      {/* <Avatar /> */}
      {/* <Badge /> */}
      {/* <Banner /> */}
      <Breadcrumbs />
    </div>
  );
};

export default App;
