import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import * as api from "@/api";
import { getFirstAndLastDate, matchDateCommit } from "@/utils/calendar";
import useCommitMonthlyCount from "./useCommitMonthlyCount";
import { wrapper } from "../../tests/mockUseContext";
import { mockData } from "../../fixtures/calendar";

const date = new Date();

const { firstDate } = getFirstAndLastDate(date);

describe("Test for `useCommitMonthlyCount`", () => {
  beforeEach(() => {
    jest.spyOn(api, "getCommitMonthly").mockImplementation(() => mockData);
  });

  it("returns 다짐 correctly", async () => {
    const { result } = renderHook(() => useCommitMonthlyCount(firstDate), {
      wrapper,
    });

    await waitFor(() =>
      expect(result.current.commitCountsPerDate).toStrictEqual(
        matchDateCommit(firstDate, mockData.commitEachDay),
      ),
    );
  });
});
