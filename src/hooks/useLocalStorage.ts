import { useState, useEffect, Dispatch, SetStateAction } from "react";

type UseLocalStorageProps<T> = {
  key: string;
  initialValue: T;
};

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

const useLocalStorage = <T>({
  key,
  initialValue,
}: UseLocalStorageProps<T>): UseLocalStorageReturnType<T> => {
  const storedValue = JSON.parse(
    localStorage.getItem(key) || JSON.stringify(initialValue)
  );

  const [value, setValue] = useState<T>(storedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
