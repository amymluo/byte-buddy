export var userInfo = {
  name: "Stephen Olaffsen",
  points: 35,
  buddy: {
    name: "Beboop",
    points: "23",
    background: "assets/bg.png",
    accessories: []
  }
};

export function canBuy(amount) {
  return amount <= userInfo.points;
}

export function buyItem(amount) {
  userInfo.points = amount;
}
