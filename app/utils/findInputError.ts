export function findInputError(errors: any, name: string) {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { errors: errors[key] });
    }, {});
  return filtered;
}
