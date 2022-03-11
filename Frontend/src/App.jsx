import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingModal from "@/components/LoadingModal";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { AuthProvider } from "./contexts/auth";

// const Header = lazy(() => import("./components/Header"));
// const Nav = lazy(() => import("./components/Nav"));
const Login = lazy(() => import("./pages/login"));
const Loading = lazy(() => import("./pages/loading"));
const Main = lazy(() => import("./pages/main"));
const MonthlyCalendar = lazy(() => import("./pages/monthlyCalendar"));
const RankPage = lazy(() => import("./pages/rank"));
const Graph = lazy(() => import("./pages/graph"));
const MyPage = lazy(() => import("./pages/myPage"));
const Setting = lazy(() => import("./pages/setting"));
const GoalSetting = lazy(() => import("./pages/goalSetting"));
const Badge = lazy(() => import("./pages/badge"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Nav />
        <Suspense fallback={<LoadingModal />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/main" element={<Main />} />
            <Route path="/calendar" element={<MonthlyCalendar />} />
            <Route path="/rank" element={<RankPage />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/goal" element={<GoalSetting />} />
            <Route path="/badge" element={<Badge />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
