// Counter for unique IDs
let counter = 0;

export function getUniqueId(prefix: string = 'id'): string {
  counter += 1;
  return `${prefix}_${counter}`;
}

// Function to get current timestamp
export function getTimestamp(): number {
  return Date.now();
}

// Function to get headers (if needed in the future)
export function getHeaders(): Record<string, string> {
  // This is a placeholder for future implementation
  return {
    'Content-Type': 'application/json',
  };
}
