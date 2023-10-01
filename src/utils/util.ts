export const titleCase = (str: string) => {
  const words = str.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.includes("'")) {
      const parts = word.split("'");
      return parts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("'");
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
};
