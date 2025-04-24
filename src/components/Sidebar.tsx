import Avatar from "./Avatar";
import Profile2 from "../assets/images/profile2.jpg"
import DashboardIcon from "./Icons/dashboard";
import SettingsIcon from "./Icons/settingsIcon";
import TaskManagementIcon from "./Icons/TaskManagementIcon";
import Vitaltask from "./Icons/Vitaltask";
import MyTaskIcon from "./Icons/MyTaskIcon";
import HelpIcon from "./Icons/helpIcon";
import Icon from "./Icon";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    url: "/dashboard",
  },
  {
    name: "Vital Task",
    icon: Vitaltask,
    url: "/settings",
  },
  {
    name: "My Task",
    icon: MyTaskIcon,
    url: "/reports",
  },
  {
    name: "Task Categories",
    icon: TaskManagementIcon,
    url: "/reports",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    url: "/reports",
  },
  {
    name: "Help",
    icon: HelpIcon,
    url: "/reports",
  },
];


function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="h-[calc(100vh-100px)] w-80 bg-[#FF6767] rounded-r-xl flex flex-col justify-between">
      <div>
        <div className="flex justify-center items-center flex-col gap-y-4">
          <Avatar size="lg" className="" rounded={true} imgUrl={Profile2} alt="react icon" />
          <div className="text-white text-center">
            <p className="text-[16px] font-semibold">Sundar Gurung</p>
            <p className="text-[12px] font-normal">sundargurung360@gmail.com</p>
          </div>
        </div>


        <div className="p-5">
          <SidebarItems
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      </div>

      <div className="h-[60px] flex justify-start items-center rounded-lg gap-4 p-4 m-5 cursor-pointer">
        <Icon name="logout" />
        <p className="font-medium text-[16px] text-white">Logout</p>
      </div>
    </div>
  );
}

interface SidebarItemsProps {
  activeItem: string;
  setActiveItem: (name: string) => void;
}

function SidebarItems({ activeItem, setActiveItem }: SidebarItemsProps) {
  return (
    <div className="flex flex-col gap-2">
      {menuItems.map(({ name, icon: Icon }) => {
        const isActive = activeItem === name;
        return (
          <div
            key={name}
            onClick={() => setActiveItem(name)}
            className={`h-[60px] cursor-pointer flex justify-start items-center rounded-lg gap-4 p-4 ${isActive ? "bg-white" : "bg-[#FF6767]"
              }`}
          >
            <Icon color={isActive ? "#FF6767" : "#ffffff"} />
            <p
              className={`font-medium text-[16px] ${isActive ? "text-[#FF6767]" : "text-white"
                }`}
            >
              {name}
            </p>
          </div>
        );
      })}
    </div>
  );
}



export default Sidebar;
