import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};

function App() {
  return (
    <div>
      <h1>Timer App</h1>
      <Timer />
    </div>
  );
}

export default App;
