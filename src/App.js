import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Books from "./components/Books";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/books/:title" element={<Books />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
