import { useEffect, useState } from "react";

const isServer = typeof window === "undefined";

export function useLocalStorage(initialKey: string, initialValue: string) {
  const parseJSON = (json: string) => {
    try {
      return JSON.parse(json);
    } catch (e) {
      return initialValue;
    }
  };

  const [item, setItem] = useState<string>(() => {
    if (isServer) {
      return initialValue;
    }
    const stored = localStorage.getItem(initialKey);
    return stored ? parseJSON(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(initialKey, JSON.stringify(item));
  }, [item]);

  return { item, setItem };
}
