import { checkLeapYear } from "./date.js";

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
