import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  const [clickCount, setClickCount] = useState(0);

  function handleButtonClick() {
    setClickCount((prev) => {
      const next = prev + 1;

      if (next === 1) {
        console.log("clicked");
      } else if (next === 2) {
        console.log("off");
      }

      return next;
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero clickCount={clickCount} onButtonClick={handleButtonClick} />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
