import Avatar from "./Avatar";
import Profile3 from "../assets/images/profile3.jpg";
import DashboardIcon from "./Icons/dashboard";
import SettingsIcon from "./Icons/settingsIcon";
import TaskManagementIcon from "./Icons/TaskManagementIcon";
import Vitaltask from "./Icons/Vitaltask";
import MyTaskIcon from "./Icons/MyTaskIcon";
import HelpIcon from "./Icons/helpIcon";
import Icon from "./Icon";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    url: "/dashboard",
  },
  {
    name: "Vital Task",
    icon: Vitaltask,
    url: "/vital-tasks",
  },
  {
    name: "My Task",
    icon: MyTaskIcon,
    url: "/my-tasks",
  },
  {
    name: "Task Categories",
    icon: TaskManagementIcon,
    url: "/categories",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    url: "/settings",
  },
  {
    name: "Help",
    icon: HelpIcon,
    url: "/help",
  },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="hidden lg:flex flex-col justify-between w-64 bg-[#FF6767] rounded-r-2xl py-6 px-4 mt-12">
      <div className="flex flex-col items-center gap-4">
        <div className="-mt-16 absolute">
          <Avatar
            size="lg"
            rounded
            imgUrl={Profile3}
            className=""
            alt="User profile"
          />
        </div>
        <div className="text-white text-center mt-12">
          <p className="text-[16px] font-semibold">Sundar Gurung</p>
          <p className="text-[12px] font-normal">sundargurung360@gmail.com</p>
        </div>
        <SidebarItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
      <Link
        to={"/"}
        className="flex items-center gap-3 text-white cursor-pointer p-4 hover:bg-white hover:text-[#FF6767] rounded-lg transition"
      >
        <Icon name="logout" />
        <p className="font-medium text-[16px]">Logout</p>
      </Link>
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
      {menuItems.map(({ url, name, icon: Icon }) => {
        const isActive = activeItem === name;
        return (
          <Link
            to={`${url}`}
            key={name}
            onClick={() => setActiveItem(name)}
            className={`h-[60px] cursor-pointer flex justify-start items-center rounded-lg gap-4 p-2 lg:p-4 ${
              isActive ? "bg-white" : "bg-[#FF6767]"
            }`}
          >
            <Icon color={isActive ? "#FF6767" : "#ffffff"} />
            <p
              className={`font-medium text-[16px] ${
                isActive ? "text-[#FF6767]" : "text-white"
              }`}
            >
              {name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
