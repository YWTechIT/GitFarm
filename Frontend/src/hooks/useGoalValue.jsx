/* eslint-disable consistent-return */
import { useCallback } from "react";
import { getGoal } from "@/api";
import { useAuth } from "../contexts/auth";

function useGoalValue() {
  const { isLogin } = useAuth();

  const getGoalValue = useCallback(async () => {
    if (isLogin) {
      const { success, goal } = await getGoal();
      if (success) {
        if (goal !== 0) {
          return goal;
        }
      }
      return 5;
    }
  }, []);

  return { getGoalValue };
}

export default useGoalValue;
