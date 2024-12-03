
/**
 * Convert a string to base64.
 * @param {string} str - The string to be converted.
 * @returns {string} The base64 string.
 */
export function toBase64(str: string) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
    String.fromCharCode(parseInt(p1, 16))
  ));
}
