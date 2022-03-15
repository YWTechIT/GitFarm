/* eslint-disable consistent-return */
import { useState, useCallback } from "react";
import * as api from "@/api";
import { useAuth } from "../contexts/auth";

function useGoalValue() {
  const { isLogin } = useAuth();
  const [goalLoading, setGoalLoading] = useState(false);

  const getGoalValue = useCallback(async () => {
    if (isLogin) {
      setGoalLoading(true);
      const { success, goal } = await api.getGoal();
      if (success) {
        if (goal !== 0) {
          return goal;
        }

        setGoalLoading(false);
      }
      return 5;
    }
  }, []);

  return [goalLoading, getGoalValue];
}

export default useGoalValue;
