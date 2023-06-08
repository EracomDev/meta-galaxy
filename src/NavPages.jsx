import React from "react";
import { Route, Routes } from "react-router-dom";
import BinarySystem from "./Pages/BinarySystem/BinarySystem";
import BonusSystem from "./Pages/BonusSystem/BonusSystem";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyTeam from "./Pages/MyTeam/MyTeam";
import News from "./Pages/News/News";
import Plans from "./Pages/Plans/Plans";
import Promo from "./Pages/Promo/Promo";
import Support from "./Pages/Support/Support";
import ProgramLevel from "./Pages/ProgramLevel/ProgramLevel";
import LevelDetails from "./Pages/LevelDetails/LevelDetails";
import Partners from "./Pages/Partners/Partners";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
const NavPages = () => {
  return (
    <Routes>
      <Route exact={true} path="/*" element={<Dashboard />}></Route>
      <Route exact={true} path="/partners" element={<Partners />}></Route>
      <Route exact={true} path="/my_team" element={<MyTeam />}></Route>
      <Route exact={true} path="/bonus_system" element={<BonusSystem />}></Route>
      <Route exact={true} path="/plans" element={<Plans />}></Route>
      <Route exact={true} path="/news" element={<News />}></Route>
      <Route exact={true} path="/promo" element={<Promo />}></Route>
      <Route exact={true} path="/support" element={<Support />}></Route>
      <Route exact={true} path="/binary_system" element={<BinarySystem />}></Route>
      <Route path="/level" element={<ProgramLevel />}></Route>
      <Route path="/level_details" element={<LevelDetails />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  );
};

export default NavPages;
