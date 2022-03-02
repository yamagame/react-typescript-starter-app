// A mock function to mimic making an async request for data
export function fetchCountAsync(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
