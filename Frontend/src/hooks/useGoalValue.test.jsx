import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import * as api from "@/api";
import useGoalValue from "./useGoalValue";
import { wrapper } from "../../tests/mockUseContext";
import { mockGoalData } from "../../fixtures/goal";

describe("Test for `useGoalValue`", () => {
  beforeEach(() => {
    jest.spyOn(api, "getGoal").mockImplementation(() => mockGoalData);
  });

  it("returns 0이 아닌 목표 correctly", async () => {
    const { result } = renderHook(() => useGoalValue(), { wrapper });

    await waitFor(() =>
      result.current
        .getGoalValue()
        .then((res) => expect(res).toStrictEqual(mockGoalData.goal)),
    );
  });
});
