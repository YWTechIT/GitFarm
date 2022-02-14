import { checkLeapYear, getFebruary, year, fillZero } from "./date.js";

describe("윤년 test", () => {
  test("윤년입니다.", () => {
    const isLeap = 1640;
    expect(checkLeapYear(isLeap)).toBe(true);
  });

  test("윤년이 아닙니다.", () => {
    const isNotLeap = 2022;
    expect(checkLeapYear(isNotLeap)).toBe(false);
  });
});

describe("윤년여부에 따른 February 배열 test", () => {
  test(`${year}년 2월 배열`, () => {
    const isLeapYear = checkLeapYear(year);
    const february = getFebruary();
    const answer = isLeapYear
      ? Array.from({ length: 29 }, () => 0)
      : Array.from({ length: 28 }, () => 0);
    expect(february).toStrictEqual(answer);
  });
});

describe("target을 targetLength 자리수로 맞춰고 앞 자리에 원하는 값을 채워주는 test", () => {
  test(`2를 02로 변경`, () => {
    const target = 2;
    const targetLength = 2;
    const padString = "0";
    expect(fillZero(target, targetLength, padString)).toBe("02");
  });
});
