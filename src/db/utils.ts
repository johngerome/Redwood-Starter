let counter = 0;

export function createId(): string {
  const timestamp = Date.now().toString(36);
  counter = (counter + 1) % 1296;
  const count = counter.toString(36).padStart(2, "0");

  const array = new Uint8Array(8);
  crypto.getRandomValues(array);
  const random = Array.from(array)
    .map((b) => b.toString(36))
    .join("")
    .slice(0, 14);

  return `c${timestamp}${count}${random}`.slice(0, 25);
}
