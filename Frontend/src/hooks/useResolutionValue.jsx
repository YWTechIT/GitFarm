import { useState, useEffect } from "react";
import { getResolution } from "@/api";
import { useAuth } from "../contexts/auth";

function useResolutionValue() {
  const { isLogin } = useAuth();
  const [resolutionValue, setResolutionValue] = useState("");

  const getResolutionValue = async () => {
    const { success, resolution } = await getResolution();

    if (success) {
      if (resolution.length !== 0) {
        setResolutionValue(resolution);
      }
    } else {
      setResolutionValue("우주최강 개발자가 될거야!");
    }
  };
  useEffect(() => {
    if (isLogin) {
      getResolutionValue();
    }
  }, []);
  return { resolutionValue };
}

export default useResolutionValue;
