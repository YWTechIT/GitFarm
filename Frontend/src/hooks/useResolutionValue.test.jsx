import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import * as api from "@/api";
import useResolutionValue from "./useResolutionValue";
import { wrapper } from "../../tests/mockUseContext";

const mockData = { success: true, resolution: "나의 다짐" };

describe("Test for `useResolutionValue`", () => {
  beforeEach(() => {
    jest.spyOn(api, "getResolution").mockImplementation(() => mockData);
  });

  it("returns 다짐 correctly", async () => {
    const { result } = renderHook(() => useResolutionValue(), { wrapper });

    await waitFor(() =>
      expect(result.current.resolutionValue).toStrictEqual(mockData.resolution),
    );
  });
});
