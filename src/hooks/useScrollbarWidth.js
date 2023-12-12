import React, { useRef } from "react";

export const useScrollbarWidth = () => {
  const widthRef = useRef(-1);

  if (widthRef.current >= 0) return widthRef.current;

  const wrapper = document.createElement("div");
  wrapper.style.visibility = "hidden";
  wrapper.style.overflow = "scroll";
  document.body.appendChild(wrapper);

  const inner = document.createElement("div");
  wrapper.appendChild(inner);

  widthRef.current = wrapper.offsetWidth - inner.offsetWidth;
  document.body.removeChild(wrapper);

  console.log("xx", widthRef.current);

  return widthRef.current;
};
