import { Routes, Route } from "react-router-dom";
import { Layout } from "@/app/layout";

import { Overview } from "@/pages/overview";
import { Nodes } from "@/pages/nodes";
import { Analytics } from "@/pages/analytics";
import { WatchList } from "@/pages/watchlist";
import { About } from "@/pages/about";
import { Docs } from "@/pages/docs";
import { NotFound } from "@/pages/404"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="nodes" element={<Nodes />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="watch" element={<WatchList />} />
        <Route path="about" element={<About />} />
        <Route path="docs" element={<Docs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
