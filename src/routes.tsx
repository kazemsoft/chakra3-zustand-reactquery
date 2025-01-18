import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import appStore from "@stores/appStore";

// const AuthLayout = lazy(
//   () => import("./components/layouts/auth-layout/auth-layout")
// );

export default function AppRoutes() {
  const isAuth = appStore((state) => state.token);
  return <Routes></Routes>;
}
