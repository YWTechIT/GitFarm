import React, { useMemo } from "react";
import LoadingModal from "@/components/LoadingModal";
import { userBadgesTurnTrue } from "@/utils/badge";

import { Navigate } from "react-router-dom";
import SeedIcon from "../../assets/icon/header/seeds.svg";
import * as Badges from "./style";
import Lock from "../../assets/icon/lock.svg";
import { useAuth } from "../../contexts/auth";
import useUserBadges from "../../hooks/useUserBadges";

function Badge() {
  const { isLogin } = useAuth();
  const { loading, userBadges } = useUserBadges();

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  const trueBadge = useMemo(() => userBadgesTurnTrue(userBadges), [userBadges]);
  return (
    <Badges.Container>
      <Badges.IconWrapper>
        <SeedIcon />
      </Badges.IconWrapper>
      <Badges.Text>열심히 커밋 하여 다양한 배지를 모아보세요!</Badges.Text>
      <Badges.BadgeCollections>
        {!loading ? (
          trueBadge.map((badge) => (
            <Badges.PerBadge key={`${badge.id}-${badge.title}`}>
              {badge.userHaveBadge ? <badge.icon /> : <Lock />}
              <p>{badge.title}</p>
            </Badges.PerBadge>
          ))
        ) : (
          <LoadingModal />
        )}
      </Badges.BadgeCollections>
    </Badges.Container>
  );
}

export default Badge;
