import { makeLanguageRatioArray, languageColor } from "./pieChart";
import { mockReposLanguage, languageRatioArray } from "../../fixtures/graph";

test("makeLanguageRatioArray function test", () => {
  const output = makeLanguageRatioArray(mockReposLanguage);
  expect(output).toEqual(languageRatioArray);
});

test("languageColor function test", () => {
  const output = languageColor(languageRatioArray);
  const expected = ["#f1e05a", "#2b7489", "#e44b23", "#563d7c"];
  expect(output).toEqual(expected);
});
