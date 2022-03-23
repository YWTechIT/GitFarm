import { useEffect, useState } from "react";
import { getReposLanguage } from "@/api";
import { useAuth } from "../contexts/auth";

function useUsersReposLanguage() {
  const { isLogin } = useAuth();
  const [reposLanguage, setReposLanguage] = useState();
  const [reposLanguageLoading, setLoading] = useState(false);

  const getUsersReposLanguage = async () => {
    setLoading(true);

    const { success, languages } = await getReposLanguage();
    if (success) {
      setReposLanguage(languages);
    } else {
      setReposLanguage([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isLogin) {
      getUsersReposLanguage();
    }
  }, []);

  return [reposLanguage, reposLanguageLoading];
}
export default useUsersReposLanguage;
