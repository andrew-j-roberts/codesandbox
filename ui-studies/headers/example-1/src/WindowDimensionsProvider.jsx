/**
 * WindowDimensionsProvider.jsx
 * Render at root app level to provide window dimensions context to entire application
 * 
 * Learn here: https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a
 */

import React, { createContext, useContext, useState, useEffect } from "react";

const WindowDimensionsContext = createContext(null);

export function WindowDimensionsProvider({ children }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WindowDimensionsContext.Provider value={dimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  );
}

export function useWindowDimensions() {
  return useContext(WindowDimensionsContext);
}
