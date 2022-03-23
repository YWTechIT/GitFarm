import { renderHook } from "@testing-library/react-hooks";
import * as api from "@/api";
import useUsersReposLanguage from "./useUsersReposLanguage";
import { wrapper } from "../../tests/mockUseContext";
import {
  mockReposLanguageData,
  mockFalseReposLanguageData,
} from "../../fixtures/graph";

describe("useUsersReposLanguage success가 true일 때", () => {
  beforeEach(() => {
    jest
      .spyOn(api, "getReposLanguage")
      .mockImplementation(() => mockReposLanguageData);
  });

  test("success가 true 일 때", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useUsersReposLanguage(),
      { wrapper },
    );
    await waitForNextUpdate();
    expect(result.current[0]).toStrictEqual(mockReposLanguageData.languages);
    expect(result.current[1]).toStrictEqual(false);
  });
});

describe("useUsersReposLanguage success가 false일 때", () => {
  beforeEach(() => {
    jest
      .spyOn(api, "getReposLanguage")
      .mockImplementation(() => mockFalseReposLanguageData);
  });

  test("success가 false 일 때", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useUsersReposLanguage(),
      { wrapper },
    );
    await waitForNextUpdate();
    expect(result.current[0]).not.toStrictEqual(
      mockFalseReposLanguageData.languages,
    );
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1]).toStrictEqual(false);
  });
});
