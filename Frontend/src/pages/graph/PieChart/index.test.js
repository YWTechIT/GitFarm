import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import PieChart from "./index";
import "jest-styled-components";
import { mockReposLanguage } from "../../../../fixtures/graph";

const PieChartComponentWithThemeProvider = (
  <ThemeProvider theme={theme}>
    <PieChart reposLanguage={mockReposLanguage} loading={false} />
  </ThemeProvider>
);

describe("PieChartContainer 렌더링 확인", () => {
  test("로딩 중일 때", () => {
    render(
      <ThemeProvider theme={theme}>
        <PieChart reposLanguage={mockReposLanguage} loading />
      </ThemeProvider>,
    );
    const outputElement = screen.queryByText("사용 언어 비율");
    expect(outputElement).toBeNull();
  });

  test("로딩 끝 && reposLanguage가 잘 들어왔을 때", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("사용 언어 비율");
    expect(outputElement).toBeInTheDocument();
  });

  test("로딩 끝 && reposLanguage가 빈 배열로 들어와서 예외 처리된 경우", () => {
    render(
      <ThemeProvider theme={theme}>
        <PieChart reposLanguage={[]} loading={false} />
      </ThemeProvider>,
    );
    const outputElement = screen.getByText("데이터가 없습니다.");
    expect(outputElement).toBeInTheDocument();
  });
});

describe("languageRatioArray && COLORS 데이터 확인", () => {
  test("languageRatioArray 비율 데이터 확인", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("43.24%");
    expect(outputElement).toBeInTheDocument();
  });

  test("languageRatioArray 언어 데이터 확인", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("JavaScript");
    expect(outputElement).toBeInTheDocument();
  });

  test("languageRatioArray 언어 색상 데이터 확인", () => {
    render(PieChartComponentWithThemeProvider);
    const outputElement = screen.getByText("JavaScript");
    const javascriptColor = outputElement.parentElement.previousSibling;
    expect(javascriptColor).toHaveStyleRule("background-color", "#f1e05a");
  });
});
