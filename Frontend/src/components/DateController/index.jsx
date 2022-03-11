import React from "react";
import PropTypes from "prop-types";
import * as Controller from "./style";

function DateController({ date, goToday, month }) {
  return (
    <Controller.Container>
      <Controller.TextWrapper>
        <Controller.DateText onClick={goToday}>
          {date.getFullYear()}년 {month && `${date.getMonth() + 1}월`}{" "}
        </Controller.DateText>
      </Controller.TextWrapper>
    </Controller.Container>
  );
}
DateController.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  goToday: PropTypes.func.isRequired,
  month: PropTypes.bool.isRequired,
};
export default DateController;
