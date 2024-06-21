import { useState } from "react";

export function useDisclosure(isInitiallyOpen = false) {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
