export function commaString(string) {
  const commaToString = [];
  commaToString.push(string);

  return commaToString.join(",").toLocaleLowerCase();
}
