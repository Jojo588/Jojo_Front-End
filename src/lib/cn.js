import clsx from "clsx";

/**
 * Combines class names conditionally.
 * @param  {...any} inputs - Tailwind class strings or conditions.
 * @returns {string} - Final className string.
 */
export function cn(...inputs) {
  return clsx(...inputs);
}
