/* eslint-disable import/extensions */

import { Commit } from "../model/index.js";
import { getUserObjectId } from "../utils/db.js";

/* eslint-disable import/prefer-default-export */
export const getScore = (commits, issues, pulls) => {
  const CommitEXP = 10;
  const IssueEXP = 10;
  const PullEXP = 10;
  const score = CommitEXP * commits + IssueEXP * issues + PullEXP * pulls;
  return score;
};

export const getAccumulatedTotalScore = async (req, curTodayScore) => {
  try {
    const { user } = req;
    const _id = await getUserObjectId(user);
    const commitDocument = await Commit.findById(_id);
    const totalScore = commitDocument?.totalScore;
    const prevTodayScore = commitDocument?.todayScore;
    const result = totalScore + curTodayScore - prevTodayScore;
    return result;
  } catch (e) {
    console.log(e.message);

    return todayScore;
  }
};
