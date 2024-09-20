function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function notEqual(actual, expected, message) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

test("calculate with values 1, + , 2 returns 3", () => {
  const result = calculate(1, "+", 2);
  const expected = 3;
  equal(result, expected);
});

test("calculate with values 1, - , 2 returns -1", () => {
  const result = calculate(1, "-", 2);
  const expected = -1;
  equal(result, expected);
});

test("calculate with values 1, * , 2 returns 2", () => {
  const result = calculate(1, "*", 2);
  const expected = 2;
  equal(result, expected);
});

test("calculate with values 1, / , 2 returns 0.5", () => {
  const result = calculate(1, "/", 2);
  const expected = 0.5;
  equal(result, expected);
});

test("calculate with values '1', + , '2' returns a concatenated string", () => {
  const result = calculate("1", "+", "2");
  const expected = 3;
  notEqual(result, expected);
});

test("test form is working correctly", () => {
  const number1 = document.querySelector("#a");
  number1.value = 5;
  const sign = document.querySelector("#sign");
  sign.value = "+";
  const number2 = document.querySelector("#b");
  number2.value = 3;

  const sumbitButton = document.querySelector("button[type='submit']");
  sumbitButton.click();
  const result = document.querySelector("#result");
  equal(result.textContent, "8");
  result.textContent = "";
});
