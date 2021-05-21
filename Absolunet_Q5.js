const reverseString = () => {
  const newString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    .split("")
    .reverse()
    .join("");
  return newString;
};

console.log(reverseString());
