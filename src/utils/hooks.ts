// import { RefObject } from "react";

// import { useEventListener } from "usehooks-ts";

// type Handler = (event: MouseEvent) => void;

// function useOnClickOutside<T extends HTMLElement = HTMLElement>(
//   ref: RefObject<T>,
//   handler: Handler,
//   mouseEvent: "mousedown" | "mouseup" = "mousedown"
// ): void {
//   useEventListener(mouseEvent, (event) => {
//     const el = ref?.current;

//     // Do nothing if clicking ref's element or descendent elements
//     if (!el || el.contains(event.target as Node)) {
//       return;
//     }

//     handler(event);
//   });
// }

// export default useOnClickOutside;

import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
