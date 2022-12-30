import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";
import TodoList from "./components/todos/TodoList";
import DeletedTodo from "./components/deletedtodos/DeletedTodo";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/todos/Home";
function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{padding:"10px"}}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todos" element={<TodoList />} />
          <Route path="deleted" element={<DeletedTodo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
