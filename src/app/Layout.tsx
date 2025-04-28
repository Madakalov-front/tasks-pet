import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../widgets";
import clsx from "clsx";
import { Footer } from "../widgets/Footer";

export const Layout = () => {
  const location = useLocation();
  const formatUrl = location.pathname.replace(/[/]/g, " ").trim().split(" ")[0];

  return (
    <div className={clsx("site", `site--${formatUrl || "index"}`)}>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
