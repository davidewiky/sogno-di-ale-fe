import { useRef, useState } from "react";

export function useIsFocused() {
  const containerFocus = useRef<HTMLDivElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => {
    setIsFocused(true);
  };

  return { isFocused, onFocus, containerFocus };
}
