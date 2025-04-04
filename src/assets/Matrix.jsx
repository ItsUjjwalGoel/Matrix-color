import React, { useState } from "react";

const Matrix = () => {
  const [clickedOrder, setClickedOrder] = useState([]);
  const [finalClicked, setFinalClicked] = useState(false);
  const [colors, setColors] = useState(Array(9).fill("bg-blue-200"));

  const handleClick = (index) => {
    if (finalClicked || clickedOrder.includes(index)) return;

    const newOrder = [...clickedOrder, index];
    setClickedOrder(newOrder);
    console.log(clickedOrder);

    const updatedColors = [...colors];
    updatedColors[index] = "bg-green-500";
    setColors(updatedColors);

    if (index === 8) {
      setFinalClicked(true);
      newOrder.forEach((boxIndex, i) => {
        setTimeout(() => {
          setColors((prev) => {
            const updated = [...prev];
            updated[boxIndex] = "bg-orange-500";
            return updated;
          });
        }, i * 300);
      });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto mt-10">
      {colors.map((color, i) => (
        <div
          key={i}
          onClick={() => handleClick(i)}
          className={`w-16 h-16 border rounded cursor-pointer ${color} transition-colors duration-300`}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
