import React, { useState, useEffect } from "react";
import * as SpeechBubbles from "./style";
import useResolutionValue from "../../../hooks/useResolutionValue";

function SpeechBubble() {
  const [value, setValue] = useState();
  const [resolutionLoading, getResolutionValue] = useResolutionValue();

  useEffect(() => {
    getResolutionValue().then((result) => setValue(result));
  }, []);
  return (
    <SpeechBubbles.Container>
      <SpeechBubbles.Wrapper>
        <SpeechBubbles.Text>
          1일 목표커밋을 달성하여 꾸준히 잔디를 관리하세요
        </SpeechBubbles.Text>
        <SpeechBubbles.Title>{resolutionLoading && value}</SpeechBubbles.Title>
      </SpeechBubbles.Wrapper>
    </SpeechBubbles.Container>
  );
}

export default React.memo(SpeechBubble);
