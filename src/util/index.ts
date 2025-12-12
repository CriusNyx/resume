export function safe<T>(value: T | undefined | null | false): T | undefined {
  if (value === undefined || value === null || value === false) {
    return undefined;
  }
  return value;
}
