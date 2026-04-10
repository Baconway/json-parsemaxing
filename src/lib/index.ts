export function ProcessTypes(item: unknown) {
  // strings, bools, nums, arrays: passable
  // object (like classes/dicts): needs to process
  if (
    typeof item === "boolean" ||
    typeof item === "number" ||
    typeof item === "string"
  ) {
    return item;
  }
}
