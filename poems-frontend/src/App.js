import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "./components/post";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/post" element={<Post />}/>
      </Routes>
    </div>
  )
}

export default App;