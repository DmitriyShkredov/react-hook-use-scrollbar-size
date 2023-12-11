import React, { useState, useRef, useEffect } from "react";

export const useScrollbarSize = () => {
  const [size, setSiza] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  console.log("Before check", size);

  useEffect(() => {
    elementRef.current = document.createElement("div");
    elementRef.current.style.width = "90px";
    elementRef.current.style.height = "90px";
    elementRef.current.style.overflow = "scroll";
    elementRef.current.style.position = "absolute";
    elementRef.current.style.top = "-9999px";
    elementRef.current.setAttribute("aria-hidden", "true");
    document.body.appendChild(elementRef.current);

    const { offsetWidth, clientWidth } = elementRef.current;
    const width = offsetWidth - clientWidth;

    const { offsetHeight, clientHeight } = elementRef.current;
    const height = offsetHeight - clientHeight;

    setSiza({ width, height });

    console.log("After check", { width, height });

    return () => {
      if (elementRef.current) {
        document.body.removeChild(elementRef.current);
      }
    };
  }, []);

  return size;
};
