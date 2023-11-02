import { useState } from "react";
import toasterOnWheels from "/toasterOnWheels.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-grid">
      <div className="title">
        <div className="title-parts">
          <div className="title-top">Post Modernism</div>
          <div className="title-bot">1970-1990</div>
        </div>
      </div>
      <div className="red-rectangle-parent">
        <div className="red-rectangle">
          Post modernism was a movement against the neat and tidy modernism, extenuating unconventional and stylistic
          statements. Examples of this were the Vanna Venturi house, and several works by the renowned Memphis group.
          Post-modern designs embrace both simple yet complex and strive to be a statement, just because.
        </div>
      </div>
      <img src={toasterOnWheels} className="toaster" alt="Some weird toaster thing?" />
      <div className="footer">
        <div className="button">Next</div>
      </div>
    </div>
  );
}

export default App;
