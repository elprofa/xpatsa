import react, { createContext } from "react";

const TransactionContext = createContext();
\;

const TransactionProvider = ({ children }) => {
  <TransactionContext.Provider>{children}</TransactionContext.Provider>;
};
