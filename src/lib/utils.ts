import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeString(string: string) {
  return string.substring(0, 1).toUpperCase() + string.slice(1)
}
