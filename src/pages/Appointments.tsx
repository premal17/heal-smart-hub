
import AppointmentCalendar from "@/components/appointments/AppointmentCalendar";
import { useAuth } from "@/context/AuthContext";

const Appointments = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-clinic-primary">
        {user?.role === 'patient' 
          ? 'Book an Appointment' 
          : user?.role === 'doctor'
          ? 'Appointment Schedule'
          : 'Appointment Management'}
      </h2>
      
      <AppointmentCalendar />
    </div>
  );
};

export default Appointments;
