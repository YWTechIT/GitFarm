import React from "react";
import Modal from "@/components/Modal";
import PropTypes from "prop-types";

import { Wrapper } from "./style";
import Input from "../Input";

function InputModal(props) {
  const {
    openModal,
    setOpenModal,
    title,
    confirmHandler,
    validation,
    value,
    setValue,
    inputType,
    placeholder,
  } = props;
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    openModal && (
      <Wrapper>
        <Modal
          setOpenModal={setOpenModal}
          title={title}
          twoBtn
          confirmHandler={confirmHandler}
          inputModal
          validation={validation}
        >
          <Input
            value={value}
            onChangeCallback={onChangeHandler}
            inputType={inputType}
            placeholder={placeholder}
          />
        </Modal>
      </Wrapper>
    )
  );
}
InputModal.defaultProps = {
  validation: "",
  inputType: "text",
  placeholder: "값을 입력하세요.",
};
InputModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  validation: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setValue: PropTypes.func.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputModal;
