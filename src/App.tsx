import { Routes, Route } from "react-router-dom";
// import RequireAuth from "./components/RequireAuth";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import SignIn from "./pages/Login";
import SignUp from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import ChangePassword from "./pages/ChangePassword";
import AccountInfo from "./pages/AccountInfo";
import VitalTasks from "./pages/VitalTasks";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Categories from "./pages/Categories";
import CreateCategory from "./pages/CreateCategory";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Route>

      <Route
        element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/account-information" element={<AccountInfo />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/vital-tasks" element={<VitalTasks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Route>
    </Routes>
  );
};
export default App
