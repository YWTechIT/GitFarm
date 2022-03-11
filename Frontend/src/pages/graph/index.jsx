import React, { useState } from "react";
import DateController from "@/components/DateController";
import { Navigate } from "react-router-dom";
import PieChartComponent from "./PieChart";
import LineGraph from "./LineGraph";
import * as Graphs from "./style";
import useUsersReposLanguage from "../../hooks/useUsersReposLanguage";
import useCommitsPerMonth from "../../hooks/useCommitsPerMonth";
import { useAuth } from "../../contexts/auth";

function Graph() {
  const { isLogin } = useAuth();
  const [date, setDate] = useState(new Date());
  const [reposLanguage, reposLanguageLoading] = useUsersReposLanguage();
  const [commitData, commitsLoading] = useCommitsPerMonth();

  const goToday = () => {
    setDate(new Date());
  };

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <Graphs.Container>
      <Graphs.DateControllerWrapper>
        <DateController date={date} goToday={goToday} month={false} />
      </Graphs.DateControllerWrapper>
      <Graphs.ResponsiveDiv>
        <LineGraph commitData={commitData} loading={commitsLoading} />
        <PieChartComponent
          reposLanguage={reposLanguage}
          loading={reposLanguageLoading}
        />
      </Graphs.ResponsiveDiv>
    </Graphs.Container>
  );
}

export default Graph;
