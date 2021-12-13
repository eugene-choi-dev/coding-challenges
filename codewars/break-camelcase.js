function solution(string) {
  const result = [];
  string.split("").forEach((letter) => {
    if (letter != letter.toUpperCase()) {
      result.push(letter);
    } else {
      result.push(` ${letter}`);
    }
  });
  return result.join("");
}

console.log(solution("camelCasing"));