function checkCards(a, b) {
  const values = {
    Jack: 1,
    Queen: 2,
    King: 3,
  };

  //   checking if both elements are are numbers, or both are strings other than Jack, Queen and King
  if (
    (typeof a === "number" && typeof b === "number") ||
    (typeof a === "string" && typeof b === "string" && !values[a] && !values[b])
  ) {
    return a - b;

    // checking if one of the element is a number and the other is a string
  } else if (typeof a === "number") {
    return -1;
  } else if (typeof b === "number") {
    return 1;

    // comparing values of both elements if both are strings
  } else {
    return values[a] - values[b];
  }
}

let cards = [
  "Jack",
  8,
  2,
  6,
  "King",
  5,
  3,
  "Queen",
  "jack",
  "Jack",
  "Queen",
  "Queen",
  "KIng",
  "King",
];

cards.sort(checkCards);

console.log(cards);
