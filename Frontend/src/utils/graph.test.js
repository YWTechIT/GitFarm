import { sliceDate } from "./graph";

test("sliceDate 함수 year, month 테스트", () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  expect(sliceDate(new Date())).toEqual({ month, year });
});
