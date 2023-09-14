//iterator จัดการ Array
//foreach วนลูปอาร์เรย์

const prices = [20, 15, 30, 40, 55];

prices.forEach((price, idx) => {
  console.log(idx, price);
});

//map เปลี่ยนข้อมูล
const newPrices = prices.map((price) => {
  return price * 1.1;
});

console.log(newPrices);

//filter กรองข้อมูล

const premiumPrices = newPrices.filter((price) => {
  return price > 30;
});
console.log(premiumPrices);

//reduce เอาค่าใน array มารวมกัน
// prevVal = 0
const sumPrice = newPrices.reduce((prevVal, price) => {
  return prevVal + price;
});
console.log(sumPrice);

//some เช็คบางตัว  return value = boolean
// every เช็คทุกตัว return value = boolean
