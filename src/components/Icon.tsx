import Mail from '../assets/icons/baseline-email.svg';
import Password from '../assets/icons/password.svg';
import ConfirmPassword from '../assets/icons/password-outline.svg';
import User from '../assets/icons/user.svg';
import FirstName from '../assets/icons/edit-name.svg';
import LastName from '../assets/icons/outline_edit-name.svg';

export type IconName = 'mail' | 'password' | 'confirmPassword' | "user" | 'firstName' | 'lastName';

const icons: Record<IconName, string> = {
  mail: Mail,
  password: Password,
  confirmPassword: ConfirmPassword,
  user: User,
  firstName: FirstName,
  lastName: LastName
};

type IconProps = {
  name: IconName;
  alt?: string;
  className?: string;
};

function Icon({ name, alt = '', className = '' }: IconProps) {
  const src = icons[name];
  return <img src={src} alt={alt || name} className={className} />;
}

export default Icon;