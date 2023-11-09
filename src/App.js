import logo from "./logo.svg";
import "./App.css";
import Cover from "./Components/Cover";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router basename="/infround">
      <div className="App"></div>
      <div>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.path} path={route.path} element={route.element} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
