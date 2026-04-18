"use client";
import { use, useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
