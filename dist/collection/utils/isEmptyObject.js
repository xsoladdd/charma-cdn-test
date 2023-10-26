export function isEmptyObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return true; // true if object is empty
    }
  }
  return false; // The object is empty
}
//# sourceMappingURL=isEmptyObject.js.map
