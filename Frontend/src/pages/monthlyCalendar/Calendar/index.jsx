import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import LoadingModal from "@/components/LoadingModal";
import { makeCalendar, getFirstAndLastDate, stageCalc } from "@/utils/calendar";
import useCommitMonthlyCount from "../../../hooks/useCommitMonthlyCount";
import {
  CalenderContainer,
  MonthlyRow,
  MonthlyCell,
  DayRow,
  DateCell,
} from "./style";

function Calendar({ date }) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [dates, setDates] = useState([]);
  const currentMonth = date.getMonth();
  const { firstDate, lastDate } = getFirstAndLastDate(date);
  const { loading, commitCountsPerDate } = useCommitMonthlyCount(firstDate);

  useLayoutEffect(() => {
    setDates(makeCalendar(firstDate, lastDate));
  }, [date]);

  return (
    <div>
      <CalenderContainer>
        <DayRow>
          {days.map((day) => (
            <div key={`${day}-day`}>{day}</div>
          ))}
        </DayRow>
        {!loading ? (
          dates.map((oneWeek, idx2) => (
            <MonthlyRow
              key={`${oneWeek[idx2].date}-${oneWeek[idx2].month}}-monthly-row`}
            >
              {oneWeek.map((perDate, idx) => {
                const weekNum = idx2 * 7;
                return (
                  <MonthlyCell
                    view={perDate.month === currentMonth + 1 && true}
                    key={`${perDate.date}-${perDate.month}-monthly-cell`}
                    stage={stageCalc(
                      commitCountsPerDate[parseInt(idx + weekNum, 10)],
                    )}
                  >
                    <DateCell
                      view={perDate.month === currentMonth + 1 && true}
                      key={`${
                        perDate.date + perDate.month + perDate.year
                      }-date-cell`}
                      stage={stageCalc(
                        commitCountsPerDate[parseInt(idx + weekNum, 10)],
                      )}
                    >
                      {perDate.date}
                    </DateCell>
                  </MonthlyCell>
                );
              })}
            </MonthlyRow>
          ))
        ) : (
          <LoadingModal />
        )}
      </CalenderContainer>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
