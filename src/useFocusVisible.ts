import { useState, useContext } from "react";
import { FocusVisibleContext } from "./FocusVisibleManager";

// A React hook based on: https://github.com/WICG/focus-visible

export default function useFocusVisible() {
  const [isFocused, setIsFocused] = useState(false);
  const { hadKeyboardEvent, isInitialized } = useContext(FocusVisibleContext);

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur() {
    setIsFocused(false);
  }

  let focusVisible;
  if (isInitialized) {
    focusVisible = hadKeyboardEvent && isFocused;
  } else {
    // Fallback to focused when the `FocusVisibleManager` is not used.
    focusVisible = isFocused;
  }

  return {
    focusVisible,
    onFocus,
    onBlur
  };
}
