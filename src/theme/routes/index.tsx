import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import LoadingScreen from "../../components/LoadingScreen";

const Competitions = lazy(() => import("../../pages/Competitions"));
const UrunHistory = lazy(() => import("../../pages/UrunHistory"));
const Teams = lazy(() => import("../../pages/Teams"));
const Schedule = lazy(() => import("../../pages/Schedule"));
const Results = lazy(() => import("../../pages/Results"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const News = lazy(() => import("../../pages/News"));
const Home = lazy(() => import("../../pages/Home"));
const FBFHistory = lazy(() => import("../../pages/FBFHistory"));
const Contact = lazy(() => import("../../pages/Contact"));
const About = lazy(() => import("../../pages/About"));
const Ranking = lazy(() => import("../../pages/Ranking"));
const Statistics = lazy(() => import("../../pages/Statistics"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="competitions" element={<Competitions />} />
          <Route path="urun-history" element={<UrunHistory />} />
          <Route path="teams" element={<Teams />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="results" element={<Results />} />
          <Route path="news" element={<News />} />
          <Route path="fbf-history" element={<FBFHistory />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
