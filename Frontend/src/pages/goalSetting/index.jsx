import React, { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";

import CommitGoal from "./CommitGoal";
import Resolution from "./Resolution";
import InputModal from "./InputModal";
import { Container, TitleText, Wrapper } from "./style";
import { useAuth } from "../../contexts/auth";

function GoalSetting() {
  const { isLogin } = useAuth();
  const [randomNum, setRandomNum] = useState(undefined);
  const [modalType, setModalType] = useState("goal");
  const modalRef = useRef();

  const modalOpenHandler = (type) => {
    setModalType(type);
    modalRef.current.show();
  };

  useEffect(() => {
    if (isLogin) {
      const random = Math.floor(Math.random() * 3);
      setRandomNum(random);
    }
  }, []);

  if (!isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <TitleText>목표 설정</TitleText>
      <Wrapper>
        <CommitGoal onClick={() => modalOpenHandler("goal")} />
        <Resolution
          onClick={() => modalOpenHandler("resolution")}
          randomViewNum={randomNum}
        />

        <InputModal modalType={modalType} ref={modalRef} />
      </Wrapper>
    </Container>
  );
}

export default GoalSetting;
