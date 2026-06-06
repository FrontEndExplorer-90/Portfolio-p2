import { Routes, Route } from "react-router-dom";

import NookMarket from "./pages/NookMarket";
import Holidaze from "./pages/Holidaze";
import WebshopExperience from "./pages/WebshopExperience";
import JSocial from "./pages/JSocial";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/nookmarket" element={<NookMarket />} />
      <Route path="/holidaze" element={<Holidaze />} />
      <Route path="/webshop" element={<WebshopExperience />} />
      <Route path="/jsocial" element={<JSocial />} />
    </Routes>
  );
}
