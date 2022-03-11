import { useState, useEffect } from "react";
import * as api from "@/api";

function useResolutionValue() {
  const [resolutionLoading, setResolutionLoading] = useState(false);
  const [resolutionValue, setResolutionValue] = useState("");

  const getGoalValue = async () => {
    setResolutionLoading(true);
    const { success, goal } = await api.getGoal();
    if (success) {
      if (goal !== 0) {
        setResolutionValue(goal);
      }

      setResolutionLoading(false);
    }
  };
  useEffect(() => {
    getGoalValue();
  }, []);
  return [resolutionLoading, resolutionValue];
}

export default useResolutionValue;
