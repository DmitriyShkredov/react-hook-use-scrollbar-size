import React, { useState, useRef, useEffect } from "react";

export const useScrollbarSize = () => {
  const [size, setSiza] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  console.log("Before check", size);

  useEffect(() => {
    elementRef.current = document.createElement("div");
    elementRef.current.style.width = "100px";
    elementRef.current.style.height = "100px";
    elementRef.current.style.overflow = "scroll";
    elementRef.current.style.position = "absolute";
    elementRef.current.style.top = "-9999px";
    document.body.appendChild(elementRef.current);

    const { offsetWidth, clientWidth, offsetHeight, clientHeight } =
      elementRef.current;
    const width = offsetWidth - clientWidth;
    const height = offsetHeight - clientHeight;

    setSiza({ width, height });

    document.body.removeChild(elementRef.current);

    console.log("After check", { width, height });
  }, []);

  return size;
};
