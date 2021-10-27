import { useState, useMemo } from "react";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((c) => c + 1);
  const memoizedBtn = useMemo(
    () => <Button label="count up" onClick={handleCount} />,
    []
  );
  return (
    <>
      <main className="container text-center">
        <p>count : {count}</p>
        {memoizedBtn}
      </main>
    </>
  );
}

export default App;
