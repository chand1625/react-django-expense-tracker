import { createContext, useState } from "react";

export const LoadingContext = createContext(null);

export function LoadingContextProvider(props) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
}
