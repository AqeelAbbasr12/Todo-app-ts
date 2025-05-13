import Mail from "../assets/icons/baseline-email.svg";
import Password from "../assets/icons/password.svg";
import ConfirmPassword from "../assets/icons/password-outline.svg";
import User from "../assets/icons/user.svg";
import FirstName from "../assets/icons/edit-name.svg";
import LastName from "../assets/icons/outline_edit-name.svg";
import Search from "../assets/icons/search.svg";
import Bell from "../assets/icons/bell.svg";
import Calender from "../assets/icons/calender.svg";
import Logout from "../assets/icons/logout.svg";
import Menu from "../assets/icons/menu.svg";
import Pending from "../assets/icons/pending.svg";
import Plus from "../assets/icons/plus.svg";
import TaskStatus from "../assets/icons/task-status.svg";
import TaskCompleted from "../assets/icons/task-completed.svg";
import Delete from "../assets/icons/delete.svg";
import Edit from "../assets/icons/edit.svg";

export type IconName =
  | "mail"
  | "password"
  | "confirmPassword"
  | "user"
  | "firstName"
  | "lastName"
  | "search"
  | "bell"
  | "calender"
  | "logout"
  | "menu"
  | "pending"
  | "plus"
  | "taskStatus"
  | "taskCompleted"
  | "delete"
  | "edit";

const icons: Record<IconName, string> = {
  mail: Mail,
  password: Password,
  confirmPassword: ConfirmPassword,
  user: User,
  firstName: FirstName,
  lastName: LastName,
  search: Search,
  bell: Bell,
  calender: Calender,
  logout: Logout,
  menu: Menu,
  pending: Pending,
  plus: Plus,
  taskStatus: TaskStatus,
  taskCompleted: TaskCompleted,
  edit: Edit,
  delete: Delete,
};

type IconProps = {
  name: IconName;
  alt?: string;
  className?: string;
};

function Icon({ name, alt = "", className = "" }: IconProps) {
  const src = icons[name];
  return (
    <img
      src={src}
      alt={alt || name}
      className={className}
    />
  );
}

export default Icon;
