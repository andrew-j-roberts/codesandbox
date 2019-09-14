/**
 * ReactiveLayout.jsx
 * Conditionally render layouts based on window dimension
 * 
 * Learn here: https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a
 */

import { useWindowDimensions } from "./WindowDimensionsProvider";

function ReactiveLayout({ breakpoint, renderMobile, renderDesktop }) {
  const { width } = useWindowDimensions();
  return width > breakpoint ? renderDesktop() : renderMobile();
}

export default ReactiveLayout;
