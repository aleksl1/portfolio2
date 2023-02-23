import React from "react";

export const CardContext = React.createContext({
  cardState: false,
  setCardState: () => {}
});