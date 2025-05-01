import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
// const outletContainer = {
//   border: "1px solid rgba(161, 163, 171, 0.63)",
//   boxShadow: "0px 4px 4px rgba(0,0, 0, 0.25)"
// }

const PrivateLayout = () => {
  return (
    <div className="h-screen w-screen bg-[url(@/assets/images/bg-private.png)] bg-cover bg-no-repeat bg-center flex justify-center items-center p-4">
      <div className="relative w-full max-w-[1400px] h-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="">
          <Topbar />
          {/* <div className="w-full h-16 bg-slate-200"></div> */}
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
