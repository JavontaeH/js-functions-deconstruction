const buyChocolate = () => {
  const candy = {
    chocolate: "Milk Chocolate",
  };

  return candy;
};

const addFlavoring = (candyObject) => {
  candyObject.flavor = "Poop";
  return candyObject;
};
const makeBarkMixture = (candyObject) => {
  if (candyObject.flavor === "Mint") {
    candyObject.mixture = true;
  } else {
    candyObject.mixture = false;
  }

  return candyObject;
};
const bakeCandy = (candyObject) => {
  if (candyObject.mixture === true) {
    candyObject.baked = true;
  } else if (candyObject.mixture === false) {
    candyObject.baked = false;
  }

  return candyObject;
};

const breakBark = (candyObject) => {
  if (candyObject.baked === true) {
    candyObject.broken = [
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
    ];
    return candyObject;
  }
};

let candyObject = buyChocolate();

let completedCandy = addFlavoring(candyObject);
makeBarkMixture(candyObject);
bakeCandy(candyObject);
breakBark(candyObject);

console.log(completedCandy);
