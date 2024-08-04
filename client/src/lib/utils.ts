import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateString(str: `0x${string}` | undefined, num: number) {
  if (str?.length != undefined && str.length <= num) {
    return str
  }
  return str?.slice(0, num) + "..." + str?.slice(-num)
}