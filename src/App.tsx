import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './styles/main.scss';

import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
  )
}

export default App
