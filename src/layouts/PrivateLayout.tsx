import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
const outletContainer = {
  border: "1px solid rgba(161, 163, 171, 0.63)",
  boxShadow: "0px 4px 4px rgba(0,0, 0, 0.25)"
}

const PrivateLayout = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[url(@/assets/images/bg-private.png)] bg-no-repeat bg-center bg-cover">
      <div className="md:w-11/12 lg:w-10/12 xl:w-9/12">
        <Topbar />
        <div className="flex w-full h-fulll bg-white">
          <Sidebar className="abso" />
          <div className="w-full h-fulll py-6 ">
            <div className="w-11/12 mx-auto h-fulll rounded-xl p-6" style={outletContainer}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
