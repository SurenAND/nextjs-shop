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

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "#2980b9",
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

export const removeHyphens = (str: string): string => {
  return str?.replace(/-/g, " ");
};
