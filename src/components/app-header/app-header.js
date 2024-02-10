import React from "react";

const AppHeader = () => {
  return (
    <div>
      <h1 className="text-center">My ToDo List</h1>
      <p className="text-body-secondary text-end">
        <span>1 </span>more to do, <span>3 </span>done
      </p>
    </div>
  );
};

export default AppHeader;
