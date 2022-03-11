import { useState, useEffect } from "react";
import * as api from "@/api";
import { matchDateCommit } from "@/utils/calendar";

function useCommitMonthlyCount(firstDate) {
  const [loading, setLoading] = useState(false);
  const [commitCountsPerDate, setCommitCountsPerDate] = useState([]);

  const getCommitMonthlyCount = async () => {
    setLoading(true);

    // const year = String(date.getFullYear());
    // const month = fillZeroMonth(date.getMonth() + 1);
    const commitMonthData = await api.getCommitMonthly();
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
    getCommitMonthlyCount();
  }, []);
  return [loading, commitCountsPerDate];
}

export default useCommitMonthlyCount;
