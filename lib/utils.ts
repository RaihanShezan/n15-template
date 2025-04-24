import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
export const camelize = (s: string) => s.split(' ').map(capitalize).join(' ');
export const capitalizeVar = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

type Arr2StrProps = { arr: string[]; joiner?: string; endJoiner?: string };
export function arr2str({ arr, joiner = ', ', endJoiner = ' and ' }: Arr2StrProps) {
	return arr.slice(0, -1).join(joiner) + endJoiner + arr[arr.length - 1];
}

export function isEmptyObj(obj: Record<string, any>) {
	return Object.values(obj).every(
		value =>
			value === null || value === undefined || (typeof value === 'string' && value.trim() === ''),
	);
}

export const isValidStr = (s?: string | null) => s && typeof s === 'string';

export type Method = 'POST' | 'PUT' | 'PATCH' | 'DELETE';
const headers = { 'Content-Type': 'application/json' };
export async function sFetch(method: Method, url: string, body?: Record<any, any>) {
	return await fetch(url, { method, body: JSON.stringify(body), headers });
}
