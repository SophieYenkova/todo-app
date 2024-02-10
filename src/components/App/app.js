import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";

const App = () => {
    const todoData = [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Make awesome App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3},
    ];
  
    return (
      <div className="container fixed-top d-flex flex-column">
        <AppHeader />
        <SearchPanel />
        <TodoList todos = {todoData}/>
      </div>
    );
  };

  export default App;