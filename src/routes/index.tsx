import { ElementType, lazy } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import AsyncBoundary from "@src/components/common/asyncBoundary";

const Loadable = (Component: ElementType) => (props: any) => {
  const { pathname } = useLocation();
  const isAuth = pathname.includes("/auth");

  return (
    <AsyncBoundary errorFallback={<></>} suspenseFallback={<></>}>
      <Component {...props} />
    </AsyncBoundary>
  );
};

const Home = Loadable(lazy(() => import("../pages/home")));

const router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [{ element: <Home />, index: true }],
    },
  ]);
};

export default router;
