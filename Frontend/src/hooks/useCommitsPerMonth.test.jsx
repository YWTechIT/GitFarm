import { renderHook } from "@testing-library/react-hooks";
import * as api from "@/api";
import useCommitsPerMonth from "./useCommitsPerMonth";
import { wrapper } from "../../tests/mockUseContext";
import {
  mockCommitData,
  mockCommitsTotalPerMonthData,
  mockFalseCommitsTotalPerMonthData,
  mockWrongCommitsTotalPerMonthData,
} from "../../fixtures/graph";

describe("useCommitsPerMonth succes가 true && 데이터가 정상일 때", () => {
  beforeEach(() => {
    jest
      .spyOn(api, "getCommitsTotalPerMonth")
      .mockImplementation(() => mockCommitsTotalPerMonthData);
  });

  test("success가 true && 데이터 정상", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useCommitsPerMonth(),
      { wrapper },
    );
    await waitForNextUpdate();

    const thisMonth = new Date().getMonth() + 1;
    const mockCommitDataUntilThisMonth = mockCommitData.slice(0, thisMonth);

    expect(result.current[0]).toStrictEqual(mockCommitDataUntilThisMonth);
    expect(result.current[1]).toStrictEqual(false);
  });
});

describe("useCommitsPerMonth succes가 false 일 때", () => {
  beforeEach(() => {
    jest
      .spyOn(api, "getCommitsTotalPerMonth")
      .mockImplementation(() => mockFalseCommitsTotalPerMonthData);
  });

  test("success가 false 일 때", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useCommitsPerMonth(),
      { wrapper },
    );
    await waitForNextUpdate();
    expect(result.current[0]).not.toStrictEqual(mockCommitData);
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1]).toStrictEqual(false);
  });
});

describe("useCommitsPerMonth success가 true && commitEachMonth 배열이 0으로만 들어간 경우", () => {
  beforeEach(() => {
    jest
      .spyOn(api, "getCommitsTotalPerMonth")
      .mockImplementation(() => mockWrongCommitsTotalPerMonthData);
  });

  test("success가 true지만 commitEachMonth가 0 일 때", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useCommitsPerMonth(),
      { wrapper },
    );
    await waitForNextUpdate();
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1]).toStrictEqual(false);
  });
});
