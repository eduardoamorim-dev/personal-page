import React, { useEffect, useState } from "react";

const GradientCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)", 
        width: "900px", 
        height: "900px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(76, 4, 211, 0.15), transparent 65%)",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        transition: "none", 
      }}
    />
  );
};

export default GradientCursor;
