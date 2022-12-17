import { Route, Routes } from "react-router-dom";
import { pagePaths } from "../../constants/pagePaths";
import { DashboardPage } from "../../pages/DashboardPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ProfilePage } from "../../pages/ProfilePage";
import { SettingsPage } from "../../pages/SettingsPage";
import { TestPage } from "../../pages/TestPage";
import { Sidebar } from "../Sidebar";

export const AuthenticatedApplication = () => {
  return (
    <div>
      <section className="grid h-screen grid-cols-[200px_1fr] sm:grid-cols-[275px_1fr]">
        <div>
          <Sidebar />
        </div>

        <div className="bg-lighter dark:bg-darker">
          <Routes>
            <Route index element={<DashboardPage />} />

            <Route path={pagePaths.profile} element={<ProfilePage />} />

            <Route path={pagePaths.settings} element={<SettingsPage />} />

            <Route path={pagePaths.test} element={<TestPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};
