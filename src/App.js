import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <p>Video Chat goes here.</p>
      </main>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛
          </span>{" "}
          by Youup Kim
        </p>
      </footer>
    </div>
  );
};

export default App;
