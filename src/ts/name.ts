export default function getInitials(name?: string): string {
  if (!name) return "";

  const letters = /^[A-Za-z]+$/;
  return name.split(" ").reduce((acc, cur, index) => {
    if (cur.charAt(0).match(letters))
      return (index === 1 ? acc.charAt(0) : acc) + cur.charAt(0);

    return index === 1 ? acc.charAt(0) : acc;
  });
}
