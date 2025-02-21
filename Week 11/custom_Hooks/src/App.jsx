import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={increase}>Increase {count}</button>
    </>
  );
}

export default App;
