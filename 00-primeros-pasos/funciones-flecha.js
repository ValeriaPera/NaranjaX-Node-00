const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => {
  if (num2 === 0) {
    return "no se puede dividir por 0";
  } else {
    return num1 / num2;
  }
};
