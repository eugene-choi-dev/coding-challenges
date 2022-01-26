function descendingOrder(n) {
    const inputAsArray = Array.from(n.toString()).map(Number);
    inputAsArray.sort((a, b) => b - a);
    return Number(inputAsArray.join(""));
  }
  
  console.log(descendingOrder(51234523));
  