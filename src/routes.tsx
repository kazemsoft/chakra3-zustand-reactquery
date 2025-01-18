import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import appStore from "@stores/appStore";
import MainLayout from "@pages/layout";

const HomePage = lazy(() => import("@pages/(home)/page"));

export default function AppRoutes() {
  const isAuth = appStore((state) => state.token);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
