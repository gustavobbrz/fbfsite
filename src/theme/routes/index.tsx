import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import Competitions from "../../pages/Competitions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Competitions />} />
        <Route path="competitions" element={<Competitions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
