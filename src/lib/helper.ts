export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function removeFromLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    return window.localStorage.removeItem(key);
  }
  return null;
}

export function setToLocalStorage(key: string, value: string) {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, value);
  }
  return null;
}

export function generate_token(length: number) {
  let a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let b = [];
  for (let i = 0; i < length; i++) {
    let j = +(Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}
