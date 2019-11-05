export var userData = {
  name: "Stephen Olaffsen",
  points: 35,
  buddy: {
    name: "Beboop",
    points: 23,
    background: "assets/bg.png",
    accessories: []
  }
};

export function canBuy(amount) {
  return amount <= userData.points;
}

export function buyItem(amount) {
  userData.points = amount;
}
