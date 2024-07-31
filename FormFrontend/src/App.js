import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success/:name" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
