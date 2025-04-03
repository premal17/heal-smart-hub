
import { useAuth } from "@/context/AuthContext";
import PatientDashboard from "@/components/dashboard/PatientDashboard";
import DoctorDashboard from "@/components/dashboard/DoctorDashboard";
import AdminDashboard from "@/components/dashboard/AdminDashboard";

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboardByRole = () => {
    switch (user?.role) {
      case "patient":
        return <PatientDashboard />;
      case "doctor":
        return <DoctorDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <PatientDashboard />;
    }
  };

  return <>{renderDashboardByRole()}</>;
};

export default Dashboard;
