
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, MessageSquareIcon, FileTextIcon, CreditCardIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for upcoming appointments
const UPCOMING_APPOINTMENTS = [
  {
    id: "1",
    doctorName: "Dr. Jane Smith",
    specialty: "Family Medicine",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: "2",
    doctorName: "Dr. Mark Johnson",
    specialty: "Cardiology",
    date: "2023-06-22",
    time: "2:30 PM",
    status: "pending",
  },
];

const PatientDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-clinic-primary">Patient Dashboard</h2>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <CalendarIcon className="h-6 w-6 text-clinic-primary" />
            </div>
            <h3 className="font-medium mb-1">Book Appointment</h3>
            <p className="text-sm text-muted-foreground mb-3">Schedule a visit with a doctor</p>
            <Button asChild className="mt-auto bg-clinic-primary hover:bg-clinic-secondary">
              <Link to="/appointments">Book Now</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <MessageSquareIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium mb-1">Chat with Doctor</h3>
            <p className="text-sm text-muted-foreground mb-3">Get quick medical advice</p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/messages">Start Chat</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <FileTextIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-medium mb-1">Medical Records</h3>
            <p className="text-sm text-muted-foreground mb-3">Access your health documents</p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/medical-records">View Records</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
              <CreditCardIcon className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-medium mb-1">Payment</h3>
            <p className="text-sm text-muted-foreground mb-3">Manage your billing and payments</p>
            <Button asChild variant="outline" className="mt-auto">
              <Link to="/payments">View Payments</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Upcoming Appointments</CardTitle>
          <CardDescription>
            Scheduled doctor visits and consultations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {UPCOMING_APPOINTMENTS.length > 0 ? (
              UPCOMING_APPOINTMENTS.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{appointment.doctorName}</p>
                    <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    <div className="flex items-center text-sm mt-1">
                      <CalendarIcon className="mr-1 h-4 w-4 text-clinic-primary" />
                      <span>{new Date(appointment.date).toLocaleDateString()}</span>
                      <ClockIcon className="ml-3 mr-1 h-4 w-4 text-clinic-primary" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        appointment.status === "confirmed" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-4 text-muted-foreground">
                No upcoming appointments. Book your first appointment today!
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t p-4 flex justify-center">
          <Button asChild variant="outline">
            <Link to="/appointments">View All Appointments</Link>
          </Button>
        </CardFooter>
      </Card>
      
      {/* Recent Medical Records */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Recent Medical Records</CardTitle>
          <CardDescription>
            Your latest prescriptions and medical documents
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center py-8">
            <FileTextIcon className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No Recent Records</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">
              Your medical records and prescriptions will appear here after your first appointment.
            </p>
            <Button asChild variant="outline">
              <Link to="/appointments">Book an Appointment</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;
