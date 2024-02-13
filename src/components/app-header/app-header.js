import React from "react";

const AppHeader = ({todos, done}) => {
  console.log(done.length)

  return (
    <div>
      <h1 className="text-center">My ToDo List</h1>
      <p className="text-body-secondary text-end">
        <span>{todos.length} </span>more to do, <span>{done.length} </span>done
      </p>
    </div>
  );
};

export default AppHeader;
