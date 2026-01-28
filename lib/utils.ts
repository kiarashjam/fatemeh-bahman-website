/**
 * Shared utilities. cn() is the main helper for merging Tailwind classes (used with clsx).
 */
import { type ClassValue, clsx } from 'clsx'

/** Merges class names; supports conditional classes and Tailwind conflicts (clsx). */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
