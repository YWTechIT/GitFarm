import Days7 from "@/assets/icon/badge/7days.svg";
import Days14 from "@/assets/icon/badge/14days.svg";
import Days21 from "@/assets/icon/badge/21days.svg";
import Days28 from "@/assets/icon/badge/28days.svg";

import Achievement500 from "@/assets/icon/badge/500achievement.svg";
import Achievement1000 from "@/assets/icon/badge/1000achievement.svg";
import Achievement5000 from "@/assets/icon/badge/5000achievement.svg";

import Level1 from "@/assets/icon/level/level1.svg";
import Level2 from "@/assets/icon/level/level2.svg";
import Level3 from "@/assets/icon/level/level3.svg";
import Level4 from "@/assets/icon/level/level4.svg";
import Level5 from "@/assets/icon/level/level5.svg";

import Ranking1 from "@/assets/icon/badge/ranking1.svg";
import Ranking2 from "@/assets/icon/badge/ranking2.svg";
import Ranking3 from "@/assets/icon/badge/ranking3.svg";

export const badgesType = [
  {
    id: 0,
    title: "커밋 500개 달성",
    icon: Achievement500,
    userHaveBadge: false,
  },
  {
    id: 1,
    title: "커밋 1000개 달성",
    icon: Achievement1000,
    userHaveBadge: false,
  },
  {
    id: 2,
    title: "커밋 5000개 달성",
    icon: Achievement5000,
    userHaveBadge: false,
  },

  { id: 3, title: "랭킹 1위", icon: Ranking1, userHaveBadge: false },
  { id: 4, title: "랭킹 2위", icon: Ranking2, userHaveBadge: false },
  { id: 5, title: "랭킹 3위", icon: Ranking3, userHaveBadge: false },

  {
    id: 6,
    title: "7일 연속 커밋 달성",
    icon: Days7,
    userHaveBadge: false,
  },
  {
    id: 7,
    title: "2주 연속 커밋 달성",
    icon: Days14,
    userHaveBadge: false,
  },
  {
    id: 8,
    title: "3주 연속 커밋 달성",
    icon: Days21,
    userHaveBadge: false,
  },
  {
    id: 9,
    title: "4주 연속 커밋 달성",
    icon: Days28,
    userHaveBadge: false,
  },

  { id: 10, title: "씨앗 레벨", icon: Level1, userHaveBadge: false },
  { id: 11, title: "초보 농부", icon: Level2, userHaveBadge: false },
  { id: 12, title: "중수 농부", icon: Level3, userHaveBadge: false },
  { id: 13, title: "고수 농부", icon: Level4, userHaveBadge: false },
  { id: 14, title: "팜 마스터", icon: Level5, userHaveBadge: false },
];
