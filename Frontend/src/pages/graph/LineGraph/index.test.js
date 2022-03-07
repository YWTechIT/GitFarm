import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LineGraph from "./index";
import { mockCommitData } from "../../../../fixtures/graph";

describe("LineGraphContainer 렌더링 확인", () => {
  test("로딩 중일 때", () => {
    render(<LineGraph commitData={mockCommitData} loading />);
    const outputElement = screen.queryByText("월간 커밋 추이");
    expect(outputElement).toBeNull();
  });

  test("로딩 끝 && commitData가 잘 들어왔을 때", () => {
    render(<LineGraph commitData={mockCommitData} loading={false} />);
    const outputElement = screen.getByText("월간 커밋 추이");
    expect(outputElement).toBeInTheDocument();
  });

  test("로딩 끝 && commitData가 빈 배열로 들어와서 예외 처리된 경우", () => {
    render(<LineGraph commitData={[]} loading={false} />);
    const outputElement = screen.getByText("데이터가 없습니다.");
    expect(outputElement).toBeInTheDocument();
  });
});

describe("commitData가 recharts에서 잘 출력 되는지 확인", () => {
  test("commitData가 잘 들어고 차트에 이번 달이 포함된 경우", () => {
    render(<LineGraph commitData={mockCommitData} loading={false} />);
    const thisMonth = new Date().getMonth() + 1;
    const outputElement = screen.getByText(`${thisMonth}월`);
    expect(outputElement).toBeInTheDocument();
  });

  test("1월 출력 확인", () => {
    render(<LineGraph commitData={mockCommitData} loading={false} />);
    const outputElement = screen.getByText("1월");
    expect(outputElement).toBeInTheDocument();
  });

  test("다음 달 데이터가 없는지 확인", () => {
    render(<LineGraph commitData={mockCommitData} loading={false} />);
    const thisMonth = new Date().getMonth() + 2;
    const outputElement = screen.queryByText(`${thisMonth}월`);
    expect(outputElement).toBeNull();
  });
});
