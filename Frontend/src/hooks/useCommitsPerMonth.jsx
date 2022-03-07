import { useState, useEffect } from "react";
import * as api from "@/api";
import { sliceDate } from "@/utils/graph";

function useCommitsPerMonth() {
  const [commitData, setCommitData] = useState([]);
  const [commitsLoading, setLoading] = useState(false);
  const { year, month } = sliceDate(new Date());

  function makeCommitEachMonthData(commitEachMonth) {
    const commitEachMonthArray = commitEachMonth.slice(0, month + 1);
    const checkEmptyArray = commitEachMonthArray.every((it) => it === 0);

    if (checkEmptyArray) {
      setCommitData([]);
    } else {
      const createData = commitEachMonthArray
        .slice(1)
        .map((commitCnt, index) => ({
          name: `${index + 1}월`,
          commit: commitCnt,
        }));
      setCommitData(createData);
    }
  }

  const getCommitsPerMonth = async () => {
    setLoading(true);
    const data = await api.getCommitsTotalPerMonth(year);

    if (data.success) {
      const { commitEachMonth } = data;
      makeCommitEachMonthData(commitEachMonth);
    } else {
      setCommitData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCommitsPerMonth();
  }, []);

  return [commitData, commitsLoading];
}
export default useCommitsPerMonth;
