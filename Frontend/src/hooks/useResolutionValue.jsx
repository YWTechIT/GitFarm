/* eslint-disable consistent-return */
import { useState, useCallback } from "react";
import * as api from "@/api";
import { useAuth } from "../contexts/auth";

function useResolutionValue() {
  const { isLogin } = useAuth();

  const [resolutionLoading, setResolutionLoading] = useState(false);

  const getResolutionValue = useCallback(async () => {
    if (isLogin) {
      setResolutionLoading(true);
      const { success, resolution } = await api.getResolution();
      if (success) {
        if (resolution !== 0) {
          return resolution;
        }
      }
      setResolutionLoading(false);
      return "우주최강 개발자가 될거야!";
    }
  }, []);
  return [resolutionLoading, getResolutionValue];
}

export default useResolutionValue;
