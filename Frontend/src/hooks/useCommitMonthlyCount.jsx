import { useState, useEffect } from "react";
import { getCommitMonthly } from "@/api";
import { matchDateCommit } from "@/utils/calendar";
import { useAuth } from "../contexts/auth";

function useCommitMonthlyCount(firstDate) {
  const { isLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [commitCountsPerDate, setCommitCountsPerDate] = useState([]);

  const getCommitMonthlyCount = async () => {
    setLoading(true);

    const commitMonthData = await getCommitMonthly();
    if (commitMonthData.success) {
      const { commitEachDay } = commitMonthData;
      setCommitCountsPerDate(matchDateCommit(firstDate, commitEachDay));
      setLoading(false);
      return;
    }
    setCommitCountsPerDate([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
    ]);
    setLoading(false);
  };
  useEffect(() => {
    if (isLogin) {
      getCommitMonthlyCount();
    }
  }, []);
  return { loading, commitCountsPerDate };
}

export default useCommitMonthlyCount;
