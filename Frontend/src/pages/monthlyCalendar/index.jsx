import React, { useState } from "react";
import DateController from "@/components/DateController";
import { Navigate } from "react-router-dom";
import { Container } from "./style";
import Calender from "./Calendar";
import ColorGuide from "./ColorGuide";
import SpeechBubble from "./SpeechBubble";
import { useAuth } from "../../contexts/auth";

function MonthlyCalendar() {
  const { isLogin } = useAuth();
  const toDay = new Date();
  const [date, setDate] = useState(toDay);
  const goToday = () => {
    setDate(toDay);
  };

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <DateController date={date} goToday={goToday} month />

      <Calender date={date} />

      <ColorGuide />
      <SpeechBubble />
    </Container>
  );
}

export default MonthlyCalendar;
