import React, {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
} from "react";
import * as api from "@/api";
import InputModal from "../InputModal";
import useResolutionValue from "../../../hooks/useResolutionValue";

const InputResolutionModal = forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [resolutionLoading, getResolutionValue] = useResolutionValue();

  useImperativeHandle(ref, () => ({
    show() {
      setOpenModal(true);
    },
  }));

  useEffect(() => {
    getResolutionValue().then((result) => setValue(result));
  }, []);

  const postResolutionInput = async (postResolution) => {
    await api.postResolution(postResolution);
  };
  const confirmHandler = async () => {
    if (value.length <= 0) {
      setValidation("값을 입력해주세요");
      return;
    }
    setValidation("");
    await postResolutionInput(value);
    setOpenModal(false);
  };
  return (
    openModal && (
      <InputModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="나의 다짐 설정"
        confirmHandler={confirmHandler}
        validation={validation}
        value={value}
        setValue={setValue}
        inputType="text"
        placeholder="메세지를 설정하세요. (최대 20자)"
        loading={resolutionLoading}
      />
    )
  );
});

export default InputResolutionModal;
