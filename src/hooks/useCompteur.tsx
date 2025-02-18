import { useState } from "react";

  const useCompteur = (initialValue: number) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      setCount(count - 1);
    };

    return {
      count,
      handleIncrement,
      handleDecrement
    };
  };

  export default useCompteur;