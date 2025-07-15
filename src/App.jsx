import React from "react";
import Alert from "./Alert/Alert";
import Flex from "./Flex/Flex";
import Avatar from "./Avatar/Avatar";
import Badge from "./Badge/Badge";

const App = () => {
  return (
    <div>
      <div className="bg-red-200 p-3 max-w-2xl">App Component</div>
      {/* <Alert /> */}
      {/* <Flex /> */}
      {/* <Avatar /> */}
      <Badge />
    </div>
  );
};

export default App;
