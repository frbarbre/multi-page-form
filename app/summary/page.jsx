'use client'

import { useStore } from "../store";

export default function Summary() {

    const name = useStore((store) => store.name)

  return (
    <div>
      <h1>Summary</h1>
      <h2>Name: {name}</h2>
    </div>
  );
}
