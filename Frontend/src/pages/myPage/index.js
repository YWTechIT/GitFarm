import React, { useState, useEffect } from "react";
import { Container } from "@/components/Container/style";
import * as api from "@/api";
import StartedDayCount from "./StartedDayCount";
import LevelInfo from "./LevelInfo";
import CommitCount from "./CommitCount";
import AccountSettings from "./AccountSettings";

function MyPage() {
  const [memberDate, setMemberDate] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [continuous, setContinues] = useState(0);

  const dataFunc = async () => {
    const data = await api.getMyInfo();

    if (data.success) {
      const user = await data.mypage;
      setMemberDate(user.memberDate);
      setTotalScore(user.totalScore);
      setTotal(user.total);
      setContinues(user.continuous);
    }
  };

  useEffect(() => {
    dataFunc();
  }, []);

  return (
    <Container>
      <StartedDayCount memberDate={memberDate} />
      <LevelInfo totalScore={totalScore} />
      <CommitCount total={total} continuous={continuous} />
      <AccountSettings />
    </Container>
  );
}

export default MyPage;
