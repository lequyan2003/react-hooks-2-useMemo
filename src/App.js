import React, { useState, useMemo } from 'react'

function expensiveFunction(number) {
  console.log('Start');
  const start = new Date();

  // Wait for 3s
  while (new Date() - start < 3000);  // 3s = 3000ms

  console.log('End', new Date() - start, 'ms');
  
  return number * number;
}

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);

  const number = useMemo(() => {
    return expensiveFunction(num);
  }, [num]);  // if num changes, re-execute func in useMemo
  

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <p>Number: {number}</p>
    </>
  );
}

export default App;