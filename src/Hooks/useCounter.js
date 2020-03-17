import { useState } from "react";

const useCounter = initValue => {
  const [count, setCount] = useState(initValue);

  return [
    count, // Giá trị hiện tại của state
    () => {
      setCount(count + 1); // Hàm tăng
    },
    () => {
      setCount(count - 1); // Hàm giảm
    }
  ];
};

export default useCounter;
