
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { 
  CalendarIcon, 
  MessageSquareIcon, 
  UserIcon, 
  HomeIcon, 
  FileTextIcon,
  UsersIcon,
  SettingsIcon,
  CreditCardIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  active: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon: Icon, label, active, onClick }: SidebarItemProps) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start gap-2 mb-1",
      active ? "bg-clinic-accent text-clinic-primary" : "hover:bg-gray-100"
    )}
    onClick={onClick}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </Button>
);

interface SidebarProps {
  activePath: string;
}

const Sidebar = ({ activePath }: SidebarProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const patientMenuItems = [
    { icon: HomeIcon, label: "Dashboard", path: "/dashboard" },
    { icon: CalendarIcon, label: "Appointments", path: "/appointments" },
    { icon: MessageSquareIcon, label: "Messages", path: "/messages" },
    { icon: FileTextIcon, label: "Medical Records", path: "/medical-records" },
    { icon: CreditCardIcon, label: "Payments", path: "/payments" },
    { icon: UserIcon, label: "Profile", path: "/profile" },
  ];

  const doctorMenuItems = [
    { icon: HomeIcon, label: "Dashboard", path: "/dashboard" },
    { icon: CalendarIcon, label: "Schedule", path: "/appointments" },
    { icon: UsersIcon, label: "Patients", path: "/patients" },
    { icon: MessageSquareIcon, label: "Messages", path: "/messages" },
    { icon: FileTextIcon, label: "Records", path: "/medical-records" },
    { icon: UserIcon, label: "Profile", path: "/profile" },
  ];

  const adminMenuItems = [
    { icon: HomeIcon, label: "Dashboard", path: "/dashboard" },
    { icon: UsersIcon, label: "Users", path: "/users" },
    { icon: CalendarIcon, label: "Appointments", path: "/appointments" },
    { icon: FileTextIcon, label: "Records", path: "/medical-records" },
    { icon: CreditCardIcon, label: "Payments", path: "/payments" },
    { icon: SettingsIcon, label: "Settings", path: "/settings" },
  ];

  const getMenuItems = () => {
    switch (user?.role) {
      case "patient":
        return patientMenuItems;
      case "doctor":
        return doctorMenuItems;
      case "admin":
        return adminMenuItems;
      default:
        return patientMenuItems;
    }
  };

  const handleItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-64 bg-white h-full py-6 px-3 border-r">
      <div className="text-lg font-medium text-clinic-primary px-3 mb-6">
        {user?.role === "patient"
          ? "Patient Portal"
          : user?.role === "doctor"
          ? "Doctor Portal"
          : "Admin Portal"}
      </div>
      <div className="space-y-1">
        {getMenuItems().map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={activePath === item.path}
            onClick={() => handleItemClick(item.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
