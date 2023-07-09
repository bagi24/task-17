import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import HarryPotterPhoto from "./component/HarryPotterPhoto";
import AboutHarryPotter from "./component/AboutHarryPotter";
import Fact1 from "./images/fact1.png";
import Fact2 from "./images/fact2.jpg";
import Fact3 from "./images/fact3.png";
import Fact from "./component/Fact";

const facts = [
  {
    id: 1,
    text: "There’s a secret character in the newspaper props used in the films",
    photo: <img src={Fact1} alt="" />,
  },
  {
    id: 2,
    text: " J.K. Rowling was inspired by Edinburgh while writing Harry Potter",
    photo: <img src={Fact2} alt="" />,
  },
  {
    id: 3,
    text: "Russian lawyers claim Dobby is based on Putin",
    photo: <img src={Fact3} alt="" />,
  },
];

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HarryPotterPhoto />} />
          <Route path="/about" element={<AboutHarryPotter />} />
          <Route path="/:factId" element={<FactRouter />} />
        </Routes>
      </div>
    </Router>
  );
};

const FactRouter = () => {
  const { factId } = useParams();
  const parsedFactId = parseInt(factId);

  const fact = facts.find((f) => f.id === parsedFactId);

  return (
    <Routes>
      <Route
        path="/"
        element={fact ? <Fact fact={fact} /> : <FactNotFound />}
      />
    </Routes>
  );
};

const FactNotFound = () => {
  return <div className="fact-not-found">Fact not found.</div>;
};

export default App;
