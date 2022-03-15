import React, { useEffect, useState } from "react";
import * as api from "@/api";
import PropTypes from "prop-types";
import InputModal from "../InputModal";
import useGoalValue from "../../../hooks/useGoalValue";

function InputGoalModal({ openModal, setOpenModal }) {
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState("");
  const [goalLoading, getGoalValue] = useGoalValue();
  const postGoalInput = async (goalNum) => {
    await api.postGoal(goalNum);
  };

  useEffect(() => {
    getGoalValue().then((result) => setValue(Number(result)));
  }, []);

  const confirmHandler = async () => {
    if (value < 1 || value > 99) {
      setValidation("1~99까지의 숫자를 입력해주세요");
      return;
    }
    setValidation("");
    await postGoalInput(Number(value));
    setOpenModal(false);
  };
  return (
    <InputModal
      openModal={openModal}
      setOpenModal={setOpenModal}
      title="일별 목표 커밋 수"
      confirmHandler={confirmHandler}
      validation={validation}
      value={value}
      setValue={setValue}
      inputType="number"
      placeholder="숫자를 입력하세요. (목표 일일 커밋 수)"
      loading={goalLoading}
    />
  );
}
InputGoalModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
export default InputGoalModal;
