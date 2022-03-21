import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import * as api from "@/api";
import useResolutionValue from "./useResolutionValue";
import { wrapper } from "../../tests/mockUseContext";
import { mockResolutionData } from "../../fixtures/goal";

describe("Test for `useResolutionValue`", () => {
  beforeEach(() => {
    jest
      .spyOn(api, "getResolution")
      .mockImplementation(() => mockResolutionData);
  });

  it("returns 다짐 correctly", async () => {
    const { result } = renderHook(() => useResolutionValue(), { wrapper });

    await waitFor(() =>
      expect(result.current.resolutionValue).toStrictEqual(
        mockResolutionData.resolution,
      ),
    );
  });
});
