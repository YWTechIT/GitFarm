import { useState, useEffect } from "react";
import * as api from "@/api";
import { AllBadgesFuncion } from "@/utils/badge";
import { useAuth } from "../contexts/auth";

function useUserBadges() {
  const { isLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userBadges, setUserBadges] = useState([]);

  const getUserBadges = async () => {
    setLoading(true);

    const [badgeData, mypageData, rankData] = await Promise.allSettled([
      api.getUserBadges(),
      api.getMyInfo(),
      api.getRank(),
    ]).then((results) =>
      results.map((result) =>
        result.status === "fulfilled" ? result.value : [],
      ),
    );
    if (badgeData.length !== 0) {
      const { newUserBadges, newBadges } = await AllBadgesFuncion(
        badgeData.badge,
        mypageData.mypage,
        rankData.data,
      );

      if (newBadges.length !== 0) {
        api.postBadges(newUserBadges);
      }

      setUserBadges(newUserBadges);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (isLogin) {
      getUserBadges();
    }
  }, []);
  return [loading, userBadges];
}

export default useUserBadges;
