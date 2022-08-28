export const getPrice = (price, type = "main") => {
  const [main, decimal] = price.split(".");

  if (type === "decimal") {
    return decimal;
  } else {
    return main;
  }
};

export const renderRating = (num) => {
  let rawRating = num;
  if (!rawRating) rawRating = 1;

  let convertedRating = Math.floor((rawRating / 2) * 10);
  let remainder = convertedRating % 10;
  convertedRating -= remainder;
  let stars = new Array(convertedRating / 10).fill("BsStarFill").join(",");
  remainder === 0
    ? (remainder = 0)
    : remainder > 5
    ? (remainder = 10)
    : (remainder = 5);
  convertedRating += remainder;
  convertedRating /= 10;

  if (remainder) stars += ",BsStarHalf";
  stars = stars.split(",");

  if (stars.length < 5) {
    const remainder = new Array(5 - stars.length);
    remainder.fill("BsStar");
    stars = [...stars, ...remainder];
  }
  return stars;
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getTotalPrice = (cart) =>
  cart.reduce((totalPrice, item) => (totalPrice += parseFloat(item.price)), 0);

export const getError = (firebaseErr) => {
  if (firebaseErr.includes("Firebase: Error (auth/")) {
    return firebaseErr
      .replace("Firebase: Error (auth/", "")
      .replace(").", "")
      .split("-")
      .join(" ");
  }
};
