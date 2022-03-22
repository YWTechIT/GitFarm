import React from "react";
import Modal from "@/components/Modal";
import PropTypes from "prop-types";
import Description from "@/components/Description";
import WinkIcon from "@/assets/icon/wink-face.svg";
import { Wrapper, ScoreText } from "@/pages/setting/DeleteAccountModal/style";

function ScoreInformationModal({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="점수 산정 기준">
      <Wrapper>
        <Description>
          <ScoreText>
            Commit: 10 Point
            <br />
            PR: 10 Point
            <br />
            Issue: 5 Point
            <br />
          </ScoreText>
        </Description>
        <WinkIcon />
      </Wrapper>
    </Modal>
  );
}
ScoreInformationModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
export default ScoreInformationModal;
