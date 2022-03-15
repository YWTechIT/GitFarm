import React, { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";

import CommitGoal from "./CommitGoal";
import Resolution from "./Resolution";

import { Container, TitleText, Wrapper } from "./style";
import { useAuth } from "../../contexts/auth";
import InputGoalModal from "./InputGoalModal";

import InputResolutionModal from "./InputResolutionModal";

function GoalSetting() {
  const { isLogin } = useAuth();
  const [randomNum, setRandomNum] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);
  const resolutiongoalModalRef = useRef();

  const modalOpenHandler = (type) => {
    if (type === "goal") {
      setOpenModal(true);
      return;
    }

    if (type === "resolution") {
      resolutiongoalModalRef.current.show();
    }
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

        {openModal && (
          <InputGoalModal openModal={openModal} setOpenModal={setOpenModal} />
        )}
        <InputResolutionModal ref={resolutiongoalModalRef} />
      </Wrapper>
    </Container>
  );
}

export default GoalSetting;
