let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
const multiplier = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${multiplier} * ${i} = ${multiplier * i}`);
}
const array = [1, 2, 3, 4, 5];
let index = 0;
while (index < array.length) {
  console.log(array[index]);
  index++;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    break;
  }
  console.log(array[i]);
}
