import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";

function App() {
  return (
      <div className="wrapper">
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route>404 Not Found!</Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
