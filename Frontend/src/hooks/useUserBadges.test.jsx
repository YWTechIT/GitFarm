import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import * as api from "@/api";
import { AllBadgesFuncion } from "@/utils/badge";
import useUserBadges from "./useUserBadges";
import { wrapper } from "../../tests/mockUseContext";
import { mockUserBadgesData } from "../../fixtures/badge";
import { mockMyInfoData } from "../../fixtures/myInfo";
import { mockRankData } from "../../fixtures/rank";

describe("Test for `useUserBadges`", () => {
  beforeEach(() => {
    jest
      .spyOn(api, "getUserBadges")
      .mockImplementation(() => mockUserBadgesData);
    jest.spyOn(api, "getMyInfo").mockImplementation(() => mockMyInfoData);
    jest.spyOn(api, "getRank").mockImplementation(() => mockRankData);
  });

  it("returns 다짐 correctly", async () => {
    const { result } = renderHook(() => useUserBadges(), {
      wrapper,
    });
    const { newUserBadges } = await AllBadgesFuncion(
      mockUserBadgesData.badge,
      mockMyInfoData.mypage,
      mockRankData.data,
    );

    await waitFor(() =>
      expect(result.current.userBadges).toStrictEqual(newUserBadges),
    );
  });
});
